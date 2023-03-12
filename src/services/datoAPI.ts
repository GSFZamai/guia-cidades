import axios from "axios";

export const datoAPI = axios.create({
    baseURL: "https://site-api.datocms.com/",
    headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_DATO_CMS_TOKEN}`,
        "Accept": "application/json",
        "Content-Type": "application/vnd.api+json",
        "X-Api-Version": "3"
    }
})