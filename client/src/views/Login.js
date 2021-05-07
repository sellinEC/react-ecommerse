import { useState } from 'react'
//Components
import LoginComponent from '../components/LoginComponent'
import RegisterComponent from '../components/RegisterComponent'
import './Login.css'

const Login = () => { 
  const [toggleRegister, setToggleRegister] = useState(true)
  return (
    <div>
      <div className="container test">
        <div className="swapper">
          {
            toggleRegister ? 
            <h3 onClick={() => setToggleRegister(false)}>Register</h3> : 
            <h3 onClick={() => setToggleRegister(true)}>Login</h3> 
          }
           
           
        </div>
        {
         toggleRegister ? <LoginComponent/> : <RegisterComponent/>
        }
      </div>
    </div>
  )
}

export default Login
