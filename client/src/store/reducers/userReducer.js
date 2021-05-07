import actiontypes from '../actiontypes'

const initState = {
  loggedIn: false,
  userId: null,
  token: null
}

const userReducer = (state = initState, action) => {

  switch(action.type) {
    case actiontypes().user.set:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.id,
        loggedIn: true
      }
    case actiontypes().user.check:
      // return {
      //   ...state,
      //   loggedIn: action.payload
      // }
      if(action.payload) {
        return {
          ...state,
          loggedIn: true
        }
      } else {
        return {
          ...state,
          loggedIn: false
        }
      }

    case actiontypes().user.logout:
    return {
      ...state,
      loggedIn: action.payload,
      userId: null,
      token: null
    }

    default:
      return state
  }
}

export default userReducer;