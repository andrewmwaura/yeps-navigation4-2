// redux/reducers/countReducer.js
const initialState = {
    count: 0,
    text: "-",
  };
   
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'COUNT_INCRESE':
        return {
          ...state,
          count: state.count + 1,          
        };
      case 'COUNT_DECRESE':
        return {
          ...state,
          count: state.count - 1,
        };
      case 'AMEND':
        return {
                ...state,
                count: state.count + 10, 
                text: action.value,
            };
          default:
        return state;
    }
  };