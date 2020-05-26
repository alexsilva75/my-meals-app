import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import CustomHeaderButton from '../components/CustomHeaderButton'
// import createHeaderLeftMenu from '../components/HeaderLeftMenu'

import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'

const FavoritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return (
        <MealList meals={favMeals} navigation={props.navigation} />
    )
}



FavoritesScreen.navigationOptions = (navData) => {
    const { navigation } = navData
    return {
        headerTitle: 'My Favorites ;)',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Menu' iconName='ios-menu'
                    onPress={() => { navigation.toggleDrawer() }} />
            </HeaderButtons>
        )
    }
}

export default FavoritesScreen