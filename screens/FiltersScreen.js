import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Switch, Platform } from 'react-native'

import {useDispatch} from 'react-redux'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import CustomHeaderButton from '../components/CustomHeaderButton'
import Colors from '../constants/Colors'

import {setFilters} from '../store/actions/mealsActions'


const FilterSwitch = props => (
    <View style={styles.filterContainer}>
        <Text>{props.filterLabel}</Text>
        <Switch
            trackColor={{ true: Colors.primaryColor }}
            thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
            value={props.state}
            onValueChange={newValue => props.onToggle(newValue)} />
    </View>
)

const FiltersScreen = props => {
    const {navigation} = props

    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    const dispatch = useDispatch()

    const saveFilters = useCallback( () =>{
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }

        dispatch(setFilters(appliedFilters))
        
    },[isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch])

    useEffect(()=>{
        props.navigation.setParams({save: saveFilters})
    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch 
                state={isGlutenFree}
                filterLabel='Gluten-free' 
                onToggle={setIsGlutenFree}/>
            <FilterSwitch 
                state={isLactoseFree}
                filterLabel='Lactose-free' 
                onToggle={setIsLactoseFree}/>
            <FilterSwitch 
                state={isVegan}
                filterLabel='Vegan' 
                onToggle={setIsVegan}/>
            <FilterSwitch 
                state={isVegetarian}
                filterLabel='Vegetarian' 
                onToggle={setIsVegetarian}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        margin: 20,
        textAlign: 'center'
    }
})

FiltersScreen.navigationOptions = (navData) => {
    const { navigation } = navData
    return {
        headerTitle: 'Filter Meals',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Menu' iconName='ios-menu'
                    onPress={() => { navigation.toggleDrawer() }} />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Save' iconName='ios-save'
                    onPress={navData.navigation.getParam('save')} />
            </HeaderButtons>
        )
    }
}

export default FiltersScreen