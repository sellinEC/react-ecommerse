import actiontypes from '../actiontypes'

const initState = {
  adminUser: null,
  adminUsers: null,

}

const adminReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().admin.setAdminUser:
      return {
        ...state,
        adminUser: action.payload
      }
    case actiontypes().admin.setAdminUsers:
      return {
        ...state,
        adminUsers: action.payload
      }

    default:
      return state 
  }
}

export default adminReducer;