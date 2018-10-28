export default (state = {}, action) => {
    switch (action.type) {
      case 'SAVE_USER_SUCCESS':
      console.log('here')
      return { ...state,  data: action.payload }
  case 'SAVE_USER_REJECTED':
      console.log('hereddd')

      return { ...state, userSave: { data: null, isLoading: false, isRejected: true } }
      default:
        return state;
    }
  };
