import axios from '../../axiosInstance'
import { Redirect } from 'react-router-dom';

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
    if (values.email) {
        alert('has email')
    }
    console.log(values)

    return async (dispatch) => {
        try {
            const results =  await axios.post('/users',values)
            console.log(results.data)
                alert('SAVE_USER_SUCCESS')
                localStorage.setItem('login', true)
                const { email } = results.data
                dispatch({ type: 'SAVE_USER_SUCCESS', payload: email })
        } catch (error) {
            console.log(error)
            alert('SAVE_USER_REJECTEDss')
        }
    }
}

