
import { addCart,deleteCard } from "./actions";


export const addCartAC =  (payload) =>({type:addCart,payload})

export const deleteCardAC = (payload) => ({type:deleteCard,payload})


