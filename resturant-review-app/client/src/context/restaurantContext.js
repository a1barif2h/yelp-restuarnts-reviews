import { createContext, useContext, useMemo, useReducer } from "react";

const RestaurantContext = createContext();

const initialState = {
    loading: false,
    restaurantsList: null,
}

const restaurantReducer = (state, action) => {
    switch (action.type) {
        case 'RESTAURANT_LIST_REQUEST':
            return {
                ...state,
                loading: true
            };

        case 'RESTAURANT_LIST_SUCCESS':
            return {
                ...state,
                loading: true,
                restaurantsList: action.restaurants 
            };

        case 'RESTAURANT_LIST_FAILED':
            return {
                ...state,
                loading: false,
            };

        default:
        return state
    }
}

export const RestaurantProvider = (props) => {
    const [state, dispatch] = useReducer(restaurantReducer, initialState);
    const value = useMemo(() => [state, dispatch], [state])

    return <RestaurantContext.Provider value={value} {...props} />
}

export const useRestaurant = () => {
    const context = useContext(RestaurantContext)

    if(!context) {
        throw new Error('useRestaurant must be used within a RestaurantProvider')
    }

    const [state, dispatch] = context

    return {
        state,
        dispatch
    }
}

export const getAllRestaurants = () => {
    console.log('geting all restaurants')
};