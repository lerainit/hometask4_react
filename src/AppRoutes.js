import React from 'react'
import {Routes, Route} from 'react-router-dom'
import FavoritesPage from './pages/favoritespage/favorites';
import CartPage from './pages/cart/cart';
import ProductPage from './pages/productpage/productPage';

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
