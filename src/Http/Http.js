import axios from 'axios'
import ls from 'local-storage'

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASEURL,
    headers: {
        authorization: 'Bearer ' + ls.get('token') || ""
    }
})

export default instance