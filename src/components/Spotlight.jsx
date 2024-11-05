import styled, { keyframes } from "styled-components";
import img1 from "../assets/NinuImg.jpg";

// Animation for fade-in effect
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Animation for subtle gradient background movement
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled.div`
  width: 100%;
  background: linear-gradient(91.7deg, rgb(50, 25, 79) -4.3%, rgb(122, 101, 149) 101.8%);
  background-size: 200% 200%;
  color: #fff;
  height: auto;
  padding: 5% 0;
  border-bottom-right-radius: 80%;
  animation: ${gradientAnimation} 8s ease infinite;
  @media(max-width:700px){
  border-bottom-right-radius: 100%;
  }
`;
const MiniContainer = styled.div`
background-color:#fff;
  border-bottom-right-radius: 70%;
`;
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3% 5%;
  position: relative;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Text = styled.div`
  animation: ${fadeIn} 1.2s ease both;
  text-align: center;

  @media (min-width: 700px) {
    text-align: left;
    margin-left: 5%;
  }
`;

const Headingh1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 15px;
  animation: ${fadeIn} 1.4s ease both;

  @media (min-width: 700px) {
    font-size: 3rem;
  }
`;

const Headingh2 = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 15px;
  font-family: "Train One", system-ui;
  animation: ${fadeIn} 1.6s ease both;

  @media (min-width: 700px) {
    font-size: 2.5rem;
  }
`;

const Parap = styled.p`
  line-height: 20px;
  animation: ${fadeIn} 1.8s ease both;
  margin: 0 auto;
  max-width: 600px;

  @media (min-width: 700px) {
    line-height: 25px;
    text-align: left;
  }
`;

const ProfileImg = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  z-index: 20;
  transition: transform 0.5s ease;
  animation: ${fadeIn} 2s ease both;

  &:hover {
    transform: scale(1.05) rotate(5deg);
  }

  @media (min-width: 700px) {
    height: 350px;
    width: 350px;
  }

  @media (min-width: 1000px) {
    height: 400px;
    width: 400px;
  }
`;


function Spotlight() {
  return (
    <MiniContainer>
    <Container>
      <SubContainer>
        <Text>
          <Headingh1>Hi, I am</Headingh1>
          <Headingh2>Sandhya V Suresh</Headingh2>
          <Parap>
            Enthusiastic and motivated, known for being adaptable, a team player,
            and eager to learn. Experienced in creating dynamic projects, with a
            focus on contributing effectively in collaborative environments and
            continuously growing in my field.
          </Parap>
        </Text>
        <ProfileImg src={img1} />
      </SubContainer>
    </Container>
    </MiniContainer>
  );
}

export default Spotlight;
