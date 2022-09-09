import React from 'react'
import { useSelector } from 'react-redux'

import CartItem from '../cartitem/cartItem'

const CartPage = (props) =>{

    const addCart = useSelector(store =>store.addCart.value)
return(

<>

{addCart.map(({id,name,price,art,url},index) =><CartItem key={index}  id ={id}  name= {name} price ={price} art ={art} url={url} deleteCartItem ={props.deleteCartItem} index={index} openDeleteModal={props.openDeleteModal} ></CartItem>)}

</>





)






}
export default CartPage


