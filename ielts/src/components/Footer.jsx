<<<<<<< HEAD
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
=======
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>CheeseIELTS</h2>

        <p>
          Learn IELTS smarter, not harder.
        </p>

        <p>
          Free • Simple • No AI Slop
        </p>

        <div className="footer-links">
          <a href="#">Reading</a>
          <a href="#">Listening</a>
          <a href="#">Writing</a>
          <a href="#">Speaking</a>
          <a href="#">Vocabulary</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} CheeseIELTS. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
>>>>>>> 7ece047 (new)
