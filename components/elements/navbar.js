import { useState } from "react"

export const NavBar =(props)=>{
    const [showMobileMenu, setShowMobileMenu]= useState(false)

    return <nav className={`${props.classes}  mx-auto mb-10 md:flex justify-between`} 
    style={{width: props.width? props.width: '100%', marginBottom:props.mb? props.mb: '10px' }} 
    onClick={props.onClick} >

        <div className={` ${props.logoClasses}`}>
        {/* md:text-left md:w-100% */}
        {props.logo}
        </div>

        <div className={`block  absolute right-[5%] z-20 top-[5%] lg:hidden ${props.navClasses} `} onClick={()=>{
            setShowMobileMenu(!showMobileMenu)
        }}>
        {props.mobileMenuIcon?props.mobileMenuIcon: <h3 className="float-right">Menu</h3> }
        </div>

        <div className={`hidden lg:flex ${props.navGap? props.navGap: 'gap-3'} w-[30%] ${props.navClasses} `} >

    {props.children} 
        </div>

        {showMobileMenu? <div className={`block absolute z-10 top-0 left-0 w-[60%] h-[100vh] md:w-[100%] md:h-[30%]   lg:hidden ${props.mobileNavbg?props.mobileNavbg:'bg-gray'}`}>
            {props.children}
        </div>: ''}
    </nav>
}