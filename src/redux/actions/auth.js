import axios from '../../axiosInstance'

export const login = (data) => {
    alert('login')
    return async (dispatch) => {
        try {
            const result = await axios.post('/signin', data)
            console.log(result.data._doc)
            if (result.data.message === 'No this account') {
                alert(result.data.message)
            } else {
                if(result.data.login) {
                    localStorage.setItem('login', true)
                    console.log(result.data._doc)
                    dispatch({ type: 'LOAD_USER_SUCCESS', payload: result.data._doc })
                    dispatch({ type: 'LOGIN_SUCCESS', payload: result.data._doc.email })
                } else {
                    localStorage.setItem('login', result.data.login)
                    dispatch({ type: 'LOGIN_UN_SUCCESS', payload: result.data })
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
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
                dispatch({ type: 'LOAD_USER_SUCCESS', payload: results.data })
                dispatch({ type: 'SAVE_USER_SUCCESS', payload: results.data.email })
        } catch (error) {
            console.log(error)
            dispatch({ type: 'SAVE_USER_REJECTEDss'})
            alert('SAVE_USER_REJECTEDss')
        }
    }
}
