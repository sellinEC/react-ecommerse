import './OrderItem.css'
import React from 'react'


const OrderItem = ({item}) => {
  return (
    <div className="cartitem">
    <div className="cartitem-image">
      <img src={item.image} alt="Name"/>
    </div>

    <div to={`/product/${item._id}`} className="cartitem-name">
      <p>{item.quantity} x {item.name}</p>
    </div>
  <p className="cartitem-price"> à {item.price} kr</p>

    {/* <div className="cartitem-select">
      <button className="cartitem-selectbtn" onClick={() => dispatch(remove(item._id))}>-</button>
      <button className="cartitem-selectbtn" onClick={() => dispatch(addToCart(item))}>+</button>
    </div>
    <button className="cartitem-delete" onClick={() => dispatch(deleteProduct(item._id))}>
      <i className="fas fa-trash"></i>
    </button> */}
  </div>
  )
}

export default OrderItem
