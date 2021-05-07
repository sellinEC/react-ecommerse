import axios from 'axios';
import actiontypes from '../actiontypes';

export const getProducts= () => {

  return async dispatch => {
    const res = await axios.get('http://localhost:9999/api/products')
    dispatch(setProducts(res.data))
  }
}

export const setProducts = products => {
  return {
    type: actiontypes().products.setProducts,
    payload: products
  }
}

export const getOneProduct = id => {
  return async dispatch => {
    const res = await axios.get(`http://localhost:9999/api/products/${id}`)
    dispatch(setProduct(res.data))
  }
}

export const setProduct = product => {
  return {
    type: actiontypes().products.setProduct,
    payload: product
  }
}