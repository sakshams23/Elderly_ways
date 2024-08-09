import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Are you ready to make a positive impact in the lives of our elderly residents?"
      desc1="Participate in our Old Age Home Fundraiser and contribute to creating a safe and nurturing environment for our seniors."
      desc2="Join the millions who are making a difference through compassion and support"
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}
  
export default Signup
