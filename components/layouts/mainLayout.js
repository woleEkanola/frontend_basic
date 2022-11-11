import UIstore from '../../store/uistore'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router';



const MainLayout = (props)=>{
 
    return(
        <main>
           <a href='/auth/signin' >Sign In</a>
           <a href='/auth/signup'>Sign up</a>
           <a href='/components'>components</a>

             <ToastContainer closeButton={true} />
            {props.children}
           

        </main>
    )
}

export default MainLayout 