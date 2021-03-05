import axios from "axios";
const instance = axios.create({
    baseURL: "http://hiabhi.pythonanywhere.com/",
});
export default instance;
