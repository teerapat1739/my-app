import axios from '../../axiosInstance'

export const saveChangeDataUser = (data) => {
    console.log('action --> saveChangeDataUser ')

    return async (dispatch) => {
        try {
            const results = await axios.put('/users',data)
            alert('UPDATE_USER_SUCCESS')
            console.log(results)
        } catch (error) {

        }
    }

}