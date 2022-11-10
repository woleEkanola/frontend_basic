import create from 'zustand'
import { persist } from 'zustand/middleware';


const UserStore = create(
    persist((set, get) => ({
    currentUser: {},
    setCurrentUser:(c) => {
        return set((state) =>{
        //    console.log('from store',c)
        return {
            ...state,
            currentUser:c
        }
       })
    }
    }))
    )

    export default UserStore

    