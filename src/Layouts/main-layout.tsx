import {Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'

export default function MainLayout() {
  return (
    <div>
        <Navbar />
        <Outlet/>
        <footer> This is footer</footer>
        </div>
  )
}
