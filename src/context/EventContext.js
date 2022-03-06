import CreateDataContext from "./CreateDataContext";
import YelpAPI from '../'

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
                    comment: action.payload.comment
                }
            ];
    
        default:
            state;
    }
}

const getEvents = dispatch => {
    return async () => {

    }
}