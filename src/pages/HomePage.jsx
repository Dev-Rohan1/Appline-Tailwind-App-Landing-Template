import About from "../components/About";
import Fearures from "../components/Fearures";
import Hero from "../components/Hero";

const HomePage = ({ setShowVideo }) => {
  return (
    <>
      <Hero setShowVideo={setShowVideo} />
      <Fearures />
      <About />
    </>
  );
};

export default HomePage;
