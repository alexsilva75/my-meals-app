import React from 'react'
import { 
    View, 
  
    StyleSheet 
} from 'react-native'

import {useSelector} from 'react-redux'

import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/Colors'

import MealItem from '../components/MealItem'
import MealList from '../components/MealList'

import DefaultText from '../components/DefaultText'

const CategoryMealsScreen = props => {
    const { navigation } = props

    const catId = navigation.getParam('categoryId')

    const meals = useSelector(state => state.meals.filteredMeals)

    const displayedMeals = meals.filter(meal => {
        return (meal.categoryIds.indexOf(catId) >= 0)
    })

    if(!displayedMeals || displayedMeals.length === 0){
        return <View style={styles.content}>
            <DefaultText>No meals found, maybe check your filters.</DefaultText>
        </View>
    }
    
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

const mapStateToProps = (state) =>(
    {meals: state.meals}
)


const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default CategoryMealsScreen