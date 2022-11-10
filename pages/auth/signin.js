import UIstore from "../../store/uistore"
import {useMutation} from 'react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { sign_in } from "../../apicalls/auth";
import { useRouter } from 'next/router'
import store from "store";

// import UserStore from '../../store/userStore'

  
const  SignIn =()=>{
const { register, handleSubmit,reset , formState: { errors } } = useForm()
const{mutate, isLoading, error} = useMutation(sign_in)
const router = useRouter()

// const setCurrentUser = UserStore((state)=> state.setCurrentUser)

const onnSubmit = x =>{
    console.log(x)
   

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
        <form onSubmit={handleSubmit(onnSubmit)}>
            <label>username</label>   
<input type='text' {... register('username', { required: true})}  />
<label>password</label>   
<input type='password' {... register('password', { required: true})} />
<input value='Submit' type='submit' />
{/* <buuton onClick={()=>{
    
}} >submit</buuton> */}

        </form>
    )
}


export default SignIn