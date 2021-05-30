import axios from 'axios';
import actiontypes from '../actiontypes'
// import userReducer from '../reducers/userReducer';

export const registerUser= (_user) => {

  return async dispatch => {
    const user = {
      email: _user.email,
      password: _user.password
    }
    await axios.post('http://localhost:9999/api/users/register', _user)
      dispatch(loginUser(user))
  }
}

export const loginUser = user => {
  return async dispatch => {
    const res = await axios.post('http://localhost:9999/api/users/login', user)
    console.log(user)
    sessionStorage.setItem('token', res.data.token)
    sessionStorage.setItem('userId', res.data.id)
    // sessionStorage.setItem('userId', res.data.name)
    if(res.data.isAdmin){
      sessionStorage.setItem('isAdmin', res.data.isAdmin)
    }
    dispatch(setUser(res.data))
    console.log(res.data)
  }

}
export const setUser = (user) => {
  return {
    type: actiontypes().user.set,
    payload: user
  }
}
export const checkUser = () => {
  let token = sessionStorage.getItem('token')
  // if(token) {
  //   return {
  //     type: actiontypes().user.check,
  //     payload: true
  //   }
  // }else {
  //   return {
  //     type: actiontypes().user.check,
  //     payload: false
  //   }
  // }
  return {
    type: actiontypes().user.check,
    payload: token
  }
}

// export const logout  = dispatch => {
    
//     dispatch(logoutUser())
// }

export const logoutUser = () => {
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('userId')
  sessionStorage.removeItem('isAdmin')
  return {
    type: actiontypes().user.logout,
    payload: false
  }
}


