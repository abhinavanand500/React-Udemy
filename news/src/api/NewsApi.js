import axios from "axios";

const KEY = "6eef48c6e2c54220b6a429343ea08d7b";
export default axios.create({
    baseURL: `https://newsapi.org/v2/top-headlines?country=in&apiKey=${KEY}`,
    params: {
        'X-Api-Key': KEY
    },
});

