import axios from "axios";

const http = axios.create({
    baseURL: "https://localhost:7279/api",
    headers: {
        "Content-Type": "application/json"
    }
});

export default http;