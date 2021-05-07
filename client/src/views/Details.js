import './Details.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  getOneProduct, setProduct } from '../store/actions/productsActions'
import {addToCart} from '../store/actions/cartActions'
import { useParams } from 'react-router-dom'

const Details = () => {

  const id = useParams().id
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(id))
    return () => {
      dispatch(setProduct(null))
    }
  }, [dispatch, id])

  const product = useSelector(state => state.products.product)
  // const product = useSelector(state => state.products.product)

  return (
    product && <div className="details">
      <div className="details-left">
        <div className="left-image">
          <img src={product.image} alt="Name"/>
        </div>

        <div className="left-info">
          <p className="left-name">{product.name}</p>
          <p className="left-price">{product.price} kr</p>
          <p className="left-description">{product.desc}</p>
        </div>
      </div>
      <div className="details-right">
        <div className="right-info">
          <p>
            Price: <span>{product.price} kr</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          {/* <p>
            Qty
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p> */}
          <p>
            <button type="button" onClick={() => {
              dispatch(addToCart(product))
            }}>Add to cart</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Details
