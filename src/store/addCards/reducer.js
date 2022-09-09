import { addCart } from "./actions";


const initialValue = {
    value:JSON.parse(localStorage.getItem('addCards')),
  }
  
  const addCartReducer = (state = initialValue, action) => {





    switch (action.type) {
       
  
        case addCart: {

            let addCardsArr = state.value
addCardsArr.push(action.payload.products[action.payload.index]) 
console.log(addCardsArr)
localStorage.setItem('addCards', JSON.stringify(addCardsArr))

addCardsArr=JSON.parse(localStorage.getItem('addCards'))
          return { value:addCardsArr}
        }
  
        default: {
          return state;
        }
    }
  };

  export default addCartReducer;