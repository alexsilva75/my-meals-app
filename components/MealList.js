import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import MealItem from './MealItem'




const MealList = props => {

    const onSelectMealHandler = (meal) =>{
        props.navigation.navigate({
            routeName: 'MealDetail',
            params: {meal}
        })
    }

    const renderMeal = (mealItem) => {
        return (
            <MealItem
                meal={mealItem.item}
                onSelectMeal={() => onSelectMealHandler(mealItem.item) } 
                />
        )
    }

    return (
        <View style={styles.list}>
            <FlatList
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