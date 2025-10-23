import { Outlet } from 'react-router'
import Footer from '../pages/Shared/Footer'
import Navbar from '../pages/Shared/Navbar'

export const RootLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
