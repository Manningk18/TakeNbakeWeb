import * as React from "react"
import {Container,
    List,
    ListItem,
    Goto,
    ListImg,
    Block,
    Info} from '../styles/homeStyles';
import ExampleImg from "../images/phone.jpg"
import Example2Img from "../images/3D-model.jpg"
import Example3Img from "../images/wireframe.jpg"

const Hero =  () => (
    <Container>
        <List>
        <ListItem left>
            <ListImg src={ExampleImg}/>
                <Block> 
                    <Info>SNAP</Info>
                </Block> 
            </ListItem>
        <ListItem>
            <ListImg src={Example3Img}/>
                <Block> 
                    <Info>UPLOAD</Info>
                </Block> 
            </ListItem>
        <ListItem right>
            <ListImg src={Example2Img}/>
                <Block> 
                    <Info>USE</Info>
                </Block> 
            </ListItem>
        </List>
    </Container>
)

export default Hero