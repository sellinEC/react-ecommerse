import { useRef } from 'react'
import {useDispatch} from 'react-redux'
import {loginUser} from '../store/actions/userActions'
import {useHistory} from 'react-router-dom'
import './LoginComponent.css'
const LoginComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const email = useRef();
  const password = useRef();

  const handleSub = e => {
    e.preventDefault();
    let user = {
      email: email.current.value,
      password: password.current.value
    }
    dispatch(loginUser(user))
    history.push('/')
  }
  return (
    <div className="container">
      <form onSubmit={handleSub} className="form-container">
        <div className="form-control">
        <label>Email</label>
        <input type="email" ref={email}/>
        </div>
        <div className="form-control">
        <label>Password</label>
        <input type="password" ref={password}/>
        </div>
        <button>Log in</button>
      </form>
  </div>
  )
}

export default LoginComponent
