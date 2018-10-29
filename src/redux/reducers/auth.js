export default (state = {}, action) => {
    switch (action.type) {
      case 'SAVE_USER_SUCCESS':
        console.log('SAVE_USER_SUCCESS')
        return { ...state,  data: action.payload }
      case 'SAVE_USER_REJECTED':
        console.log('SAVE_USER_REJECTED')
        return { ...state,  data: null }
      case 'LOGIN_UN_SUCCESS':
        console.log('LOGIN_UN_SUCCESS')
        return { ...state,  data: action.payload }
      case 'LOGIN_SUCCESS':
        console.log('LOGIN_SUCCESS')
        return { ...state,  data: action.payload }
      default:
        return state;
    }
  };
