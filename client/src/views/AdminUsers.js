import './AdminUsers.css'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import React from 'react'
import { getUsers } from '../store/actions/adminActions'

const AdminUsers = () => {
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
        User name eller nåt
      </div>
      <div>
        <button onClick={() => console.log('hej')}>Sign out</button>
      </div>
      
      </div>
      <div className="cart-right">
      <div className="cart-info">
        User name eller nåt
      </div>
      <div>
        <button onClick={() => console.log('hej')}>Sign out</button>
      </div>
      
      </div>
    </div>
  
    
  )
}

export default AdminUsers
