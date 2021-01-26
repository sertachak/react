import axios from 'axios'

const axiosOrders = axios.create( {
    baseURL: 'https://burgertime-63df8-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default axiosOrders;