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
