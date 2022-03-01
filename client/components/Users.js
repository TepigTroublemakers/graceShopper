import React from 'react'
import { connect } from 'react-redux'
import { getUsersFromDb } from '../store'

class Users extends React.Component {
  componentDidMount(){
    getUsersFromDb()
  }

  render(){
    return (

    )
  }
}
mapState = (state) => {
  return {
    users: state.users
  }
}

mapDispatch = (dispatch) => {
  return {
    getUsersFromDb: dispatch(getUsersFromDb())
  }
}

export default connect(mapState, mapDispatch)(Users)
