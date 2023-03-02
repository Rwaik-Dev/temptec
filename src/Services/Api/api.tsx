import axios from "axios"

const api = axios.create({
    baseURL: "https://api.hgbrasil.com/weather?format=json-cors&key=1be225e6 ",

})


export default api;