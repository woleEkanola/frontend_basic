import MainLayout from "./mainLayout"
import { useRouter } from "next/router"
import { useEffect } from "react"
import DashboardLayout from "./dashboardLayout"

const Layout =(props)=>{
const router = useRouter()
const {asPath, pathname} = router

const section = pathname.split('/')


useEffect(()=>{
    if (router.isReady){
        
       console.log('kkk', section)
   }
},[router.isReady])

    return (
        <>
      { section.indexOf('Dashboard') == 1? <DashboardLayout>{props.children} </DashboardLayout>: section.indexOf('auth') == 1?<div><h1>Auth Layout</h1> {props.children}  </div>: <MainLayout>
            {props.children}
        </MainLayout> }
        </>
    )
}

export default Layout