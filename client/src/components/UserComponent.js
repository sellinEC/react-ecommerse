import './UserComponent.css'
import React from 'react'
import {Link} from 'react-router-dom'
import {deleteUser} from '../store/actions/adminActions'
import {useDispatch} from 'react-redux'


const UserComponent = ({user}) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
        
      <div className="names">
        <p>{user.firstName}</p> <p>{user.lastName}</p>
      </div>
        <div className="email">
          {user.email}
        </div>
        <div className="orders">
          <Link to={`/admin/users/${user._id}`}>
          Active orders
          </Link>
        </div>
        <div>
        <button onClick={() => dispatch(deleteUser(user._id))} className="delete">DELETE USER <i className="fas fa-trash"></i></button>
        </div>
    </div>
  )
}

export default UserComponent
