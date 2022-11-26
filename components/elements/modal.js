import { useEffect, useState } from "react"
import { modal } from "../../store/store"
import { useAtom } from 'jotai'
import { CloseIcon } from "../svg"
import React from "react"


export const ModalTrigger =(props)=>{
    const [mdal, setMdal] = useAtom(modal)
    let elements = React.Children.toArray(props.children)
    var el 

    if(elements.length >1){
        console.log('only one child should be given to  modalTrigger')
        el = React.cloneElement(  elements[0], { onClick:  ()=>{setMdal(!mdal)} })
      

    }else{
        el = React.cloneElement(props.children, { onClick:  ()=>{setMdal(!mdal)} })
    }
  

  

    return(
        <div>
            {el} 
         
        </div>
    )

}

export const ModalContent =(props)=>{
    const [mdal, setMdal] = useAtom(modal)

    // useEffect(()=>{
    //     setCurrentModal(store.get('modal') )
    // })

if(mdal){

    return(
    
        <div className={`${props.bgColor?props.bgColor: 'bg-black'}  bg-opacity-80 z-30 absolute top-0 left-0 w-screen h-screen`}>
           <div className="absolute top-[5%] left-[5%] z-40" onClick={()=>{
            setMdal(false)
           }}>

            {props.closeIcon?props.closeIcon :<CloseIcon classes='bg-white p-1 rounded-[50%]'/>}
           </div>
           <div className="pt-12" >

            {props.children}
           </div>
          
        </div>
    )
}

    
}