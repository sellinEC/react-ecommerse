import './Navbar.css'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Navbar = ({click}) => {
  const quantity = useSelector(state => state.cart.totalQuantity)
  let token = useSelector(state => state.user.loggedIn)
  // const dispatch = useDispatch();
  // const logout = () => {
  //   // sessionStorage.removeItem('token')
  //   dispatch(logout())
  // }
  return (
    <nav className="navbar"> 
      
      <div className="navbar-logo">
        <h2>Shoop</h2>
      </div>
     
      <ul className="navbar-links">
        <li>
          <Link to="/cart" className="cart-link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              {quantity ?
              <span className="cartlogo-badge">{quantity}</span>
              :
              <span className="cartlogo-badge">0</span>
              }
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <h3>Shop</h3>
          </Link>
        </li>
        {token ? <li>
        <Link to="/dashboard">
        <h3>Dashboard</h3>
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
  
      <div className="hamburger-menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar
