import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tinder-ash.herokuapp.com'
});

export default instance;