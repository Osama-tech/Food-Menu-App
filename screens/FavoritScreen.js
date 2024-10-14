import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

import MealsList from '../components/MealList/MealsList';
import { FavoritesContext } from '../store/context/favorit-context';
import { MEALS } from '../data/dummy-data';

function FavoritScreen() {

  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoritMeals = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id));

  if (favoritMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text} >You have no favorite meals yet.</Text>
      </View>
    )
  }

  return (
    <MealsList items={favoritMeals} />
  )
}

export default FavoritScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})