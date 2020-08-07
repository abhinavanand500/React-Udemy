import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID Q0kPJ7wlxFGSjs1zoYzIZyBmPOJBTLS6JCJzhGn3VHA",
    },
});
