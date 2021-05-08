import actiontypes from '../actiontypes'

const initState = {
  shoppingCart: [],
  totalCartQuantity: 0,
  totalCartPrice: 0
}

const cartReducer = (state = initState, action) => {
  let itemIndex;

  switch (action.type) {
    case actiontypes().cart.add:
      try {
        itemIndex = state.shoppingCart.findIndex(product => product._id === action.payload._id)
        let item = {
          //spreadar produkten, lägger till en quantity till objektet
          ...action.payload,
          quantity: 1
        }
        itemIndex < 0 
        ? state.shoppingCart = [...state.shoppingCart, item]
        :state.shoppingCart[itemIndex].quantity += 1

        state.totalPrice = getTotalPrice(state.shoppingCart);
        state.totalQuantity = getTotalQuantity(state.shoppingCart);
      } 
      catch (err) {console.log(err)}
      return state

    case actiontypes().cart.remove: {
      try {
        itemIndex = state.shoppingCart.findIndex(product => product._id === action.payload)
        state.shoppingCart[itemIndex].quantity === 1
        ? state.shoppingCart = state.shoppingCart.filter(product => product._id !== action.payload)
        : state.shoppingCart[itemIndex].quantity -=1
        //Uppdaterar states för totalerna - gör att ändringen syns
        state.totalPrice = getTotalPrice(state.shoppingCart);
        state.totalQuantity = getTotalQuantity(state.shoppingCart);
        }
      
      catch (err) {console.log(err)}
      return state

    }
    case actiontypes().cart.delete: {
      itemIndex = state.shoppingCart.findIndex(product => product._id === action.payload)
      console.log(itemIndex)
      state.shoppingCart.splice(itemIndex, 1)
      // state.shoppingCart = state.shoppingCart.filter(product => product._id !== action.payload)
      state.totalPrice = getTotalPrice(state.shoppingCart);
      state.totalQuantity = getTotalQuantity(state.shoppingCart);
      return state
    }
    case actiontypes().cart.clear: {
      return {
        ...state,
        shoppingCart: []
      }
    }
    default:
      return state
  }
}

const getTotalQuantity = cart => {
  let total = 0;

  cart.forEach(product => {
    total += product.quantity
  });
  return total
}

const getTotalPrice = cart => {
  let total = 0;

  cart.forEach(product => {
    total += product.price * product.quantity
  });
  return total
}

 

export default cartReducer