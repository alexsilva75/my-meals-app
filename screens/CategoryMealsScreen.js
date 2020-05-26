import React from 'react'
import { 
    View, 
    Text, 
    Button, 
    FlatList, 
    StyleSheet 
} from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import Colors from '../constants/Colors'

import MealItem from '../components/MealItem'
import MealList from '../components/MealList'

const CategoryMealsScreen = props => {
    const { navigation } = props

    const catId = navigation.getParam('categoryId')

    const displayedMeals = MEALS.filter(meal => {
        return (meal.categoryIds.indexOf(catId) >= 0)
    })

   

    
    return (
        <MealList meals={displayedMeals} navigation={navigation}/>
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {

    const catId = navigationData.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title,

    }
}



export default CategoryMealsScreen