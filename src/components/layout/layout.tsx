import { Outlet } from "react-router-dom"
import Navbar from "../navbar/navbar"
import { useEffect } from "react"
import useAuthStore from "../../stores/authStore"
import useFollowersStore from "../../stores/followersStore"
import CustomModal from "../customModal/customModal"

function Layout() {
    const authStore = useAuthStore((state)=>state)
    const followersStore = useFollowersStore(state=>state)
    useEffect(()=>{
        authStore.setData()
        followersStore.setData()
    },[])
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default Layout