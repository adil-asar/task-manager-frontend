import React from 'react'
import Intro from '../components/auth/Intro'
import Signupform from '../components/auth/Signupform'

const Signup = () => {
  return (
    <div className='w-full flex md:flex-row flex-col h-screen   '>
    <Intro />
    <Signupform />
    </div>
  )
}

export default Signup