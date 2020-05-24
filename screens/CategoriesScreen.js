import React from 'react'
import {
    FlatList,
    StyleSheet
} from 'react-native'

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

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})



export default CategoriesScreen