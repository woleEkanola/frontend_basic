import { Container } from "postcss"
import { Button } from "../../components/elements/button"
import { ContainerFull, ContainerHalf, ContainerGrid } from "../../components/elements/containers"
import { ModalContent, ModalTrigger } from "../../components/elements/modal"
import { Tabs, Tablist } from "../../components/elements/tabs"
import MainLayout from "../../components/layouts/mainLayout"



const Components =()=>{
    const tbs = [
        {name: 'hello', id: 1},
        {name: 'hi', id: 2}
    ]

  
  

    return (
        <MainLayout>
            
            <ModalTrigger>
                <button className="mt-[200px] bg-green">Hello</button>
            </ModalTrigger>
        <div>
       
       <ModalContent>

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
       </ModalContent>

<ContainerHalf>

<Tabs  defaultTab='1' >
    <Tablist id='_tabListTabControl_' activeTabs='x' activeTabClass='bg-blue-300' inActiveTabClass='bg-blue-100' > 
    {tbs.map(t=>{
      return  <h1 data={t} className="bg-gray">{t.name}</h1>
    })}
    </Tablist>
    
<div id='1'> <p>Tab 1</p></div>
<div id='2'> <p>Tab 2</p></div>
<div id='3'> <p>ljwefnlvjwfbnlj wljfbn wljkfnj wkjfln lwfjk lwjk</p></div>
</Tabs>


<Tabs  defaultTab='1'>
    <Tablist id='_tabListTabControl_' > 
    {tbs.map(t=>{
      return  <h1 data={t} className="bg-gray">{t.name}</h1>
    })}
    </Tablist>
    
<div id='1'> <p>Tab 1a</p></div>
<div id='2'> <p>Tab 2a</p></div>
<div id='3'> <p>ljwefnlvjwfbnlj wljfbn wljkfnj wkjfln lwfjk lwjk</p></div>
</Tabs>
</ContainerHalf>


        </div>
        </MainLayout>
    )
}

export default Components