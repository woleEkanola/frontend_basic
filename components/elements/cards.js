import { Row } from "./containers"


export const Card =(props)=>{


    return(
     <Row classes='bg-gray-100'>
        <Row>
            <h1>Card title</h1>
        </Row>
        <Row>
            <h1>Card Body</h1>
        </Row>
        <Row>
            <h1>Card Footer</h1>
        </Row>
     </Row>
    )
}