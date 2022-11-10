import create from 'zustand'
import { persist } from 'zustand/middleware';


const UIstore = create(
    persist((set, get) => ({
    notification: {
        show: true,
        type: 'success',
        message: 'Default message',
        stay: false

    },


  
 
    setNotification:(c) => {
        return set((state) =>{
        //    console.log('from store',c)
        return {
            ...state,
            notification:c
        }
       })
    },

   
    setCurrEvnt:(c) => {
        return set((state) =>{
        //    console.log('from store',c)
        return {
            ...state,
            focus:c
        }
       })
    },
    
    setEvents: (c) => {
        return set((state) =>{
        //    console.log('from store',c)
        return {
            ...state,
            events:c
        }
       })
    }
    }))
    )

    export default UIstore

    