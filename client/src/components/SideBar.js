import './SideBar.css'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
const SideBar = ({show, click}) => {

  const sideBarClass = ["sidebar"];
  const quantity = useSelector(state => state.cart.totalQuantity)
  let token = useSelector(state => state.user.loggedIn)

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
        {token ? <li>
        <Link to="/dashboard">
        Dashboard
        {/* <h3 onClick={() => dispatch(logoutUser())}>Logout</h3> */}
        </Link>
        </li>
        : <li>
        <Link to="/login">
        <h3>Login</h3>
        </Link>
        </li>
        }
      </ul>

    </div>
  )
}

export default SideBar
