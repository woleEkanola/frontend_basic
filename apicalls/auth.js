import axios from "axios"
import { encode } from "base-64"

import store from "store"


export const sign_in= async(obj)=>{
    const res = await axios.post(`http://127.0.0.1:5000/api/tokens`,{},{
        auth:{username: obj.username, password: obj.password},
       
        headers: {
            "Content-Type": "application/json",
            "withCredentials": true,
            },
            })
//   console.log('ttttt',res)

const pes = await axios.post(`/api/login`,res.data,{
      
    headers: {
        "Content-Type": "application/json",
        "withCredentials": true,
        },
        })

        let user = {}
        Object.assign(user, pes.data.userdata)
        user.access_token = res.data.access_token
    return user
}

export const sign_up= async(obj)=>{
    const res = await axios.post(`http://127.0.0.1:5000/api/users`,{
        username: obj.username,
        email: obj.email,
        password: obj.password
    },{
     headers: {
            "Content-Type": "application/json",
            "withCredentials": true,
            },
            })
//   console.log('ttttt',res)\
if(res.status == 201){

    return {status:res.status, message: 'account created successfully' }
}else{
    return {status: 500, message: 'account not created'}
}
}


export const sign_out =async()=>{

let res   = await axios.post(`/api/logout`,{},{
      
        headers: {
            "Content-Type": "application/json",
            "withCredentials": true,
            },
            })


store.remove('currentUser')
}
// export const sign_in = async(obj)=>{

//     const res = await fetch('http://127.0.0.1:5000/api/tokens', {
//         method: 'post',
       
//         headers: new Headers({
//           'Authorization': 'Basic ' + encode(obj.username + ":" + obj.password),
//           'Content-Type': 'application/json',
//           credentials: 'same-origin',
//         })
//       });

//       const pes = await fetch('/api/login', {
//         method: 'post',
//         headers: new Headers({
//                    'Content-Type': 'application/json',
//             credentials: 'same-origin',
//           })
//       })

//       return res.json()
// }


// export const create_new_events = async({token, obj, applink}) =>{
//     const res = await axios.post(`${applink}/api/v1/auth/createvent`,{ obj:obj,token:token })
//     return res.data
  
//   }