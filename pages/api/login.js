import cookie from "cookie";


export default async (req, res) => {
    console.log('working')
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("refresh_token", req.body.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 60 * 60,
      sameSite: "strict",
      path: "/",
    })
  );

  const brr = req.body.access_token
  
  //   const bk =  await axios.get(`http://127.0.0.1:5000/api/me`,{
      //     headers: {
          
          //         "Authorization": `Bearer ${brr}`
          //         },
          //         })
          
          const bk = await fetch('http://127.0.0.1:5000/api/me', { 
              method: 'get', 
              headers: new Headers({
                  'Authorization': 'Bearer '+ brr, 
                  'Content-Type': 'application/x-www-form-urlencoded',
                  "credentials": 'include'
                })
            });
            
            let data =await bk.json()
            console.log('klklklk',data)
            if(bk.status == 200){

                // setCurrentUser(data)

                res.statusCode = 200;
                res.json({ success: true , userdata:data});
            }else{
                res.statusCode = 400;
                res.json({ success: false });
            }
};
