import UIstore from "../../store/uistore"
import {useMutation} from 'react-query';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { sign_in } from "../../apicalls/auth";
import { useRouter } from 'next/router'
import store from "store";
import { useEffect, useState } from "react";

// import UserStore from '../../store/userStore'

  
const  SignIn =()=>{
  const { asPath } = useRouter();
  const[signupMSG, setSignupMSG] =useState('')
  
  
  const { register, handleSubmit,reset , formState: { errors } } = useForm()
  const{mutate, isLoading, error} = useMutation(sign_in)
  const router = useRouter()
  useEffect(()=>{
    const fromSignUp = asPath.split('#')[1]
    if(fromSignUp == 'from_signup'){
setSignupMSG('Your Account Was Created Successfully, Please Log in Below')
    }
    
})
// const setCurrentUser = UserStore((state)=> state.setCurrentUser)

const onnSubmit = x =>{
   
   

    const id = toast.loading("Please wait...")
    //do something else
toast.closeButton=true

    mutate(x, {
      onSuccess: (data)=>{
     if(data) {  console.log('mutate sus', data)
       

        toast.update(id, { render: "All is good", type: "success", isLoading: false ,  autoClose: 5000});

     
      //  setUser(d)
    }
      },
      onError: error => {
        console.error(error)
        toast.update(id, { render: "There was an Error", type: "error", isLoading: false,  autoClose: 5000 });

      },
      onSettled: (data)=>{
      
        store.set('currentUser',data)
        router.push(`/dashboard`)
      }
    })
    
  }

    return (
      <>
      <ToastContainer />
      <h1>{signupMSG}</h1>
      
        <form onSubmit={handleSubmit(onnSubmit)}>
            <label>username</label>   
<input type='text' {... register('username', { required: true})}  />
<label>password</label>   
<input type='password' {... register('password', { required: true})} />
<input value='Submit' type='submit' />


        </form>
      </>
    )
}


export default SignIn