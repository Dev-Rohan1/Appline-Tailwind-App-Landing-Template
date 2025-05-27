import About from "../components/About";
import AppScreenshot from "../components/AppScreenshot";
import Fearures from "../components/Fearures";
import Hero from "../components/Hero";
import HowItWork from "../components/HowItWork";
import Price from "../components/Price";

const HomePage = ({ setShowVideo }) => {
  return (
    <>
      <Hero setShowVideo={setShowVideo} />
      <Fearures />
      <About />
      <HowItWork />
      <Price />
      <AppScreenshot />
    </>
  );
};

export default HomePage;
