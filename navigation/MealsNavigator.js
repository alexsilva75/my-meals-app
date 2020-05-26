import React from 'react'
import { Platform, Text } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'



import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'


import Colors from '../constants/Colors'

const defaultStackNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavigationOptions
}
)

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, { defaultNavigationOptions: defaultStackNavigationOptions })

const BottomTabLabel = props => (
    Platform.OS === 'android' ? 
        <Text style={{ fontFamily: 'open-sans-bold' }}>
            {props.labelText}
        </Text> : 
        props.labelText
)

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={23} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: <BottomTabLabel labelText='Meals' />
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {

            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={23} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: <BottomTabLabel labelText='Favorites' />
        }
    }

}

const MealsFavTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabScreenConfig,
        {
            activeColor: 'white',
            shifting: true
            // barStyle:{
            //     backgroundColor: Colors.primaryColor
            // }
        }) :
    createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'open-sans-bold'
            },
            activeTintColor: Colors.accentColor,

        }
    })

const FiltersStackNavigator = createStackNavigator({
    Filters: {
        screen: FiltersScreen
    }
},
    {
        navigationOptions: {
            drawerLabel: 'Filters'
        },
        defaultNavigationOptions: defaultStackNavigationOptions
    }
)

const MainNavigator = createDrawerNavigator({
    MealsFav: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersStackNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})

export default createAppContainer(MainNavigator)


