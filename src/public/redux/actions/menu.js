import axios from 'axios'
// import { async } from 'q'

export const getAll = async () => {
    const result = await axios.get('http://localhost:5000/api/products')
    // console.log('action ' + test)
    return {
        type: 'GET_MENU_FULFILLED',
        payload: result.data
    }
}
