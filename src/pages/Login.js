import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Embrace the warmth of compassion"
      desc2="Build a bridge of love for every elder's heart."
      
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
