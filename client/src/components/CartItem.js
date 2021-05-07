import './CartItem.css'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addToCart , remove, deleteProduct} from '../store/actions/cartActions'

const CartItem = ({item}) => {

  const dispatch = useDispatch()

  return (
    <div className="cartitem">
      <div className="cartitem-image">
        <img src={item.image} alt="Name"/>
      </div>

      <Link to={`/product/${item._id}`} className="cartitem-name">
        <p>{item.quantity} x {item.name}</p>
      </Link>
    <p className="cartitem-price"> à {item.price} kr</p>
      {/* <select className="cartitem-select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select> */}
      <div className="cartitem-select">
        <button className="cartitem-selectbtn" onClick={() => dispatch(remove(item._id))}>-</button>
        <button className="cartitem-selectbtn" onClick={() => dispatch(addToCart(item))}>+</button>
      </div>
      <button className="cartitem-delete" onClick={() => dispatch(deleteProduct(item._id))}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default CartItem
