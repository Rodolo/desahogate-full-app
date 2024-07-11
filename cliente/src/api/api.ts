import axios from "axios";

const desahogateApi = axios.create({
    baseURL: 'https://desahogate-app.azurewebsites.net/api',
    // baseURL: 'http://localhost:3000/api',
});

export default desahogateApi;


