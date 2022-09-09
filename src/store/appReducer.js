import { combineReducers } from "redux";
import cardIndexReducer from "./cardId/reducer";
import modalReducer from './modal/reducer'
import modalTextReducer from "./modalText/reducer";
import buttonTextReducer from "./buttonText/reducer";
import addCartReducer from "./addCards/reducer";
import addFavoritesReducer from "./addFavorites/reducer";
import productsReducer from "./products/reducer";


const appReducer = combineReducers({
    modal:modalReducer,
   cardIndex:cardIndexReducer,
   modalText:modalTextReducer,
   buttonText:buttonTextReducer,
   addCart:addCartReducer,
   addFavorites:addFavoritesReducer,
   products:productsReducer

})
export default appReducer