import actiontypes from '../actiontypes'

const initState = {
  success: false,
  orders: null,
  adminOrders: null
}

const orderReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().order.createOrder:
      return {
        ...state,
        success: true
      }
    case actiontypes().order.getOrders:
      return {
        ...state,
        orders: action.payload
      }
    case actiontypes().order.adminGet:
      return {
        ...state,
        adminOrders: action.payload
      }
    case actiontypes().order.toggleShipped:
      return state
      default:
        return state
  }
}

export default orderReducer;