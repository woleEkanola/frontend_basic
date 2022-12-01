
import { Button } from "../../components/elements/button"
import {  Container, ContainerFlex, ContainerGrid, Row } from "../../components/elements/containers"
import { ModalContent, ModalTrigger } from "../../components/elements/modal"
import { Tabs, Tablist } from "../../components/elements/tabs"
import MainLayout from "../../components/layouts/mainLayout"
import {Card, CardFooter} from '../../components/elements/cards'
import { AnimatedBG } from "../../components/elements/animatedBG"
import { TextImageBanner } from "../../components/pageParts/textImageHeroBanner"
import { BigText } from "../../components/elements/titles"



const Components =()=>{
    const tbs = [
        {name: 'hello', id: 1},
        {name: 'hi', id: 2},
        {name: 'hi', id: 3}
    ]

  
  

    return (
        <MainLayout>
            <AnimatedBG>
<Container classes='pt-[200px] md:pt-[250px] w-[85%] lg:w-[75%]' >

                <TextImageBanner classes=''>
                    <Row classes=" mx-auto md:mx-0 mb-9 lg:mb-[0px] text-center md:text-left col-span-3 "> 
                        <h1 className="bigText text-white drop-shadow-lg">Component SHOWCASE</h1>
                        <Row classes='' mb='15px'>

                        <p className="text-justify md:text-left mt-5 md:mt-3 text-white paragraphText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Row>
                   <Button classes='bg-white my-5 px-3 py-2 rounded text-[#4158D0]'> View Component List</Button>
                    </Row>
                    <Row classes="h-[350px] w-[100%] mx-auto md:mx-0 mb-5 lg:mb-[0px]  col-span-2     ">
                        <img className="mt-[-15px] w-full mx-auto border-8 border-white shadow-md rounded-md " src="/img/bulb.jpg" />
                    </Row>
                </TextImageBanner>
</Container>
            </AnimatedBG>


            <Container classes='mt-[60px] md:mt-[80px] w-[85%] lg:w-[75%]' >

                <h1 className="bigText text-[#C850C0] mb-4"> A Big Stature isn't the same as a Big Account  </h1>
                <p className="paragraphText">Lorem ipsum dolor siiit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

            </Container>
      
            
{/* 
          <ModalTrigger>
                <button className="mt-[200px] bg-green">Hello</button>
            </ModalTrigger> 
             */}
      
       
       {/* <ModalContent>

<Container width='80%'>

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
</Container>
       </ModalContent> */}
<Container classes='mt-[60px] md:mt-[80px] bg-blue-300 py-[150px]' >

<Container classes=' w-[85%] lg:w-[75%] ' >

<Tabs  defaultTab='1' classes='bg-white p-[20px]'  >
    <Tablist id='_tabListTabControl_' activeTabs='x' activeTabClass='bg-white' inActiveTabClass='bg-blue-100' > 
    {tbs.map(t=>{
      return  <h1 data={t} className="bg-gray">{t.name}</h1>
    })}
    </Tablist>
    
<div id='1'> <p>Tab 1</p></div>
<div id='2'> <p>Tab 2</p></div>
<div id='3'> <p>ljwefnlvjwfbnlj wljfbn wljkfnj wkjfln lwfjk lwjk</p></div>
</Tabs>





</Container>
</Container>
<Container classes='mt-[60px] md:mt-[80px] w-[85%] lg:w-[75%] ' >
<Card >
<Row>
            <h1>Card title</h1>
        </Row>
        <Row>
            <h1>Card Body</h1>
        </Row>
        <CardFooter>
            <h1>Card Footer</h1>
        </CardFooter>
</Card>
</Container>

  
        </MainLayout>
    )
}

export default Components