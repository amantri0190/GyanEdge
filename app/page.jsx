import Header from "../components/publicpages/Header";
import Footer from "../components/publicpages/Footer";
import Page1 from "../components/publicpages/Page1";
import Course from "../components/publicpages/Course";
import About from "../components/publicpages/About";

export default function Home() {
  return (
    <div>
      <Header />
      <Page1 />
      <Course />
      <About />
      <Footer />
    </div>
  );
}
