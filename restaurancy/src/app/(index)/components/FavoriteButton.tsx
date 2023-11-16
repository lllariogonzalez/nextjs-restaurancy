'use client'

import dynamic from "next/dynamic";
import { useState } from "react";

function FavoriteButton({id}:{id: string}) {

  const initialState = window.localStorage.getItem('favorites')?.includes(id) ?? false
  const [isFavourite, setIsFavorite] = useState(initialState)

  function handleFavorite(){

    let currentState = window.localStorage.getItem('favorites')
    let newFavorites = currentState ? JSON.parse(currentState) : []

    if(!isFavourite && Array.isArray(newFavorites)){
      newFavorites.push(id)
      window.localStorage.setItem('favorites', JSON.stringify(newFavorites))
      setIsFavorite(true)
    } 

    if(isFavourite && Array.isArray(newFavorites)){
      let filterFavorites = newFavorites.filter((favId: string) => favId !== id)
      window.localStorage.setItem('favorites', JSON.stringify(filterFavorites))
      setIsFavorite(false)
    }

  }

  return (
    <button onClick={handleFavorite} type="button" className={`text-red-500 text-xl ${isFavourite ? 'opacity-100' : 'opacity-20'}`}>♥</button>
  )
}

// Creamos un componente dinámico para que no se renderice en el servidor
export const DynamicFavoriteButton = dynamic(async () => FavoriteButton, { ssr: false });