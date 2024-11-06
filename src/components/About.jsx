import Footer from "./include/Footer";
import Navbar from "./include/Navbar";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  padding: 5%;
  margin: auto;
  max-width: 1200px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #4b0082;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
    @media (max-width: 400px) {
    font-size: 1.7rem;
  margin-bottom: .9rem;
  }
`;

const Paragraph = styled.p`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #5f4b8b;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin: 40px 0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: #e3dbec;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;
  }
`;

const HeadingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Headh3 = styled.h3`
  color: #4b0082;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContentDiv = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const DetailsDiv = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const DegreeName = styled.h4`
  color: #4b0082;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CollegeName = styled.p`
  font-size: 1rem;
  color: #5f4b8b;
`;

// const Marks = styled.p`
//   font-size: 0.9rem;
//   color: #5f4b8b;
// `;

const Skillul = styled.ul`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Skillli = styled.li`
  color: #4b0082;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Spanp = styled.span`
  color: #4b0082;
  font-size: 1rem;
  margin-right: 1rem;
  font-weight: 600;
`;

function About() {
  const edu = [
    {
      degree: "Master of Computer Application",
      college: "Sarah Tucker College (Autonomous) Tirunelveli",
      marks: "81",
    },
    {
      degree: "Bachelor of Computer Application",
      college: "Auxilium College (Autonomous) Vellore",
      marks: "70",
    },
    {
      degree: "Higher Secondary (Computer Science)",
      college: "St. Joseph of Cluny Matric Hr. Sec. School Tindivanam.",
      marks: "63.5",
    },
  ];

  return (
    <>
      <Navbar />
      <Container>
        <Heading>Resume</Heading>
        <Paragraph>
          Hello! I am a passionate and motivated individual known for being
          adaptable, a team player, and eager to learn. <br />
          Experienced in creating dynamic projects, with a focus on contributing
          effectively in collaborative <br />
          environments and continuously growing in my field.
        </Paragraph>
        <Section>
          <HeadingDiv>
            <Headh3>Education</Headh3>
          </HeadingDiv>
          <ContentDiv>
            {edu.map((item, index) => (
              <DetailsDiv key={index}>
                <DegreeName>{item.degree}</DegreeName>
                <CollegeName>{item.college}</CollegeName>
                {/* <Marks>{item.marks}</Marks> */}
                <div
                  className="radial-progress text-purple-900"
                  style={{ "--value": item.marks }}
                  role="progressbar"
                >
                  {item.marks}%
                </div>
              </DetailsDiv>
            ))}
          </ContentDiv>
        </Section>
        <Section>
          <HeadingDiv>
            <Headh3>Skills</Headh3>
          </HeadingDiv>
          <ContentDiv>
            <Skillul>
              <Skillli>
                <Spanp>→</Spanp> HTML
              </Skillli>
              <Skillli>
                <Spanp>→</Spanp> CSS
              </Skillli>
              <Skillli>
                <Spanp>→</Spanp> React JS
              </Skillli>
              <Skillli>
                <Spanp>→</Spanp> SASS
              </Skillli>
              <Skillli>
                <Spanp>→</Spanp> Python
              </Skillli>
              <Skillli>
                <Spanp>→</Spanp> Flask
              </Skillli>
            </Skillul>
          </ContentDiv>
        </Section>
      </Container>
      <Footer />
    </>
  );
}

export default About;
