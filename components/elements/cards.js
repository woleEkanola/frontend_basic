import { Row } from "./containers"


export const Card =(props)=>{


    return(
<Row classes='shadow bg-red max-w-[600px] px-2 relative min-h-[600px] hover:shadow-md'>
{props.children}
</Row> 
    )
}


export const CardFooter =(props)=>{


    return(
<Row classes='bg-gray w-full px-2 absolute min-h-[80px] bottom-0 left-0 ' mb= '0px'>
{props.children}
</Row> 
    )
}


