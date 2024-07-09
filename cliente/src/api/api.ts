import axios from "axios";

const desahogateApi = axios.create({
    baseURL: 'https://desahogate-app.azurewebsites.net/api',
});

export default desahogateApi;


