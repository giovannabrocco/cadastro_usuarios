//esse arquivo vai auxiliar em conectar com a nossa api

import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000' //endereço onde está o backend
})

export default api