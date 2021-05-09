import './AdminUser.css'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams, useHistory, Link } from 'react-router-dom'
import { getUser } from '../store/actions/adminActions'
import {getOrders, toggleShipped} from '../store/actions/orderActions'
import OrderItem from '../components/OrderItem'


const AdminUser = () => {
  const id = useParams().id
  const dispatch = useDispatch();
  const history = useHistory();

  const getter = useSelector(state => state.order.orders)
  const user = useSelector(state => state.admin.adminUser)
  
  
  let orders = getter ? getter.filter(order => !order.shipped) : 0
  let finished = getter ? getter.filter(order => order.shipped) : 0
  
  
  useEffect(() => {
    dispatch(getUser(id))
    console.log(id)
    dispatch(getOrders(id))
    // return () => {
      //   cleanup
      // }
    }, [dispatch, id ])
    
  return (
  user &&
  <div className="cart">
     

  <div className="cart-left">
  {
  
  getter && orders && orders.length < 1 ? <div><h3>No active orders</h3></div>  :  <h3>Active orders</h3>
}
  <div className="orders-left">

  {
  orders && orders.map(order => (
    <div className="order-holder">
      <h4>Order#: {order._id}</h4>
      {order.products.map(item => (
        <OrderItem key={item._id} item={item}/>
      ))}
      <div className="spread">
      <p>{order.shipped ? <span>Order shipped</span> : <span>Pending</span>}</p>
      {/* <p>Total: {order.totalPrice}</p> */}
      <button onClick={() => dispatch(toggleShipped(order._id, !order.shipped))} className="shipped-btn">Toggle shipped</button>
      </div>
    </div> 
  ))
}
  </div>
  {
  
  getter && orders && orders.length < 1 ? <div><h3>No active orders</h3></div>  :  <h3>Shipped orders</h3>
}
  <div className="orders-right">
  {

finished && finished.map(order => (
  <div className="order-holder">
    <h4>Order#: {order._id}</h4>
    {order.products.map(item => (
      <OrderItem key={item._id} item={item}/>
    ))}
    <div className="spread">
    <p>{order.shipped ? <span>Order shipped</span> : <span>Pending</span>}</p>
    {/* <p>Total: {order.totalPrice}</p> */}
    <button onClick={() => dispatch(toggleShipped(order._id, !order.shipped))} className="shipped-btn">Toggle shipped</button>
    </div>
  </div> 
  
))

}
</div>
  

   
</div>
  <div className="cart-right">
    
    <div className="cart-info">
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
    </div>
    <div className="cart-info">
      {user.email}
    </div>

    <div>
    
      <button onClick={() => history.push('/admin/users')}>Return</button>

    </div>
  </div>
</div>


  )

}

export default AdminUser
