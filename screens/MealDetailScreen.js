import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import MealItem from '../components/MealItem'
import CustomHeaderButton from '../components/CustomHeaderButton'

const MealDetailScreen = props => {
    const { navigation } = props
    const meal = navigation.getParam('meal')
    return (
        <View style={styles.screen}>
            <MealItem meal={meal} />
            <View style={styles.mealDetails}>
                <Text style={styles.mealDetailsText}>
                    {meal.steps}
                </Text>
            </View>
            <Button title='Go back to my Categories'
                onPress={() => {
                    props.navigation.popToTop()
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mealDetails: {
        padding: 10
    },
    mealDetailsText: {
        textAlign: 'justify'
    }
})



MealDetailScreen.navigationOptions = navData => {
    const { navigation } = navData

    const meal = navigation.getParam('meal')
    return {
        headerTitle: meal.title,
        headerRight: 
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
            <Item
                title='Favorite'
                iconName='ios-star'
                onPress={() => {

                }}
            />
        </HeaderButtons>
    }
}

export default MealDetailScreen