import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { useLayoutEffect, useContext } from 'react';


import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import SubTitle from '../components/MealDetail/SubTitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
// import { FavoritesContext } from '../store/context/favorit-context';

function MealDetailsScreen({ route, navigation }) {

    // const favoriteMealCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
    const dispatch = useDispatch();

    const mealId = route.params.mealId;

    const selectMeal = MEALS.find((meal) => meal.id === mealId)

    const mealIsFavorite = favoriteMealIds.ids.includes(mealId);

    function changeFavoritueStatusHandler() {
        if (mealIsFavorite) {
            // favoriteMealCtx.removeFavorite(mealId);
            dispatch(removeFavorite({id: mealId}));
        } else {
            // favoriteMealCtx.addFavorite(mealId);
            dispatch(addFavorite({id: mealId}));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} onPress={changeFavoritueStatusHandler} color='white' />
            }
        });
    }, [navigation, changeFavoritueStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectMeal.imageUrl }} />
            <Text style={styles.title}>{selectMeal.title}</Text>
            <MealDetails
                duration={selectMeal.duration}
                affordability={selectMeal.affordability}
                complexity={selectMeal.complexity}
                // style = 
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <SubTitle>Ingredients</SubTitle>
                    <List data={selectMeal.ingredients} />
                    <SubTitle>Steps</SubTitle>
                    <List data={selectMeal.steps} />
                </View>
            </View>

        </ScrollView>
    )
}

export default MealDetailsScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listContainer: {
        width: '80%',
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    rootContainer: {
        marginBottom: 32
    }

})