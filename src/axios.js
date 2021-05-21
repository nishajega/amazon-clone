import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-59fde.cloudfunctions.net/api'
    //'http://localhost:5001/challenge-59fde/us-central1/api' //THE API (cloud function) URL
});

export default instance;

