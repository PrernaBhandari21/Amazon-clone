import axios from "axios";

const instance = axios.create({
    baseURL : 'http://127.0.0.1:5001/clone-c9f72/us-central1/api' // The API (cloud func) URL
});

export default instance;