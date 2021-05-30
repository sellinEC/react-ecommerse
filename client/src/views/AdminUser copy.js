import './AdminUser.css'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams, useHistory, Link } from 'react-router-dom'
import { getUser } from '../store/actions/adminActions'
import {getOrders, toggleShipped} from '../store/actions/orderActions'
import OrderComponent from '../components/OrderComponent'


const AdminUser = () => {
  const id = useParams().id
  const dispatch = useDispatch();
  const history = useHistory();

  let orders = useSelector(state => state.order.orders)
  let user = useSelector(state => state.admin.adminUser)
  
 
  
  // let orders = getter ? getter.filter(order => !order.shipped) : 0
  // let finished = getter ? getter.filter(order => order.shipped) : 0


  
  
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
  
  orders && orders.length < 1 ? <div><h3>No active orders</h3></div>  :  <h3>Active orders</h3>
}
  <div className="orders-left">

{
  orders && orders.map(order => {
    if(!order.shipped) {
      return <OrderComponent key={order._id} order={order}  />

    }
})
}
  </div>
{
  
  orders && orders.length < 1 ? <div><h3>No active orders</h3></div>  :  <h3>Shipped orders</h3>
}
  <div className="orders-right">
  {

orders && orders.map(order => {
  if(order.shipped){
    return <OrderComponent key={order._id} order={order} />

  }
  
})

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
