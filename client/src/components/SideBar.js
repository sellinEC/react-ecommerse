import './SideBar.css'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
const SideBar = ({show, click}) => {

  const sideBarClass = ["sidebar"];
  const quantity = useSelector(state => state.cart.totalQuantity)

  if(show) {
    sideBarClass.push("show")
  }

  return (
    <div className={sideBarClass.join(" ")}>
      <ul className="sidebar-links" onClick={click}>
        <li>
        <Link to="/cart">
        <i className="fas fa-shopping-cart"></i>
        <span>
          Cart 
          {quantity
            ?<span className="sidebar-cartbadge">{quantity}</span>
            :<span className="sidebar-cartbadge">0</span>
          }
        </span>
        </Link>
        </li>
        <li>
          <Link to="/"> Shop</Link>
        </li>
      </ul>

    </div>
  )
}

export default SideBar
