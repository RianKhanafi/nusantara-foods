import axios from 'axios'

export const getMenu = (test) => {
    console.log('action ' + test)
    return {
        type: 'GET_MENU',
        payload: axios.get('http://localhost:5000/api/v.0.1/products')
    }
}
