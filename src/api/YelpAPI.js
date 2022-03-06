import axios from "axios"


export default YelpAPI = () => {
    axios.create({
        baseURL: 'https://api.yelp.com/v3/business/search',
        
    })

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    // Add Your Key Here!!!
    axios.defaults.headers.common = {
        "YelpAPIKey": "d0vwWK4r4XUwI0eb3c-r2tmht_kkXTAq2HgfK0TdpUWw_yyqx1Wb4DSdez1XqByjwfVOAZQK6DBLzrw5NmLttYc-xH41UuvO7_NaCMpLDSAzISFs4S3evwrt-frZYXYx",
    };
}
