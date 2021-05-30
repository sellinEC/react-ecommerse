// VAr en liten bonus jag lekte med men aldrig fick att funka. Lyckas inte få en live-uppdatering här men funktionaliteten från uppgiften borde sitta iaf.


import {useEffect} from 'react'
import OrderItem from './OrderItem'
import {toggleShipped} from '../store/actions/orderActions'
import {useDispatch, useSelector} from 'react-redux'
import { getOrders } from '../store/actions/orderActions'

const OrderComponent = ({order, bool, id}) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(toggleShipped(order._id, !order.shipped))
    window.location.reload(false)
  }
  
  // let orders  = useSelector(state => state.order.orders)
  
  
  // useEffect(() => {
    //  dispatch(getOrders(id))
    // }, [dispatch])
  

  return (
    
    <div>
      {
        
          <div className="order-holder">
          <h4>Order#: {order._id}</h4>
          {order.products.map(item => (
            <OrderItem key={item._id} item={item}/>
          ))}
          <div className="spread">
          <p>{order.shipped ? <span>Order shipped</span> : <span>Pending</span>}</p>
          {/* <p>Total: {order.totalPrice}</p> */}
          <button onClick={() => handleClick()} className="shipped-btn">Toggle shipped</button>
          </div>
        </div> 
        
 
      }

    </div>
  )
}

export default OrderComponent
