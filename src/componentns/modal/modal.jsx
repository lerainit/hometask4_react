
import React from 'react'
import styles from './modal.module.scss'
import { useDispatch,useSelector } from 'react-redux'
import { type } from '@testing-library/user-event/dist/type'


const  Modal = (props) => {
  
   const dispatch = useDispatch()
   const modal = useSelector(store => store.modal.value);
   const modalText = useSelector(store => store.modalText.value);
   const index = useSelector(store =>store.cardIndex.value)
const addCart = useSelector(store =>store.addCart.value)
   const products = props.products

   console.log(addCart)
return(


<div className={styles.modal}>
  <div className={styles.outer_container} onClick ={props.handleClick}></div>
  <div className={styles.modal_main_container} >
 
<button className={styles.close_btn} onClick ={()=>{dispatch({type:'closeModal'})}}>X</button>

<p>{ modalText}</p>
<button className={styles.modal_btn} onClick ={()=>{dispatch({type:'addCart',payload:{index:index,products:products}})}} >{props.buttonText}</button>
</div>
</div>



  ) 

}


export default Modal