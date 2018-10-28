import axios from 'axios'
import config from '../../configure'

const BASE_URL = config.BASE_URL


export const login = (data) =>{
    console.log(data)
    return(
            {
                type: 'LOGIN',
                data
            }
    )
}


  export const logout = () => ({
    type: 'LOGOUT'
  });


export const saveUser = (values) => {
    let _id = ''
    let _method = 'post'
    if (values.email) {
        alert('has email')
        _method = 'put'
    }
    console.log(values)
    return (dispatch) => {
        return axios({
            method: _method,
            url: `${BASE_URL}/users`,
            data: values,
            headers: { 'Content-Type': 'application/json'}
        }).then(results => {
            if (results.data.status) {
                alert('SAVE_USER_REJECTED')
                // dispatch({ type: 'SAVE_USER_REJECTED', payload: results.data.message })
            } else {
                alert('SAVE_USER_SUCCESS')
                dispatch({ type: 'SAVE_USER_SUCCESS' })
            }
        }).catch(err => {
            alert('SAVE_USER_REJECTED')
            dispatch({ type: 'SAVE_USER_REJECTED', payload: err.message })
        })
    }
}



