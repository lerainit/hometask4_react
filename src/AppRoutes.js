import React from 'react'
import {Routes, Route} from 'react-router-dom'
import FavoritesPage from './componentns/favoritespage/favorites';
import CartPage from './componentns/cart/cart';
import ProductPage from './componentns/productpage/productPage';

const AppRoutes = () => {
    return (
     
        <Routes>
            <Route path='/' element={   <ProductPage  /> } />
           <Route path='/favorites' element={<FavoritesPage />} />
         
           <Route path='/cart' element={<CartPage />}/>
         </Routes>

        
    )
}
export default AppRoutes;
