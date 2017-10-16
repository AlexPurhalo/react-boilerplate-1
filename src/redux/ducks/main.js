const CHECK_TEST = 'CHECK_TEST';

export const checkTest = () => {
  return {
    type: CHECK_TEST,
  }
}

const initialState = {}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_TEST:
      return state;
    default:
      return state
  }
}

export default reducer;