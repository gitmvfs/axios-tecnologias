import axios from 'axios'

 const api = axios.create({
    baseURL: 'https://witty-petticoat-bee.cyclic.cloud/',
    method: 'GET'
})

export default api