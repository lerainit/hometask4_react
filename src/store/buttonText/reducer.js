import SET_VALUE from './actions'


const initialValue = {
    value: 'Add to Cart',
  }
  
  const buttonTextReducer = (state = initialValue, action) => {
    switch (action.type) {
       
  
        case SET_VALUE: {
          return { value: action.payload }
        }
  
        default: {
          return state;
        }
    }
  };

  export default buttonTextReducer;
