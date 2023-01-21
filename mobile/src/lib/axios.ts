import axios from "axios";

export const api = axios.create({
    baseURL: 'http://123.456.789.10:3107' 
    /* 
    baseURL: 'http://168.195.220.75:3107'
    baseURL: 'http://26.25.206.100:3107' 
     */
})