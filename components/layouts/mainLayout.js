import UIstore from '../../store/uistore'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const MainLayout = (props)=>{
 
   


    return(
        <main>
           

             <ToastContainer closeButton={true} />
            {props.children}
           

        </main>
    )
}

export default MainLayout 