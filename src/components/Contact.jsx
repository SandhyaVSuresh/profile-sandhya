import Footer from "./include/Footer";
import Navbar from "./include/Navbar";
import styled from "styled-components";

const Container = styled.div`
  padding: 3% 7%;
  margin: auto;
  height: 67.5vh;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color:#fff;
  padding:10%;
  width: 80%;
  margin: 20px auto;
  border-radius: 50px;
`;

const ContactDeatis = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const Label = styled.label`
  font-size: 1.2rem;
  color: #4b0082;
`;
const InputTag = styled.input`
  padding: 0.5rem;
  border: 1px solid #4b0082;
  border-radius: 5px;
  width:40%;
`;

const TextAreaTag = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #4b0082;
  border-radius: 5px;
  width:40%;
  `;

function Contact() {
  return (
    <>
      <Navbar />
      <Container>
        <SubContainer>
          <ContactDeatis>
            <Label>E-mail</Label>
            <InputTag type="text" placeholder="E-mail"/>
          </ContactDeatis>
          <ContactDeatis>
            <Label>Message</Label>
            <TextAreaTag></TextAreaTag>
          </ContactDeatis>
        </SubContainer>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
