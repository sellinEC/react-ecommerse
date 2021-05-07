import { useRef} from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../store/actions/userActions'
import { useHistory} from 'react-router-dom'

const RegisterComponent = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const password = useRef()

  const handleSub = e => {
    e.preventDefault();
    let user = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value
    }
    dispatch(registerUser(user))
    history.push('/')
  }

  return (
    <div className="container">
      <form onSubmit={handleSub} className="form-container">
        <div className="form-control">
        <label>First name</label>
        <input type="text" ref={firstName}/>
        <label>Last name</label>
        <input type="text" ref={lastName}/>
        </div>
        <div className="form-control">
        <label>Email</label>
        <input type="email" ref={email}/>
        </div>
        <div className="form-control">
        <label>Password</label>
        <input type="password" ref={password}/>
        </div>
        <button>Register</button>
      </form>
  </div>
  )
}

export default RegisterComponent
