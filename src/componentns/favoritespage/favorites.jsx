import React from 'react'
import FavItem from '../favitem/FavItem'
import { useSelector } from 'react-redux'

const FavoritesPage = (props) =>{
    const addFavorites = useSelector(store =>store.addFavorites.value)

return(
  
   
    
    <>

{addFavorites.map(({id,name,price,art,url},index) =><FavItem key={id}  id ={id}  name= {name} price ={price} art ={art} url={url} ></FavItem>)}

</>   
    
    
   
)


}

export default FavoritesPage