import Header from "@/components/publicpages/Header";
import Footer from "@/components/publicpages/Footer";
import Page1 from "@/components/publicpages/Page1";
import Course from "@/components/publicpages/Course";
import Testimonial from "@/components/publicpages/Testimonial";

export default function Home() {
  return (
    <div>
      <Header />
      <Page1 /> 
      <Course/>
      <Testimonial/>
      <Footer />
    </div>
  );
}
