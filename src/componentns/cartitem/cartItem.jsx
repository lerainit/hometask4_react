import React from 'react'
import styles from './cartItem.module.scss'
import { useSelector,useDispatch } from 'react-redux';
const CartItem = (props) => {
    const dispatch = useDispatch();

    const id = props.id
    const index = props.index

    return (
        <>

            <ul>
                <li><span>Name:</span>{props.name}</li>
                <li><span>Price:</span>{props.price}</li>
                <li><img className={styles.image} src={props.url} alt='Product ' /></li>
                <li><span>Art:</span>{props.art}</li>



                <button className={styles.del_from_cart_btn} onClick={() => {
 dispatch({type:'openDeleteModal'})
 dispatch({type:'SET_VALUE_MODAL',payload:'Do you want to add this product to cart'})
 dispatch({type:'SET_VALUE_INDEX',payload:index})
                }}>Delete from Cart</button>
            </ul>



        </>
    )
}
export default CartItem;

