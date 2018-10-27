export default (state = {}, action) => {
    switch (action.type) {
      case 'LOGIN':
       alert('login')
        return {
          uid: action.uid
        };
      case 'LOGOUT':
        return {};
      default:
        return state;
    }
  };
