import React from 'react'
import Intro from '../components/auth/Intro'
import Loginform from '../components/auth/Loginform'

const Sigin = () => {
  return (
    <div className='w-full flex md:flex-row flex-col h-screen   '>
    <Intro />
   <Loginform />
    </div>
  )
}

export default Sigin