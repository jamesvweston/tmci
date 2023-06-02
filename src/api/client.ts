import axios, { AxiosRequestConfig } from "axios";

const BASE_PATH = process.env.REACT_APP_API_URL as string

const axiosConfig: AxiosRequestConfig = {
    baseURL: BASE_PATH,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
};

export const client = axios.create(axiosConfig);
