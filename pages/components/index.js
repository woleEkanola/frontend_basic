import { Container } from "postcss"
import { Button } from "../../components/elements/button"
import { ContainerFull, ContainerHalf, ContainerGrid } from "../../components/elements/containers"
import MainLayout from "../../components/layouts/mainLayout"



const Components =()=>{
    return (
        <MainLayout>
            
        <div>
       
<ContainerHalf width='80%'>

            <ContainerGrid  classes='bg-green mt-10' >

            <div><Button classes='bg-primary text-white font-oswald w-[100%]' onClick={()=>{
                console.log('working')
            }} > Simple Button</Button>
            </div>
            <div><Button classes='bg-secondary text-white w-[100%]' onClick={()=>{
                console.log('working')
            }} > Another Button</Button>
            </div>

            <div><Button classes='bg-secondary text-white w-[100%]' onClick={()=>{
                console.log('working')
            }} > Another Button</Button>
            </div>
                <div> <Button classes='bg-primary text-white font-oswald w-[100%]' onClick={()=>{
                console.log('working')
            }} > Simple Button</Button>
            </div>
            </ContainerGrid>
</ContainerHalf>



        </div>
        </MainLayout>
    )
}

export default Components