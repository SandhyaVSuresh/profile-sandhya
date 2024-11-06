import styled from "styled-components"
import img1 from "../../assets/gitIcon.svg"
import img2 from "../../assets/linkedin.svg"
import { Link } from "react-router-dom";

const FooterDiv = styled.div`
padding:1% 3%;
display:flex;
justify-content:space-between;
align-items:center;
color:#fff;
background: linear-gradient(91.7deg, rgb(50, 25, 79) -4.3%, rgb(122, 101, 149) 101.8%);
@media(max-width:550px){
display:flex;
flex-direction:column;
gap:.5rem;
}
`;

const Email = styled(Link)`
color:#fff;
 text-decoration:none;
font-weight:600;
 `;

const LinksImg = styled.div`
width:10%;
display:flex;
justify-content:space-around;
@media(max-width:550px){
width:60%;
}
@media(max-width:400px){
width:80%;
}
`;

const IconImg = styled.img``;

const IconLink = styled(Link)``;

const Copyright = styled.p`
font-weight:600;
color:#fff;
 `;
function Footer() {
  return (
    <FooterDiv>
        <Email to="mailto:sandhyavsuresh@gmail.com">sandhyavsuresh2001@gmail.com</Email>
        <LinksImg>
        <IconLink to="https://github.com/SandhyaVSuresh">
        <IconImg src={img1}/>
        </IconLink>
        <IconLink to="https://www.linkedin.com/in/sandhya-v-suresh-a98777216/">
        <IconImg src={img2}/>
        </IconLink>
        </LinksImg>
        <Copyright>&copy; 2024 All rights reserved</Copyright>
    </FooterDiv>
  )
}

export default Footer