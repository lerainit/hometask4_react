import React from 'react'
import styles from './cartItem.module.scss'

const CartItem = (props) => {


    return (
        <>

            <ul>
                <li><span>Name:</span>{props.name}</li>
                <li><span>Price:</span>{props.price}</li>
                <li><img className={styles.image} src={props.url} alt='Product ' /></li>
                <li><span>Art:</span>{props.art}</li>



                <button className={styles.del_from_cart_btn} onClick={() => {

                    props.setCartId(props.index)
                    props.openDeleteModal()
                }}>Delete from Cart</button>
            </ul>



        </>
    )
}
export default CartItem;

//<button  className={styles.deleteCart_btn} onClick = {() =>{props.deleteCartItem(props.id)}}>Delete item</button>