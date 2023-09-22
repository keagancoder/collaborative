import axios, { AxiosResponse } from 'axios'
import { response } from 'express'
const request = axios.create({
    baseURL: '',
})

request.interceptors.response.use(
    (response: AxiosResponse) => {
        let {code, data, msg, errorCode} = response.data;
        if (code === 0) {
            return data
        } else {
            return Promise.reject(response.data)
        }
    }
)
export default request