import './AdminUsers.css'
import UserComponent from '../components/UserComponent'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import { getUsers } from '../store/actions/adminActions'


const AdminUsers = () => {
  
  const isAdmin = sessionStorage.getItem('isAdmin')
  const users = useSelector(state => state.admin.adminUsers)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers())
    // return () => {
    //   cleanup
    // }
  }, [dispatch])

  return (
    <div className="cart">
       <div className="cart-left">
      <div className="cart-info">
      {isAdmin?
      users && users.map(user => (
        <UserComponent key={user._id} user={user}/>
      ))
      : <h3>Restricted area. Log in with credentials</h3>
      }
      </div>
      <div>
        
      </div>
      
      </div>
      <div className="cart-right">
      <div className="cart-info">
        User name eller nåt
      </div>
      <div>
        <Link to="/dashboard">
        <button>Dashboard</button>
        </Link>
      </div>
      
      </div>
    </div>
  
    
  )
}

export default AdminUsers
