// Var en liten bonus jag lekte med men aldrig fick att funka. Lyckas inte få en live-uppdatering här men funktionaliteten från uppgiften borde sitta iaf. Med window.reload fick jag det att funka men blev för oskönt för att det skulle kännas bra haha
import {useEffect} from 'react'
import OrderItem from './OrderItem'
import {toggleShipped} from '../store/actions/orderActions'
import {useDispatch, useSelector} from 'react-redux'
import { getOrders } from '../store/actions/orderActions'
import {useParams} from 'react-router-dom'

const OrderComponent = ({ bool}) => {
  const dispatch = useDispatch()
  const id = useParams().id

  // const handleClick = () => {
  //   dispatch(toggleShipped(order._id, !order.shipped))
  //   window.location.reload(false)
  // }
  
  
  
  useEffect(() => {
    dispatch(getOrders(id))
  }, [dispatch, id])
  
  let orders  = useSelector(state => state.order.orders)

  return (
    
    <div>
      {
        bool ?  orders && orders.map(order => {
            if(order.shipped) {
          return <div className="order-holder">
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
            }
          
          })
        :orders && orders.map(order => {
          if(!order.shipped) {
          return  <div className="order-holder">
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
          }
        
        })

      }

        
          
      

    </div>
  )
}

export default OrderComponent
