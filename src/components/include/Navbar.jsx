import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "emailjs-com";
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarDiv = styled.div`
  position: relative;
  background-color: #b099c8;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  color: #4a3461;
  width: 100%;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const LogoH1 = styled(Link)`
  font-size: 2rem;
  color: #4a3461;
  font-weight: 1000;
  text-decoration: none;
  padding-left: 5%;
`;

const Menuul = styled.ul`
  padding-right: 10px;
  display: flex;
  gap: 1.5rem;
  font-size: 1rem;
  margin-right: 3%;

  @media (max-width: 700px) {
    margin-right: 0;
    padding-top: 30px;
    flex-direction: column;
    background-color: #b099c8;
    position: absolute;
    top: 63px;
    right: 0;
    width: 50%;
    height: calc(100vh - 60px);
    align-items: center;
    gap: 2rem;
    opacity: ${({ open }) => (open ? "1" : "0")};
    transition: transform 0.3s ease;
    z-index: 100;
  }
`;

const Menuli = styled.li`
  list-style: none;
`;

const MenuA = styled(Link)`
  color: #4a3461;
  text-decoration: none;
  font-weight: 600;
  transition: font-size 0.2s ease, color 0.2s ease;

  &:hover {
    font-size: 1.2rem;
    color: #ffffff;
  }
`;

const DownloadButton = styled.a`
  color: #4a3461;
  text-decoration: none;
  font-weight: 600;
  padding: 5px 10px;
  border: 2px solid #4a3461;
  border-radius: 5px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #ffffff;
    color: #4a3461;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const MenuIcon = styled.div`
  padding-right: 5%;
  display: none;
  font-size: 1.8rem;
  color: #4a3461;
  cursor: pointer;

  @media (max-width: 700px) {
    display: block;
  }
`;

// Popup Styles
const Container = styled.div`
  margin-top: 10%;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2%;
  width: 100%;
  max-width: 500px;
  z-index: 1000;
  background-color: #b099c8;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const PopupHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #4a3461;
  padding-bottom: 10px;
`;

const PopupHeading = styled.h2`
  color: #4a3461;
  font-weight: 900;
  font-size: 1.5rem;
`;

const CloseButton = styled.button`
  color: #4a3461;
  font-weight: 900;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 5%;
  width: 90%;
  margin: 10px auto;
`;

const ContactDeatis = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 5px;
`;

const Label = styled.label`
  color: #4a3461;
  font-weight: 600;
  font-size: 1.2rem;
  width: 30%;
`;

const InputTag = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  width: 70%;
  outline: none;
`;

const TextAreaTag = styled.textarea`
  padding: 0.5rem;
  border-radius: 5px;
  width: 70%;
  outline: none;
`;

const SendButtonWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  width: 100%;
`;
const SendButton = styled.button`
  margin: auto;
  padding: 2%;
  border-radius: 50px;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  width: 30%;
  background: linear-gradient(
    91.7deg,
    rgb(50, 25, 79) -4.3%,
    rgb(122, 101, 149) 101.8%
  );
  border: none;
  cursor: pointer;
  &:hover {
    font-weight: 800;
  }
`;

const BlurOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

function Navbar() {
  const [open, setOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const toggleMenu = () => {
    setOpen(!open);
  };

  const clearFun = () => {
    setEmail("");
    setName("");
    setMessage("");
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_sb9u1nn",
        "template_03c9zmx",
        { email, message, name },
        "pM-zD9LAxs6NPJEim"
      )
      .then(() => {
        alert("Message sent successfully!");
        clearFun();
      });
  };

  return (
    <div>
      <NavbarDiv>
        <LogoH1 to="/">svs</LogoH1>
        <MenuIcon onClick={toggleMenu}>
          {open ? <FaTimes /> : <FaBars />}
        </MenuIcon>
        <Menuul open={open}>
          <Menuli>
            <MenuA to="/about" onClick={() => setOpen(false)}>
              Resume
            </MenuA>
          </Menuli>
          <Menuli>
            <MenuA to="/project" onClick={() => setOpen(false)}>
              Project
            </MenuA>
          </Menuli>
          <Menuli>
            <MenuA
              to="/"
              onClick={(e) => {
                e.preventDefault();
                setOpenPopup(true);
              }}
            >
              Contact
            </MenuA>
          </Menuli>
          <Menuli>
            <DownloadButton
              href="../assets/CV/sandhyavsuresh.pdf"
              download="Sandhya_VSuresh_CV"
            >
              Download CV
            </DownloadButton>
          </Menuli>
        </Menuul>
      </NavbarDiv>

      {openPopup && (
        <>
          <BlurOverlay onClick={() => setOpenPopup(false)} />
          <Container>
            <PopupHead>
              <PopupHeading>Contact me</PopupHeading>
              <CloseButton onClick={() => setOpenPopup(false)}>X</CloseButton>
            </PopupHead>
            <SubContainer>
              <form onSubmit={sendEmail}>
                <ContactDeatis>
                  <Label>Name</Label>
                  <InputTag
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                  />
                </ContactDeatis>
                <ContactDeatis>
                  <Label>Email</Label>
                  <InputTag
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Contact information"
                    required
                  />
                </ContactDeatis>
                <ContactDeatis>
                  <Label>Message</Label>
                  <TextAreaTag
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    required
                  />
                </ContactDeatis>
                <SendButtonWrapper>
                  <SendButton type="submit">Send</SendButton>
                </SendButtonWrapper>
              </form>
            </SubContainer>
          </Container>
        </>
      )}
    </div>
  );
}

export default Navbar;
