import { StyleSheet, Text, View } from 'react-native'
import { createContext, useState } from 'react'
import React from 'react'

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { },
});


function FavoritContextProvider({ children }) {

    const [favoriteMealIds, setfavoriteMealIds] = useState([]);

    function addFavorite(id) {
        setfavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavorite(id) {
        setfavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id));
    }

    const value = {
        ids : favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };

    return (
        <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
    )
}

export default FavoritContextProvider
