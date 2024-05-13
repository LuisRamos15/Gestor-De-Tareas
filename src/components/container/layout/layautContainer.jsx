import Home from '../../../pages/private/home/home'
import Sidebar from '../../sidebar/sidebar'
// import { Outlet } from 'react-router-dom'

const LayautContainer = () => {
  return (
    <div className='flex gap-3 h-screen w-screen fixed bg-gray-100 p-3'>
      <Sidebar />
      <Home />
    </div>
  )
}

export default LayautContainer