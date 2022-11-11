// import UserStore from "../../store/userStore"
import {useMutation} from 'react-query';
import { toast } from 'react-toastify';
import { sign_out } from "../../apicalls/auth";
import { useRouter } from 'next/router'
import store from 'store';
import { useEffect, useState } from 'react';


const DashboardLayout =(props)=>{
    const user = store.get('currentUser')
   const [currentUser, setCurrentUser]= useState('')
    // const setCurrentUser = UserStore((state)=>state.setCurrentUser)
    const{mutate} = useMutation(sign_out)
    const router = useRouter()

    useEffect(()=>{
      setCurrentUser(user)
    }, [])
const handleLogout = ()=>{
    // console.log(x)
   

    // const id = toast.loading("logging you out ...")
    //do something else
// toast.closeButton=true

    mutate({}, {
      onSuccess: (data)=>{
     if(data) {  console.log('mutate sus', data)
       

        // toast.update(id, { render: "Logged Out successfully", type: "success", isLoading: false ,  autoClose: 5000});

     
      //  setUser(d)
    }
      },
      onError: error => {
        console.error(error)
        // toast.update(id, { render: "There was an Error", type: "error", isLoading: false,  autoClose: 5000 });

      },
      onSettled: (data)=>{
      
        // store.remove(currentUser)
        router.push(`/`)
      }
    })
    
  }



    return (
        <div>

            <p>@{currentUser? currentUser.username :'' }</p>
            <p onClick={handleLogout}>Logout</p>
{props.children}
        </div>
    )

}


export default DashboardLayout