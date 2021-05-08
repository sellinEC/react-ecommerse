import './Dashboard.css'
import {useEffect} from 'react'
import OrderItem from '../components/OrderItem'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory, Link} from 'react-router-dom'
import {getOrders, getAdminOrders, toggleShipped} from '../store/actions/orderActions'
import { logoutUser } from '../store/actions/userActions'

const Dashboard = () => {
  const isAdmin = sessionStorage.getItem('isAdmin')
  const dispatch = useDispatch();
  const history = useHistory();

  const orders = useSelector(state => state.order.orders)
  const adminOrders = useSelector(state => state.order.adminOrders)
  // const products = useSelector(state => state.order.orders.products)

  const handleLogout = () =>{
    dispatch(logoutUser())
    history.push('/')
  }
  

  const userId = sessionStorage.getItem('userId')
  
  useEffect(() => {
    if(isAdmin) {
      dispatch(getAdminOrders())
    }else{
      dispatch(getOrders(userId))
      // return () => {
      //   cleanup
      // }
    }
  }, [dispatch, userId, isAdmin])

  return (
    <div className="cart">
      {
      isAdmin ? 
      <h3>Adminster orders</h3>
      :
      <h3>Active orders</h3>
    }
    <div className="cart-left">
    {
      isAdmin ?
      adminOrders && adminOrders.map(order => (
        
        <div className="order-holder">
          <h4>Order#: {order._id}</h4>
          <Link to={`/admin/users/${order.userId}`}>
          <h5>Customer ID: {order.userId}</h5>
          </Link>
          {order.products.map(item => (
            <OrderItem key={item._id} item={item}/>
          ))}
          <div className="holder-bottom">
          <p>Shipped: {order.shipped ? <span>Order shipped</span> : <span>Pending</span>}</p>
          <button onClick={() => dispatch(toggleShipped(order._id, !order.shipped))} className="shipped-btn">Toggle shipped</button>
          </div>
        </div> 
      ))
    :
    orders && orders.map(order => (
      <div className="order-holder">
        <h4>Order#: {order._id}</h4>
        {order.products.map(item => (
          <OrderItem key={item._id} item={item}/>
        ))}
        <p>Shipped: {order.shipped ? <span>Order shipped</span> : <span>Pending</span>}</p>
        {/* <p>Total: {order.totalPrice}</p> */}
      </div> 
    ))
    }

    {
      orders && orders.length < 1 && 
      <div><h3>No active orders</h3></div>
    }
     
     
    </div>
    <div className="cart-right">
      
      <div className="cart-info">
        User name eller nåt
      </div>
      <div>
        <Link to="/admin/users">
        <button>Administer users</button>
        </Link>
      </div>
  
      <div>
        <button onClick={() => handleLogout()}>Sign out</button>

      </div>
    </div>
  </div>
  )
}

export default Dashboard
