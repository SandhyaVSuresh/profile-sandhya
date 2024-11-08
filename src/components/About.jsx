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
    margin-bottom: 0.9rem;
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
  margin-bottom: 1rem;

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
const ContentDivCer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
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

const DetailsDivCer = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #fff;
  padding: 2%;
  border-radius: 8px;
  text-align: center;
  align-items: center;
  width: 100%;
`;

const CerLink = styled.a`
  font-size: 0.9rem;
  color: #5f4b8b;
  text-decoration: none;
  margin-bottom: 0.5rem;
`;

const Skillul = styled.ul`
  padding-left: 30px;
  display: flex;
  // flex-direction: column;
  flex-wrap:wrap;
  gap: 0.8rem;
`;

const Skillli = styled.li`
  // color: #4b0082;
  color:#fff;
  font-weight:800;
  border-radius:100%;
  font-size: 1.1rem;
  width:100px;
  height:100px;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:auto;
  background: linear-gradient(91.7deg, rgb(50, 25, 79) -4.3%, rgb(122, 101, 149) 101.8%);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// const Spanp = styled.span`
//   color: #4b0082;
//   font-size: 1rem;
//   margin-right: 1rem;
//   font-weight: 600;
// `;

const ProjectPreview = styled.div`
  width: 40%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-top: 1rem;
`;

const ProjectFrame = styled.img`
  border: none;
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

  const cer = [
    {
      name: "Progressive Web Apps from Steyp",
      cerLink: "/Certificate/Sandhya VSureshPWA.png",
    },
    {
      name: "Python - Complete Python Course from Steyp",
      cerLink: "/Certificate/Sandhya VSureshPython.png",
    },
    {
      name: "React: Complete Development Guide from Steyp",
      cerLink: "/Certificate/Sandhya VSureshReact.png",
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
                {/* <Spanp>→</Spanp>  */}
                HTML
              </Skillli>
              <Skillli>
                {/* <Spanp>→</Spanp>  */}
                CSS
              </Skillli>
              <Skillli>
                {/* <Spanp>→</Spanp>  */}
                React JS
              </Skillli>
              <Skillli>
                {/* <Spanp>→</Spanp> */}
                 SASS
              </Skillli>
              <Skillli>
                {/* <Spanp>→</Spanp> */}
                 Python
              </Skillli>
              <Skillli>
                {/* <Spanp>→</Spanp> */}
                 Flask
              </Skillli>
            </Skillul>
          </ContentDiv>
        </Section>

        <Section>
          <HeadingDiv>
            <Headh3>Certificate</Headh3>
          </HeadingDiv>
          <ContentDivCer>
            {cer.map((item, index) => (
              <DetailsDivCer key={index}>
                <DegreeName>{item.name}</DegreeName>
                <CerLink href={item.cerLink}>View Certificate</CerLink>
                <ProjectPreview>
                  <ProjectFrame
                    src={item.cerLink}
                    title="Certificate Preview"
                  />
                </ProjectPreview>
              </DetailsDivCer>
            ))}
          </ContentDivCer>
        </Section>
      </Container>
      <Footer />
    </>
  );
}

export default About;
