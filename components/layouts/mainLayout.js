import UIstore from '../../store/uistore'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router';
import { NavBar } from '../elements/navbar';
import { ContainerFlex, ContainerHalf } from '../elements/containers';
import { MenuIcon } from '../svg';



const MainLayout = (props)=>{
 
    
    return(
        <main>
            <NavBar logo={<h1 className=''>my LOGO</h1>} logoClasses='text-center w-[90%] md:text-left md:w-100% mx-auto relative right-0 top-0 bg-red'  mobileMenuIcon={<MenuIcon classes=''/>} >

             

           <a href='/auth/signin' >Sign In</a>
           <a href='/auth/signup'>Sign up</a>
           <a href='/components'>components</a>
           

            </NavBar>

             <ToastContainer closeButton={true} />
            {props.children}
           

        </main>
    )
}

export default MainLayout 