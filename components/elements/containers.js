
export const ContainerFull =(props)=>{

    return <div className={`${props.classes} w-[98%] mx-auto mb-10`} onClick={props.onClick} >{props.children} </div>
}


export const Row =(props)=>{

    return <div className={`${props.classes} w-[100%] mx-auto mb-5`} onClick={props.onClick} >{props.children} </div>
}

 