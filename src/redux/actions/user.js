import axios from '../../axiosInstance'

export const saveChangeDataUser = (data) => {
    console.log('action --> saveChangeDataUser ')

    return async (dispatch) => {
        try {
            const results = await axios.put('/users',data)
            console.log(results.data)
            alert('UPDATE_USER_SUCCESS')
            dispatch({ type: 'UPDATE_USER_SUCCESS', payload: results.data })
            console.log(results)
            alert('success')
        } catch (error) {
            console.log(error)
            alert('something is wrong')
        }
    }

}

export const saveChangePasswordUser = (data) => {
    console.log('action --> saveChangePasswordUser ')
    return async (dispatch) => {
        try {
            const results = await axios.put('/users/security',data)
            console.log(results.data)
            alert('UPDATE_USER_PASSAWORD_SUCCESS')
            dispatch({ type: 'UPDATE_USER_SUCCESS', payload: results.data })
            console.log(results)
        } catch (error) {
            console.log(error)
        }
    }
}