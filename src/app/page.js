import AboutMe from "./_components/About";
import Blogs from "./_components/Blogs";
import ContactUs from "./_components/Contact";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import Specialities from "./_components/Specialities";
import Testimonial from "./_components/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Specialities />
      <Projects />
      <Blogs />
      <Testimonial />
      <ContactUs />
    </>
  );
}
