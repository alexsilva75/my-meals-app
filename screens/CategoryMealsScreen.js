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

const CategoryMealsScreen = props => {
    const { navigation } = props

    const catId = navigation.getParam('categoryId')

    const displayedMeals = MEALS.filter(meal => {
        return (meal.categoryIds.indexOf(catId) >= 0)
    })

    const onSelectMealHandler = (meal) =>{
        navigation.navigate({
            routeName: 'MealDetail',
            params: {meal}
        })
    }

    const renderMeal = (mealItem) => {
        return (
            <MealItem 
                meal={mealItem.item} 
                onSelectMeal={()=>{onSelectMealHandler(mealItem.item)}} />
        )
    }

    return (
        <View style={styles.screen}>
         
            <FlatList 
                data={displayedMeals} 
                renderItem={mealItem => renderMeal(mealItem)}
                style={{width: '100%'}}
                contentContainerStyle={{alignItems: 'center'}}
                />
            <Button title='Go to Meal Details!' onPress={() => navigation.navigate('MealDetail')} />
            <Button title='Go Back' onPress={() => { navigation.pop() }} />
        </View>
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {

    const catId = navigationData.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title,

    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen