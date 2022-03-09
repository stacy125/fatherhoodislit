import CreateDataContext from "./CreateDataContext";
import YelpAPI from '../api/YelpAPI';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const eventReducer = (state, action) => {
    switch (action.type) {
        case 'get_events':
            return action.payload;
        case 'edit_event':
            return state.map((event) => {
                return event.id === action.payload.id ? action.payload : event;
            });
        case 'delete_event':
            return state.filter((event) => event.id !== action.payload);
        case 'add_event':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    photo: action.payload.photo,
                    location: action.payload.location,
                    description: action.payload.description,
                    url: action.payload.url,
                    comment: action.payload.comment
                }
            ];

        default:
            state;
    }
}

const getEvents = dispatch => {
    return async () => {
        const response = await YelpAPI.get('/events')

        dispatch({ type: 'get_events', payload: response.data })
    }
}

const addEvent = (dispatch) => {
    return async (title, photo, location, description, url, comment, callback) => {
        await YelpAPI.post('/events', {
            title,
            photo,
            location,
            description,
            url,
            comment
        })

        dispatch({
            type: 'add_event', payload:
            {
                title,
                photo,
                location,
                description,
                url,
                comment
            }
        })

        if (callback) {
            callback()
        }
    }
}

const deleteEvent = (dispatch) => {
    return async (id) => {
        await YelpAPI.delete(`/events/${id}`)

        dispatch({ type: 'delete_event', payload: id })
    }
}

const editEvent = (dispatch) => {
    return async (
        id,
        title,
        photo,
        location,
        description,
        url,
        comment,
        callback) => {
        await YelpAPI.put(`/events/${id}`, {
            title,
            photo,
            location,
            description,
            url,
            comment
        })

        dispatch({
            type: 'edit_event', payload: {
                id,
                title,
                photo,
                location,
                description,
                url,
                comment
            }
        })
        if (callback) {
            callback()
        }
    }
}

export const { Context, Provider } = CreateDataContext(eventReducer, {
    addEvent, deleteEvent, editEvent, getEvents
}, [])