import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />

      <section
        className="
          grid
          md:grid-cols-3
          gap-6
          max-w-6xl
          mx-auto
          py-16
          px-6
        "
      >
        <Card
          title="IELTS Library"
          text="Reading & Listening answers with evidence"
        />

        <Card
          title="IELTS Arena"
          text="Compete with friends"
        />

        <Card
          title="AI Checker"
          text="Improve Writing and Speaking"
        />
      </section>

      <Footer />
    </>
  );
}

export default HomePage;