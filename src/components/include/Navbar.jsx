import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarDiv = styled.div`
  background-color: #b099c8;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  color: #4a3461;
  width: 100%;
  align-items: center;
  position: relative;
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

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
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
        {/* <Menuli>
          <MenuA to="/contact" onClick={() => setOpen(false)}>
            Contact
          </MenuA>
        </Menuli> */}
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
  );
}

export default Navbar;
