import Education from "./Education";
import Footer from "./include/Footer";
import Navbar from "./include/Navbar";
import Spotlight from "./Spotlight";
import Works from "./Works";
import Skills from "./Skills";


function Home() {
  return (
    <>
      <Navbar />
      <Spotlight />
      <Education />
      <Skills />
      <Works />
      <Footer />
    </>
  );
}

export default Home;
