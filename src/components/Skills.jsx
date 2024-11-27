import styled from "styled-components";
import bootstrap from "../assets/skillLogo/bootstrap.png"
import css from "../assets/skillLogo/css3.png"
import flask from "../assets/skillLogo/flask.png"
import html5 from "../assets/skillLogo/html5.png"
import python from "../assets/skillLogo/Python.png"
import reactjs from "../assets/skillLogo/reactjs.png"
import sass from "../assets/skillLogo/sass.png"
import sql from "../assets/skillLogo/sql.png"

const Container = styled.div`
  padding: 30px 7%;
  background-color: #fff;
`;
const Section = styled.div`
  margin: 40px 0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e3dbec;

  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

//   &:hover {
//     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
//     transition: box-shadow 0.3s ease;
//   }
`;

const HeadingDiv = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  width: 100%;
`;
const LineDiv = styled.div`
  width: 10px;
  height: 45px;
  border-radius: 15px;
  background: linear-gradient(
    76.8deg,
    rgb(121, 45, 129) 3.6%,
    rgb(36, 31, 98) 90.4%
  );
`;
const Headh3 = styled.h3`
  color: #4b0082;
  font-size: 2rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContentDiv = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  // align-items:center;
  // justify-content: center;
  gap: 1.5rem;
`;
const Skillul = styled.ul`
  padding-left: 30px;
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const Skillli = styled.li`
  color: #fff;
  font-weight: 800;
  border-radius: 10%;
  font-size: 1.1rem;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background: linear-gradient(91.7deg, rgb(50, 25, 79) -4.3%, rgb(122, 101, 149) 101.8%);
  position: relative;
  transition: background 0.3s ease;

  img {
  position: absolute;
    display: none;
    width: 60px;
    height: 60px;
  }

  &:hover {
    color: transparent;
    
    img {
      display: block;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
function Skills() {
  return (
    <Container>
    <Section>
          <HeadingDiv>
            <LineDiv></LineDiv>
            <Headh3>Skills</Headh3>
          </HeadingDiv>
          <ContentDiv>
            <Skillul>
              <Skillli><img src={html5} alt="HTML" />HTML</Skillli>
              <Skillli><img src={css} alt="HTML" />CSS</Skillli>
              <Skillli><img src={bootstrap} alt="HTML" />Bootstrap</Skillli>
              <Skillli><img src={reactjs} alt="HTML" />React JS</Skillli>
              <Skillli><img src={sass} alt="HTML" />SASS</Skillli>
              <Skillli><img src={sql} alt="HTML" />SQL</Skillli>
              <Skillli><img src={python} alt="HTML" />Python</Skillli>
              <Skillli><img src={flask} alt="HTML" />Flask</Skillli>
            </Skillul>
          </ContentDiv>
        </Section>
        </Container>
  )
}

export default Skills