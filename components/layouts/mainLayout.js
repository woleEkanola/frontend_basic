
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router';
import { NavBar } from '../elements/navbar';
import { ContainerFlex, Container } from '../elements/containers';
import { MenuIcon } from '../svg';
import { Button } from '../elements/button';



const MainLayout = (props)=>{
 
    
    return(
        <main>
            <Container width='100%' classes=' py-1 pl-6 mt-5 fixed top-0 left-0 z-10 '>
                
            <NavBar logo={<img src='/img/innovar.png'/>} width='80%' classes=' mx-auto' logoClasses=''  mobileMenuIcon={<MenuIcon classes=''/>} >

             

        <ContainerFlex classes='justify-between text-white' >
        <div>
           <a className='mr-4 hover:bg-blue-100 p-1' href='/auth/signin' >Sign In</a>
           <a className='mr-4 hover:bg-blue-100 p-1' href='/auth/signup'>Sign up</a>
           <a className='mr-4 hover:bg-blue-100 p-1' href='/components'>components</a>
           <a className='mr-4 hover:bg-blue-100 p-1' href='/auth/signin' >Sign In</a>
           </div>
           <div> <Button classes=' shadow rounded-md px-4 border-white border border-solid bg-[linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)]' >Buy Now</Button></div>
        </ContainerFlex>
           
           

            </NavBar>
            </Container>

             <ToastContainer closeButton={true} />
            {props.children}
           

        </main>
    )
}

export default MainLayout 