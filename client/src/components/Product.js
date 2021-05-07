import './Product.css';
import {Link} from 'react-router-dom'
const product = ({product}) => {
  return (
    <div className="product">
      <img src={product.image} alt="Product"/>
      <div className="product-info">
        <p className="info-name">{product.name}</p>
        <p className="info-description">
          {product.short}
        </p>
        <p className="info-price">{product.price} kr</p>

        <Link to={`/product/${product._id}`} className="info-button">
          Details
        </Link>
      </div>
    </div>
  )
}

export default product
