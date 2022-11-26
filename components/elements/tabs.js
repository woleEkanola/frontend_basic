import React, { useEffect, useState } from "react"
import { atom, useAtom } from 'jotai'

const activeTabs= atom('hee')
export const Tabs =(props)=>{

    const [activeTab, setActiveTab]= useState('')
    let elements = React.Children.toArray(props.children)
    const prepEl = elements.map(el=>{
        return   React.cloneElement(el, {activeTab,setActiveTab })
    })
    const tablist = prepEl.filter(el=>{
   
        return el.props.id == '_tabListTabControl_'
            })
   
    useEffect(()=>{
        setActiveTab(props.defaultTab)
    }, [])
  const element=  elements.filter(el=>{
return el.props.id == activeTab
    })
    
     console.log(element)
    return (
        <div className="relative ">

            <div className="">
                {tablist}
            </div>
       
            <div className="pt-4" >{element} </div>
        </div>
    )
}

export const Tablist =(props)=>{
    let elements = React.Children.toArray(props.children)
    console.log('hhh',props.activeTab)
    
    const chdClick= (x)=>{
        props.setActiveTab(x)
        console.log(x,' has been clicked')
    }
    return(
        <div  className=" w-full grid grid-cols-2 ">
             {
                elements.map(el=>{
                    return React.cloneElement(el, { onClick: ()=>{chdClick(el.props.data.id)}, className: el.props.data.id==props.activeTab? props.activeTabClass?props.activeTabClass:'bg-gray' :props.inActiveTabClass?props.inActiveTabClass:'bg-gray-100' })
                })
             }
        </div>
    )
}