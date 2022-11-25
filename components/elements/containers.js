
export const ContainerHalf =(props)=>{

    return <div className={`${props.classes}  ${props.dontCenter?'':'mx-auto'} mb-10`} style={{width: props.width? props.width: '50%', marginBottom:props.mb? props.mb: '10px' }} onClick={props.onClick} >{props.children} </div>
}


export const ContainerGrid =(props)=>{

    return <div className={`${props.classes} block mx-auto md:grid lg:grid ${props.gridCols? props.gridCols: 'md:grid-cols-2 lg:grid-cols-4'}  ${props.gridGap? props.gridGap: 'gap-1'} mx-auto mb-10`} style={{width: props.width? props.width: '100%', marginBottom:props.mb? props.mb: '10px' }} onClick={props.onClick} >{props.children} </div>
}

export const ContainerFlex =(props)=>{

    return <div className={`${props.classes} mx-auto md:flex  ${props.gridGap? props.gridGap: 'gap-1'} mx-auto mb-10`} style={{width: props.width? props.width: '100%', marginBottom:props.mb? props.mb: '10px' }} onClick={props.onClick} >{props.children} </div>
}

export const ContainerFull =(props)=>{

    return <div className={`${props.classes} mx-auto w-[100%]`} onClick={props.onClick}
    style={{ marginBottom:props.mb? props.mb: '10px' }} 
    
    >{props.children} </div>
}


export const Row =(props)=>{

    return <div className={`${props.classes} w-[100%] mx-auto`} onClick={props.onClick}
    style={{ marginBottom:props.mb? props.mb: '5px' }} 
    
    >{props.children} </div>
}

 