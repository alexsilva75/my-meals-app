import React, { useEffect, useCallback } from 'react'
import {
    ScrollView,
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'

import {useDispatch,useSelector} from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import CustomHeaderButton from '../components/CustomHeaderButton'
import DefaultText from '../components/DefaultText'
import {toggleFavorite} from '../store/actions/mealsActions'



const ListItem = props => (
    <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
)


const MealDetailScreen = props => {
    const { navigation } = props
    const meal = navigation.getParam('meal')

    const mealId = meal.id
    
    const isFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId))  

    const dispatch = useDispatch()

    const toggleFavoriteHandler = useCallback(() => {
        dispatch( toggleFavorite(mealId))
    }, [dispatch, mealId])

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler})
    },[toggleFavoriteHandler])

    useEffect(() => {
        props.navigation.setParams({isFavorite})
    },[isFavorite])


    return (
        <ScrollView>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{meal.duration}m </DefaultText>
                <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {meal.ingredients.map(ingredient =>
                 (<ListItem key={ingredient}>{ingredient}</ListItem>))}

            <Text style={styles.title}>Steps</Text>
            {meal.steps.map(step =>
                 (<ListItem key={step}>{step}</ListItem>))}
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = navData => {
    const { navigation } = navData

    const meal = navigation.getParam('meal')
 
    const toggleFavorite = navigation.getParam('toggleFav')
    const isFavorite = navigation.getParam('isFavorite')
    return {
        headerTitle: meal.title,
        headerRight:
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                <Item
                    title='Favorite'
                    iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
                    onPress={toggleFavorite}
                />
            </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        justifyContent: 'space-around'

    },
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})

export default MealDetailScreen