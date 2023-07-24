import axios from "axios";

export const api = axios.create({
    baseURL: "https://fashion-store-api.onrender.com",
    timeout: 8000,
})