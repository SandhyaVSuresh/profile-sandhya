import Education from "./Education";
import Footer from "./include/Footer";
import Navbar from "./include/Navbar";
import Spotlight from "./Spotlight";
import Works from "./Works";

function Home() {
  return (
    <>
      <Navbar />
      <Spotlight />
      <Education />
      <Works />
      <Footer />
    </>
  );
}

export default Home;
