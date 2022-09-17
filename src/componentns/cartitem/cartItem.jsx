import React from 'react'
import styles from './cartItem.module.scss'
import { useDispatch } from 'react-redux';
import { openDeleteModalAC } from '../../store/modal/actionCreators';
import { modalTextAC } from '../../store/modalText/actionCreators';


const CartItem = (props) => {
    const dispatch = useDispatch();

 
    const index = props.index

    return (
        <>
<div className={styles.cart_item}>
            <ul>
                <li><span>Name:</span>{props.name}</li>
                <li><span>Price:</span>{props.price}</li>
                <li><img className={styles.image} src={props.url} alt='Product ' /></li>
                <li><span>Art:</span>{props.art}</li>

 
            </ul>

<button className={styles.del_from_cart_btn} onClick={() => {
 dispatch(openDeleteModalAC())
 dispatch(modalTextAC('Do you want to add this product to cart'))
 dispatch({type:'SET_VALUE_INDEX',payload:index})
                }}>X</button>
</div>
        </>
    )
}
export default CartItem;

