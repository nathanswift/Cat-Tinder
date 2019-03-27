import React from 'react'
import axios from 'axios'

const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer

export class AuthProvider extends React.Component {
  state = { user: null }

  handleRegister = () => {
    debugger
    // axios call to register a user
  }

  handleLogin = () => {
    debugger
    // axios call to create a new user session
  }

  handleLogout = () => {
    debugger
    // axios call to delete a user session
  }

  render () {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        authenticated: this.state.user !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        setUser: (user) => this.setState({ user })
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider


