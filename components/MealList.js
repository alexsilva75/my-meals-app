import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import MealItem from './MealItem'




const MealList = props => {   

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    const onSelectMealHandler = (meal) => {
        const mealId = meal.id
        const isFavorite = favoriteMeals.some(meal => meal.id === mealId)

        props.navigation.navigate({
            routeName: 'MealDetail',
            params: { meal, isFavorite }
        })
    }

    const renderMeal = (mealItem) => {
        return (
            <MealItem
                meal={mealItem.item}
                onSelectMeal={() => onSelectMealHandler(mealItem.item)}
            />
        )
    }

    return (
        <View style={styles.list}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={props.meals}
                renderItem={mealItem => renderMeal(mealItem)}
                style={{ width: '100%' }}
                contentContainerStyle={{ alignItems: 'center' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default MealList