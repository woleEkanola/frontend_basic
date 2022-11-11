
export const Button =(props)=>{

    return <button className={`${props.classes} px-2 py-1`} onClick={props.onClick} >{props.children} </button>
}

 