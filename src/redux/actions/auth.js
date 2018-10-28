import axios from '../../axiosInstance'


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
            console.log(results.data.status)
            if (results.data.status) {
                alert('SAVE_USER_SUCCESS')
                // dispatch({ type: 'SAVE_USER_REJECTED', payload: results.data.message })
            } else {
                alert('SAVE_USER_SUCCESS2')
                // dispatch({ type: 'SAVE_USER_SUCCESS' })
            }
        } catch (error) {
            alert('SAVE_USER_REJECTED')
        }
    }
}

