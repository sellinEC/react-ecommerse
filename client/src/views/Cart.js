import './Cart.css'
// import {useEffect} from 'react'
import CartItem from '../components/CartItem'
import {useSelector, useDispatch} from 'react-redux'
import {createOrder} from '../store/actions/orderActions'
import {Link} from 'react-router-dom'





const Cart = () => {

  const dispatch = useDispatch();
  
  const quantity = useSelector(state => state.cart.totalQuantity)
  const price = useSelector(state => state.cart.totalPrice)

  const shoppingCart = useSelector(state => state.cart.shoppingCart)
  const id = sessionStorage.getItem('userId')

  let order = {
    id: id,
    cart: shoppingCart,
    // totalPrice: price

  }

  const empty = (
      <div>
        <h2>Cart is empty</h2>
      </div>
  )

  return (
    <div className="cart">
      <div className="cart-left">
        
        {
          shoppingCart && shoppingCart.map(item => (
            <CartItem key={item._id} item={item}/>
          ))
        }
        {
          shoppingCart.length < 1 && empty
        }
      </div>
      <div className="cart-right">
        {quantity ?
        <div className="cart-info">
          <p>Subtotal ({quantity}) items</p>
          <p>{price} kr</p>
        </div>
        :
        <div className="cart-info">
          <p>Subtotal (0) items</p>
          <p>0 kr</p>
        </div>
        }
        <div>
          {
            shoppingCart.length >= 1 ?
          <Link to='/dashboard'>
          <button onClick={() => dispatch(createOrder(order))}>Proceed to checkout</button>
          </Link>
          :
          <button >Nothing to check out</button>
          }
          {/* <button onClick={() => dispatch(getOrders(id))}></button> */}
        </div>
      </div>
    </div>
  )
}

export default Cart
