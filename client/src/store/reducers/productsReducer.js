import actiontypes from '../actiontypes'

const initState =  {
  products: null,
  product: null
}

const productsReducer = (state = initState, action) => {
  
  switch(action.type) {
    case actiontypes().products.setProducts:
      return {
        ...state,
        products: action.payload
      }
    case actiontypes().products.setProduct:
      return {
        ...state,
        product: action.payload
      }
    default:
      return state
  }
}

export default productsReducer;