import Hero from "../components/Hero";

const HomePage = ({ setShowVideo }) => {
  return (
    <>
      <Hero setShowVideo={setShowVideo} />
      <Hero setShowVideo={setShowVideo} />
      <Hero setShowVideo={setShowVideo} />
      <Hero setShowVideo={setShowVideo} />
    </>
  );
};

export default HomePage;
