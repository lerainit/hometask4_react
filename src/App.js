
import './App.scss';
import React, { useEffect, useState } from 'react'
import Modal from './componentns/modal/modal'
import Navigation from './componentns/navigation/Navigation';
import AppRoutes from './AppRoutes';
import initLocalStorage from './initLocalStorage';
import {useSelector} from 'react-redux'
import{useDispatch} from 'react-redux'


initLocalStorage()


const App = () => {
  const dispatch = useDispatch()
  const modal = useSelector(store =>store.modal.value)

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [products, setProducts] = useState([])
  const [buttonText, setButtonText] = useState('Add to Cart')
  const [text, setText] = useState('Are  you sure you want to add this product to cart?')
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
  const [backgroundColor] = useState('cadetblue')
  const [color] = useState('green')
  const [addCardsArr, setAddCards] = useState([])
  const [addFavoritesArr, setFavorites] = useState(JSON.parse(localStorage.getItem('addFavorites')))
  const [cardId, setCardId] = useState(null)
  const [index, setIndex] = useState(null)


  if (localStorage.getItem('products')) {dispatch({type:'setProducts'})}

  useEffect(() => {
 
    if (!localStorage.getItem('products')) {
      (async () => {
        const products = await fetch('productsJSON.json').then(response => response.json())
        setProducts(products)
        localStorage.setItem('products', JSON.stringify(products))
       
      })()

      

    } else {
      setProducts(JSON.parse(localStorage.getItem('products')))

    }
    if (localStorage.getItem('addCards')) {
      setAddCards(JSON.parse(localStorage.getItem('addCards')))
    }
  }, [])


  const deleteCartItem = (elIndex) => {
  
    let newAddCardsArr = addCardsArr.filter((el, index) => elIndex !== index)

    localStorage.setItem('addCards', JSON.stringify(newAddCardsArr))

    return setAddCards(JSON.parse(localStorage.getItem('addCards')))

  }

  


  const setCartId = (index) => {
    setIndex(index)
 }

  const openDeleteModal = () => {
    setIsOpenDeleteModal(true)
    setText('Do you want to delete this product from cart')
    setButtonText('Delete from Cart')
  }


 
  

  
  return (
    <>

      <div className='App'>

        <Navigation />

        <AppRoutes  openDeleteModal={openDeleteModal} products ={products}  deleteCartItem={deleteCartItem} />

      </div>

      { modal &&
        <Modal products ={products} backgroundColor={backgroundColor} color={color}   ></Modal >}
      {isOpenDeleteModal &&
        <Modal text={text} buttonText={buttonText} backgroundColor={backgroundColor} color={color} handleClick={() => { setIsOpenDeleteModal(false) }} modalFunc={() => { deleteCartItem(index) }}></Modal >}
    </>
  );
}


export default App

//const dispatch = useDispatch()
//const counter = useSelector(store =>store.counter)
//p>{counter}</p>
   //<button onClick={() =>{dispatch({type:'INCREMENT'})}}></button>