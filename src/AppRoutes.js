import React from 'react'
import {Routes, Route} from 'react-router-dom'
import FavoritesPage from './componentns/favoritespage/favorites';
import CartPage from './componentns/cart/cart';
import ProductPage from './componentns/productpage/productPage';

const AppRoutes = ({deleteCartItem,products,openDeleteModal}) => {
    return (
     
        <Routes>
            <Route path='/' element={   <ProductPage products={products}  > </ProductPage>} />
           <Route path='/favorites' element={<FavoritesPage />} />
         
           <Route path='/cart' element={<CartPage  deleteCartItem ={deleteCartItem} openDeleteModal={openDeleteModal}   />}/>
         </Routes>

        
    )
}
export default AppRoutes;
