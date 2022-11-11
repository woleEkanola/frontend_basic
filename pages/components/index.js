import { Button } from "../../components/elements/button"
import MainLayout from "../../components/layouts/mainLayout"



const Components =()=>{
    return (
        <MainLayout>
            
        <div>
            <Button classes='bg-primary text-white font-oswald' onClick={()=>{
                console.log('working')
            }} > Simple Button</Button>

<Button classes='bg-secondary text-white' onClick={()=>{
                console.log('working')
            }} > Another Button</Button>
        </div>
        </MainLayout>
    )
}

export default Components