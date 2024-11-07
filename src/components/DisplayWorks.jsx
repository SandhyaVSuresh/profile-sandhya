import styled from "styled-components";
import Navbar from "../components/include/Navbar";
import data from "../components/data.json";
import { Link } from "react-router-dom";
import Footer from "./include/Footer";
const OverAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

const CountPara = styled.p`
  font-size: 1.8rem;
  color: #4a3461;
  font-weight: 600;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: #e3dbec;
  width: fit-content;
  margin: 20px auto 0;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2% 5%;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  background-color: #fff;
  color: #634682;
  width: 90%;
  max-width: 750px;
  padding: 20px;
  margin: 10px auto;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  gap: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ProjectPreview = styled.div`
  width: 100%;
  // max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const ProjectFrame = styled.iframe`
  border: none;
  width: 100%;
  height: 200px;
`;

const ProjectContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 800px) {
    text-align: center;
    align-items: center;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ProjectDetail = styled.p`
  font-size: 1rem;
  margin-bottom: 2px;
`;

const ProjectCode = styled.p`
font-size: 1rem;
  margin-bottom: 10px;
`;
const LinkToProject = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 5px 15px;
  background-color: #634682;
  border-radius: 50px;
  width: fit-content;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #e3dbec;
    color: #4a3461;
    font-weight: 600;
  }
`;

function DisplayWorks() {
  const count = data.length;
  return (
    <>
      <Navbar />
      <OverAll>
        <Container>
          <CountPara>Project count : {count}</CountPara>
          <Cards>
            {data.map((project, index) => (
              <ProjectCard key={index}>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDetail>{project.description}</ProjectDetail>
                  <ProjectCode>{project.code}</ProjectCode>
                  <LinkToProject to={project.link}>
                    Link to project
                  </LinkToProject>
                </ProjectContent>
                <ProjectPreview>
                  <ProjectFrame src={project.link} title="Website Preview" />
                </ProjectPreview>
              </ProjectCard>
            ))}
          </Cards>
        </Container>
      </OverAll>
      <Footer />
    </>
  );
}

export default DisplayWorks;
