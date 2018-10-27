export default (state = {}, action) => {
    switch (action.type) {
      case 'LOGIN':
        const { email, password, confirmPassword } = action.data
        console.log(email)
        alert(email)
        return {
          uid: action.uid
        };
      case 'LOGOUT':
        return {};
      default:
        return state;
    }
  };
