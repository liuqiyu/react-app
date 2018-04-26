const initState = {
  text: '',
}

const reducer = (state = initState, action) => {
  switch(action.type) {
    case 'CURRENT_NAV_INDEX':
      return {
        text: action.text,
      };
    default:
      return state;
  }
}

export default reducer;