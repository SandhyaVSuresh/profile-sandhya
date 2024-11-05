import styled from "styled-components";
import data from "./data.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 3% 7%;
  background-color: #fff;
`;

const HeadDiv = styled.div`
  gap: 0.5rem;
  padding-top: 10px;
  display: flex;
  align-items: center;
`;

const LineDiv = styled.div`
  width: 10px;
  height: 45px;
  border-radius: 15px;
  background: linear-gradient(76.8deg, rgb(121, 45, 129) 3.6%, rgb(36, 31, 98) 90.4%);
`;

const HeadH2 = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #634682;
`;

const ProjectDiv = styled.div`
  padding-bottom: 10px;
`;

const ProjectItems = styled.div`
  margin: 20px 10px;
  background-color: #e3dbec;
  padding: 5%;
  border-radius: 10px;
  width: 220px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: transform 0.3s, box-shadow 0.3s; 
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(121, 45, 129, 0.3);
  }
`;

const ProjectImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
`;

const ProjectContent = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ProjectTitle = styled.h3`
  color: #4a3461;
  font-weight: 800;
  font-size: 1.5rem;
  margin: 0; 
`;

const ProjectDis = styled.p`
  color: #4a3461;
  margin: 0; 
  font-size: 0.9rem; 
`;

const ProjectLink = styled(Link)`
  width: fit-content;
  border-radius: 50px;
  padding: 10px 20px;
  background-color: #9678b6;
  color: #4a3461;
  font-size: 0.9rem;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #7f63a0;
    color: #fff;
  }
`;

const SlideDiv = styled(Carousel)`
padding:10px 8%;
`;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1500 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1500, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Works() {
  const getImage = (imgName) => {
    return new URL(`../assets/${imgName}`, import.meta.url).href;
  };

  return (
    <Container>
      <HeadDiv>
        <LineDiv />
        <HeadH2>Projects</HeadH2>
      </HeadDiv>
      <ProjectDiv>
        <SlideDiv
          swipeable={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          containerClass="carousel-container"
          itemClass="carousel-item"
          dotListClass="carousel-dots"
          partialVisible={true}
          keyBoardControl={true}
        >
          {data.map((item) => (
            <ProjectItems key={item.id}>
              <ProjectImg src={getImage(item.img)} alt={item.title} />
              <ProjectContent>
                <ProjectTitle>{item.title}</ProjectTitle>
                <ProjectDis>{item.code}</ProjectDis>
                <ProjectLink to={item.link}>Link to Project →</ProjectLink>
              </ProjectContent>
            </ProjectItems>
          ))}
        </SlideDiv>
      </ProjectDiv>
    </Container>
  );
}

export default Works;
