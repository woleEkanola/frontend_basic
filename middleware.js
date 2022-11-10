import { NextResponse } from 'next/server'
// import UserStore from './store/userStore'
import store from 'store';


export async function middleware(request) {
    const currentUser = store.get('currentUser')
   
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if(!currentUser){
            return NextResponse.redirect(new URL('/', request.url))}else{
                

        const bk = await fetch('http://127.0.0.1:5000/api/me', { 
            method: 'get', 
            headers: new Headers({
                'Authorization': 'Bearer '+ currentUser.access_token, 
                'Content-Type': 'application/x-www-form-urlencoded',
                "credentials": 'include'
              })
          });
          
          let data = await bk.json()

         
          }

          if(data.id != currentUser.id){
            return NextResponse.redirect(new URL('/', request.url))
          }
        // return NextResponse.redirect(new URL('/', request.url))
}
}

