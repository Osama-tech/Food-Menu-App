import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'


function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            // console.log("clicked")
            navigation.navigate('Meals OverView', {
                categoryId: itemData.item.id
            });
        }
        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler} />
    }

    return (
        <FlatList data={CATEGORIES}
            key={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2} />
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({})