import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import CustomHeaderButton from '../components/CustomHeaderButton'
// import createHeaderLeftMenu from '../components/HeaderLeftMenu'


import DefaultText from '../components/DefaultText'
import MealList from '../components/MealList'
//import { MEALS } from '../data/dummy-data'
import { connect } from 'react-redux'

import { toggleFavorite } from '../store/actions/mealsActions'

const FavoritesScreen = props => {
    const favMeals = props.meals
    if (!favMeals || favMeals.length === 0) {
        return (
            <View style={styles.content}>
                <DefaultText>You have no favorite meals, yet!</DefaultText>
            </View>
        )
    }
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

const mapStateToProps = (state) => (
    { meals: state.meals.favoriteMeals }
)


const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default connect(mapStateToProps)(FavoritesScreen)