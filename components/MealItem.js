import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from 'react-native'

const MealItem = props => (
    <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View>
                <View style={{ ...styles.mealRow, ...styles.mealHeader }}>

                    <ImageBackground
                        source={{ uri: props.meal.imageUrl }}
                        style={styles.bgImage}>

                        <View style={styles.titleContainer}>
                            <Text numberOfLines={2} style={styles.title}>{props.meal.title}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
                    <Text>{props.meal.duration}m </Text>
                    <Text>{props.meal.complexity.toUpperCase()}</Text>
                    <Text>{props.meal.affordability.toUpperCase()} </Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row'
    },
    mealItem: {
        height: 200,
        width: '95%',
        backgroundColor: '#ddd'
        , marginTop: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetails: {
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',

    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    }
    ,
    title: {
        fontSize: 18,
        fontFamily: 'open-sans-bold',
        color: 'white',       
        textAlign: 'center'

    }
})

export default MealItem