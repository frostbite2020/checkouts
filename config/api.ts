import axios from 'axios';

import { baseUrl } from "@/constants/BaseUrl";

const apiConfig = axios.create({
    timeout: 310000,
    headers: {
        Accept: 'application/json',
    },
    baseURL: baseUrl
})