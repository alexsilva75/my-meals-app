import React from 'react'
import {
    FlatList,
    StyleSheet
} from 'react-native'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import CustomHeaderButton from '../components/CustomHeaderButton'

// import createHeaderLeftMenu from '../components/HeaderLeftMenu'

import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/Colors'
import CategoryGridTile from '../components/CategoryGridTile'



const CategoriesScreen = props => {
    const { navigation } = props

    const renderGridItem = (itemData) => (
        <CategoryGridTile
            item={itemData.item}

            onSelect={() => navigation.navigate(
                {
                    routeName: 'CategoryMeals',
                    params: { categoryId: itemData.item.id }
                }
            )
            } />
    )

    return (

        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} />

    )
}

CategoriesScreen.navigationOptions = (navData) => {
    const {navigation} = navData
    return {
        headerTitle: 'Meal Categories',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Menu' iconName='ios-menu' 
                    onPress={() => { navigation.toggleDrawer()}} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})



export default CategoriesScreen