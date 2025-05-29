import About from "../components/About";
import AppScreenshot from "../components/AppScreenshot";
import ClientSay from "../components/ClientSay";
import Download from "../components/Download";
import Faq from "../components/faq";
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
      <Download />
      <ClientSay />
      <Faq />
    </>
  );
};

export default HomePage;
