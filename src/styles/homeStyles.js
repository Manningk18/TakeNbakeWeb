import styled, { keyframes } from 'styled-components'

const Container = styled.div`
background: #fff; 
color: #FFF; 
line-height: 1; 
background-repeat: no-repeat;
background-size: cover;
background-position: center;
display: flex;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

`;

const slideLeft = keyframes`
  from {
    transform: translateX(150%);
  }

  to {
    transform: translateX(0%);
  }
`;

const List = styled.ul`
display: flex; 
  overflow: hidden; 
  width: 75%;
  margin: 0px;
  place-content: center;
  padding-top: 15px;
  li {
    
    &:nth-child(1) {
        animation: ${slideLeft} .75s;
    }
    &:nth-child(2) {
        animation: ${slideLeft} 1.25s;
    }
    &:nth-child(3) {
        animation: ${slideLeft} 1.75s;
    }
  }
`;

const ListItem = styled.li`
width: 37.5%; 
    -webkit-clip-path: polygon(25% 0, 100% 0, 75% 100%, 0 100%); 
    clip-path: polygon(25% 0, 100% 0, 75% 100%, 0 100%); 
    margin: 0px;
    min-height: 50vh;
    padding-bottom: 1rem;
    margin-right: ${ props => props.right ? '0px' : '-4%' };
    margin-left: ${ props => props.left ? '0px' : '-4%' };
`;

const Goto = styled.a`
color: inherit; 
  text-decoration: inherit; 
  display: block; 
`;

const ListImg = styled.img`
color: inherit; 
  text-decoration: inherit; 
  display: block; 
  height: -webkit-fill-available;
    object-fit: cover;
    height: 65vh;
    image-resolution: 300dpi;
    margin-bottom: 15px;
`;

const Block = styled.div`
    display: flex;
    justify-content: center;
    padding-right: 20%;
    background-image: linear-gradient( 180deg,#0570d6 55%,#0b63b7);
    padding-top: 10px;
    padding-bottom: 10px;
`;

const Info = styled.div`
font-size: 26px;
color: #fff;
font-weight: 600;
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
`;

const Left = styled.div`
  width: 67%;
  flex-flow: row wrap;
  align-self: center;
`;

const AboutTitle = styled.div`
  font-size: 38px;
  font-weight: 600;
  color: ${ props => props.dark ? '#000' : '#fff' };
  width: 100%;
  margin-bottom: 15px;
`;

const AboutInfo = styled.div`
    font-size: 24px;
    font-weight: 400;
    color: #fff;
    width: 100%;
`;

const Right = styled.div`
  width: 33%;
`;

const Logo = styled.img`
  margin: 0;
  padding: 18%;
`;

const Item = styled.div`
    display: flex;
    flex-flow: row nowrap;
    height: 25%;
    width: 45%;
    align-items: center;
`;

const IconCon = styled.div`
border: solid 8px #0570d6;
padding: 3%;
border-radius: 90px;
display: flex;
height: 180px;
min-width: 180px;
justify-content: center;
margin: 2%;
background-color: #c4c4c4;
`;

const Icon = styled.img`
margin: 0;
width: 100px;
height: 80px;
align-self: center;
`;

const MethodInfo = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    align-self: center;
    padding-left: 3%;
    color: #000;
`;

const ItemTitle = styled.div`
      font-size: 26px;
      font-weight: 700;
      width: 100%;
      text-align: left;
`;

const ItemInfo = styled.div`
    font-size: 24px;
    padding-top: 8px;
    height: 75%;
    font-weight: 300;
    text-align: left;
`;

const HowTo = styled.div`
    width: 90%;
    font-family: 'Lato', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 55px;
    padding-bottom: 55px;
`;

export {
    Container,
    List,
    ListItem,
    Goto,
    ListImg,
    Block,
    Info,
    Wrapper,
    Left,
    AboutInfo,
    AboutTitle,
    Right,
    Logo,
    Item, 
    IconCon,
    HowTo,  
    Icon,  
    MethodInfo, 
    ItemTitle, 
    ItemInfo,
}