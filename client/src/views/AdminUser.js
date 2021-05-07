import './AdminUser.css'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUser } from '../store/actions/adminActions'


const AdminUser = () => {
  const id= useParams().id
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id))
    // return () => {
    //   cleanup
    // }
  }, [dispatch, id])

  return (
    <div>
      User
    </div>
  )
}

export default AdminUser
