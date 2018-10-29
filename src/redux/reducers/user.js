export default (state = {}, action) => {
    switch (action.type) {
      case 'LOAD_USER_SUCCESS':
        console.log('SAVE_USER_SUCCESS')
        return { ...state,  data: action.payload }
      case 'LOAD_USER_FAILED':
        console.log('SAVE_USER_SUCCESS')
        return { ...state,  data: action.payload }
      default:
        return state;
    }
  };
