import Fearures from "../components/Fearures";
import Hero from "../components/Hero";

const HomePage = ({ setShowVideo }) => {
  return (
    <>
      <Hero setShowVideo={setShowVideo} />
      <Fearures />
    </>
  );
};

export default HomePage;
