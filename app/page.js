import { Card, CardContent } from "@/components/ui/card";
import { FaShoppingCart, FaVideo, FaBook, FaUser, FaClipboardCheck, FaCertificate, FaMicrosoft, FaChartLine } from "react-icons/fa";
import { SiNetapp } from "react-icons/si";

const companies = [
  { name: "Google", logo: null },
  { name: "Microsoft", logo: <FaMicrosoft /> },
  { name: "Eventbrite", logo: null },
  { name: "Nasdaq", logo: <FaChartLine /> },
  { name: "NetApp", logo: <SiNetapp /> },
];

const steps = [
  { icon: <FaShoppingCart />, title: "Purchase a course", description: "Aenean semper malada augue et congue. Fusce consect etur." },
  { icon: <FaVideo />, title: "Get videos & resources", description: "Praesent eu dolor eu orci demo vehicula euismod. Vivamus sed." },
  { icon: <FaBook />, title: "Get lessons & homeworks", description: "Etiam facilisis ligula nec veliter posuere egestas. Nunc dictum." },
  { icon: <FaUser />, title: "Q&A with the mentor", description: "Ornare non ante sed, ultricies fringilla massa. Ut congue, elit." },
  { icon: <FaClipboardCheck />, title: "Online test & reporting", description: "Lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula." },
  { icon: <FaCertificate />, title: "Get your certificate", description: "Mauris neque nisi, faucibus non elementum in, convallis et eros." },
];

export default function CoursePage() {
  return (
    <div className="flex flex-col items-center p-6 w-full">
      <h2 className="text-xl md:text-2xl font-semibold text-center">
        Recognised by 100+ companies & institutions
      </h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 opacity-50 my-4">
        {companies.map((company, index) => (
          <span key={index} className="flex items-center gap-1 text-sm md:text-base text-gray-500">
            {company.logo && <span className="text-xs opacity-60">{company.logo}</span>}
            {company.name}
          </span>
        ))}
      </div>
      <div className="bg-purple-100 rounded-lg p-6 w-full max-w-4xl">
        <h3 className="text-lg md:text-xl font-bold text-center">How it works?</h3>
        <p className="text-center text-gray-600 mb-6 text-sm md:text-base">Sed consequat orci quis viverra blandit. Integer tempus, justo ac feugiat.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((step, index) => (
            <Card key={index} className="flex flex-col sm:flex-row items-center p-4">
              <div className="text-purple-600 text-2xl sm:text-3xl mr-0 sm:mr-4 mb-2 sm:mb-0">{step.icon}</div>
              <CardContent className="text-center sm:text-left">
                <h4 className="font-semibold text-sm md:text-base">{index + 1}) {step.title}</h4>
                <p className="text-xs md:text-sm text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
