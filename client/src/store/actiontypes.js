const actiontypes= () => {
  return {
    products: {
      setProducts: 'SET_PRODUCTS',
      setProduct: 'SET_PRODUCT'
    },
    cart: {
      add: 'ADD_TO_CART',
      remove: 'REMOVE_FROM_CART',
      delete: 'DELETE_PRODUCT',
      clear: 'CLEAR_CART'
    },
    user: {
      register: 'REGISTER_USER',
      login: 'LOGIN_USER',
      logout: 'LOGOUT_USER',
      check: 'CHECK_USER',
      set: 'SET_USER',
      
    },
    admin: {
      setAdminUsers: 'SET_ADMIN_USERS',
      setAdminUser: 'SET_ADMIN_USER',
      deleteUser: 'DELETE_USER'
    },
    order: {
      createOrder: 'CREATE_ORDER',
      getOrders: 'GET_ORDERS',
      adminGet: 'ADMIN_GET',
      toggleShipped: 'TOGGLE_SHIPPED'
    }
  }
}

export default actiontypes;