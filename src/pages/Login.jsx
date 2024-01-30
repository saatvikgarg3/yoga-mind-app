import React from 'react'
import './../App.css'
import PhoneOtpForm from '../components/PhoneOtpForm'
const Login = () => {
  return (
    <div className='Login'>
      <h1>Login to your account</h1>
      <PhoneOtpForm/>
    </div>
  )
}

export default Login