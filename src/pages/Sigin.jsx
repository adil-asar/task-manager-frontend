
import Intro from '../components/auth/Intro'
import Loginform from '../components/auth/Loginform'
import { baseUrl } from '../constants/baseUrl'
const Sigin = () => {

  console.log(baseUrl)
  
  return (
    <div className='w-full flex md:flex-row flex-col h-screen   '>
    <Intro />
   <Loginform />
    </div>
  )
}

export default Sigin