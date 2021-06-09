import * as React from "react"
import {Container,
    Wrapper,
    Left,
    Right,
    Logo,
    AboutInfo,
    AboutTitle,} from '../styles/homeStyles';
import LogoImg from "../images/logo.svg"

const About =  () => (
    <Container style={{backgroundColor: "#737373"}}>
        <Wrapper>
            <Left>
                <AboutTitle>A Little About Us</AboutTitle>
                <AboutInfo>Here at JLTech we have a wide variety of people from game devs, to marketers, to web developers.....Tongue ground round t-bone porchetta. Chicken ham hock short ribs ground round. Pork chop kielbasa hamburger venison brisket rump pork drumstick capicola ham hock. Ground round andouille shank capicola t-bone rump alcatra porchetta landjaeger pancetta sirloin spare ribs turkey chicken. Alcatra prosciutto biltong pork loin, picanha jowl beef rump.<br/><br/>

Chicken t-bone chuck strip steak, prosciutto burgdoggen jerky frankfurter meatball doner picanha. Filet mignon short ribs leberkas jerky salami, landjaeger hamburger spare ribs capicola. Corned beef biltong tongue, picanha flank bacon doner shankle fatback turducken.</AboutInfo>
            </Left>
            <Right>
                <Logo src={LogoImg}/>
            </Right>
        </Wrapper>
    </Container>
)

export default About