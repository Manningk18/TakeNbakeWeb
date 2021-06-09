import * as React from "react"
import {Container,
    Wrapper,
    Item, 
    IconCon,
    HowTo, 
    AboutTitle, 
    Icon,  
    MethodInfo, 
    ItemTitle, 
    ItemInfo,} from '../styles/homeStyles';
import BrandBackImg from '../images/back.jpg';
import IconImg from "../images/3D-model.jpg"

const Steps =  () => (
    <Container style={{backgroundImage: `url(${BrandBackImg})`}}>
      <Wrapper top two>
        <HowTo>
          <AboutTitle dark>HOW DOES IT WORK?</AboutTitle>
          <Item>
            <IconCon>
              <Icon src={IconImg}/>
            </IconCon>
            <MethodInfo>
              <ItemTitle>Take the pictures</ItemTitle>
              <ItemInfo>Take many pictures of the object you would like to encapture.</ItemInfo>
            </MethodInfo>
          </Item>
          <Item style={{alignSelf: "center"}}>
            <IconCon>
              <Icon src={IconImg}/>
            </IconCon>
            <MethodInfo flipped>
              <ItemTitle flipped>Send the pictures</ItemTitle>
              <ItemInfo flipped>Once you've obatained enough photos, title the project and send the pictures over.</ItemInfo>
            </MethodInfo>
          </Item>
          <Item style={{alignSelf: "flex-end"}}>
            <IconCon>
              <Icon src={IconImg}/>
            </IconCon>
            <MethodInfo>
              <ItemTitle>We'll do the rest</ItemTitle>
              <ItemInfo>Your finished scan will appear in your collection once we are done rendering it.</ItemInfo>
            </MethodInfo>
          </Item>
        </HowTo>
      </Wrapper>
    </Container>
)

export default Steps