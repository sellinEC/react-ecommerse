import axios from 'axios';
import actiontypes from '../actiontypes';



export const createOrder = (order) => {
  
  return async dispatch => {
    const _order = {
      id: order.id,
      cart: order.cart,
      // totalPrice: order.Totalprice
    }
    console.log(_order)
    await axios.post('http://localhost:9999/api/orders/new', _order)
    dispatch({ type: actiontypes().order.createOrder })
    
  }

}

export const getOrders = (userId) => {
  return async dispatch => {
    const res = await axios.get(`http://localhost:9999/api/orders/${userId}`)
    dispatch(setOrders(res.data))
  }
}

export const setOrders = orders => {
  return {
    type: actiontypes().order.getOrders,
    payload: orders
  }
}

export const getAdminOrders = () => {
  return async dispatch => {
    const res = await axios.get('http://localhost:9999/api/orders/')
    dispatch(adminGet(res.data))
  }
}

export const adminGet = orders => {
  return {
    type: actiontypes().order.adminGet,
    payload: orders

  }
}

export const  toggleShipped = (id, bool) => {
  return async dispatch => {
  let payload = {
    shipped: bool
  }
  await axios.put(`http://localhost:9999/api/orders/${id}`, payload)
    await dispatch({
      type: actiontypes().order.toggleShipped
    })
  }
}