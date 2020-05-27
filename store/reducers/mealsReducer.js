import {MEALS} from '../../data/dummy-data'
import {TOGGLE_FAVORITE, SET_FILTERS} from '../actions/mealsActions'


const INITIAL_STATE = {
    meals:MEALS,
    filteredMeals:MEALS,
    favoriteMeals:[]
}

const mealsReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case TOGGLE_FAVORITE:
            const mealId = action.payload

            const existingIndex = state.favoriteMeals.findIndex(meal => {
              
                return meal.id === mealId
            })

            if(existingIndex >= 0){
            
                const updatedFavMeals = [...state.favoriteMeals]

                updatedFavMeals.splice(existingIndex, 1)
                
                return {...state, favoriteMeals: updatedFavMeals}
            }else {
                
                const newFavorite = state.meals.find(meal => meal.id === mealId)
            
                return {...state, favoriteMeals: state.favoriteMeals.concat(newFavorite)}
            }
        
        case SET_FILTERS : {
            const filters = action.filters
            const meals = state.meals
            let filteredMeals = meals.filter(meal => {
                if(filters.glutenFree && !meal.isGlutenFree){
                    return false
                }

                if(filters.lactoseFree && !meal.isLactoseFree){
                    return false
                }

                if(filters.vegan && !meal.isVegan){
                    return false
                }

                if(filters.vegetarian && !meal.isVegeterian){
                    return false
                }

                return true
            })
            
            
            console.log('Setting filters: '+ JSON.stringify(filters))
            console.log('Length: '+filteredMeals.length)
            filteredMeals.forEach(meal => console.log(meal.title))
            return {...state, filteredMeals}
        }
            
           
        default:
            return state
    }       


    return state
}


export default mealsReducer