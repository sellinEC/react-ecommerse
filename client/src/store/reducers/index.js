import { combineReducers } from 'redux'

import productsReducer from './productsReducer'
import cartReducer from './cartReducer'
import userReducer from './userReducer'
import orderReducer from './orderReducer'
import adminReducer from './adminReducer'

export default combineReducers({
products: productsReducer,
cart: cartReducer,
user: userReducer,
order: orderReducer,
admin: adminReducer
})