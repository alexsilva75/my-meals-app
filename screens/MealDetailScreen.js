import React from 'react'
import {
    ScrollView,
    View,
    Image,
    Text,
    Button,
    StyleSheet
} from 'react-native'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import MealItem from '../components/MealItem'
import CustomHeaderButton from '../components/CustomHeaderButton'
import DefaultText from '../components/DefaultText'

const ListItem = props => (
    <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
)


const MealDetailScreen = props => {
    const { navigation } = props
    const meal = navigation.getParam('meal')
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