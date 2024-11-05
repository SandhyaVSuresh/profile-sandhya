import styled from "styled-components";

const Container = styled.div`
  padding: 30px 7%;
  background-color: #fff;
`;

const HeadDiv = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  padding-bottom:20px;
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

const HeadH2 = styled.h2`
  font-size: 2rem;
  color: #634682;
`;

const EducationDiv = styled.div`
  margin-top: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const EducationItem = styled.div`
  padding: 2%;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 #b099c8, 0 6px 20px 0 #4a3461;
  width: 38vw;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  @media (max-width: 1191px) {
    height: 28vh;
  }
  @media (max-width: 549px) {
    height: 28vh;
    width:90vw;
  }
    @media (max-width: 350px) {
    height: 30vh;
    width:90vw;
  }
`;

const EducationTitle = styled.h3`
  font-size: 1.5rem;
  color: #634682;
  @media (max-width: 1191px) {
    font-size: 1.2rem;
  }
    @media (max-width: 550px) {
    font-size: 1.1rem;
  }
`;

const EducationDetail = styled.h3`
  color: #9678b6;
  font-size: 1.3rem;
  @media (max-width: 1191px) {
    font-size: 1rem;
  }
    @media (max-width: 550px) {
    font-size: .8rem;
  }
`;

const Marks = styled.p`
  font-size: 1rem;
  color: #634682;
  font-weight: 600;
  @media (max-width: 1191px) {
    font-size: 0.8rem;
  }
    @media (max-width: 550px) {
    font-size: .7rem;
  }
`;

function Education() {
  return (
    <Container>
      <HeadDiv>
        <LineDiv></LineDiv>
        <HeadH2>Education</HeadH2>
      </HeadDiv>
      <EducationDiv>
        <EducationItem>
          <EducationTitle>Master of Computer Application</EducationTitle>
          <EducationDetail>
            Sarah Tucker College College (Autonomous) <br />
            Tirunelveli
          </EducationDetail>
          <Marks>CGPA - 8.198</Marks>
        </EducationItem>
        <EducationItem>
          <EducationTitle>Bachelor of Computer Application</EducationTitle>
          <EducationDetail>
            Auxilium College (Autonomous) <br />
            Vellore
          </EducationDetail>
          <Marks>CGPA - 7.02</Marks>
        </EducationItem>
        <EducationItem>
          <EducationTitle>Higher secondary (Computer Science)</EducationTitle>
          <EducationDetail>
            St.Joseph of Cluny Matric Hr.Sec. school <br />
            Tindivanam.
          </EducationDetail>
          <Marks>Percentage - 63.5%</Marks>
        </EducationItem>
      </EducationDiv>
    </Container>
  );
}

export default Education;
