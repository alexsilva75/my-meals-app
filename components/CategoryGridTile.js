import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform
} from 'react-native'

const CategoryGridTile = props => (
    <View style={styles.gridItem}>
        <TouchableOpacity style={{ flex: 1 }} onPress={props.onSelect} >
            <View style={{ ...styles.container, backgroundColor: props.item.color }}>
                <Text style={styles.title} numberOfLines={2}>{props.item.title}</Text>
            </View>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        elevation: 5,
        borderRadius: 10,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'

    },
    container: {
        flex: 1,        
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },        
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 15
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'right'
    }
})

export default CategoryGridTile
