import Image from "next/image";
import React from "react";
import { useState } from "react";
import { Award, CheckCircle, ChevronDown, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Collaboration = () => {
  const [selectedType, setSelectedType] = useState("offer-letter");
  const certificateData = {
    "offer-letter": {
      title: "Offer Letter",
      description:
        "When building a full-stack application with React and Node.js separately, the frontend and backend are usually in two separate folders. However, when using Next.js, it combines both frontend and backend logic under one framework, offering file-based routing and API handling out of the box.",
      imageSrc: "/certificate.png",
      icon: <FileText className="mr-2 h-4 w-4" />,
    },
    completion: {
      title: "Certificate of Completion",
      description:
        "This certificate acknowledges your successful completion of the required program and recognizes your dedication and hard work.",
      imageSrc: "/certificate.png",
      icon: <CheckCircle className="mr-2 h-4 w-4" />,
    },
    "best-performer": {
      title: "Best Performer Award",
      description:
        "In recognition of your outstanding performance and exceptional contribution to the team's success.",
      imageSrc: "/certificate.png",
      icon: <Award className="mr-2 h-4 w-4" />,
    },
  };

  const currentCertificate = certificateData[selectedType];

  return (
    <div className="overflow-hidden w-full py-4 mb-10">
      <p className="text-5xl text-center font-bold mb-20">OUR PARTNERS</p>
      <div className="infinite-scroll">
        {/* Repeat the images twice for seamless loop */}
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-4 gap-x-20 w-full items-center">
            <Image
              src="/nsdc.png"
              alt="Image 1"
              width={500}
              height={300}
              className="object-cover"
            />
            <Image
              src="/amazonaws.svg"
              alt="Image 1"
              width={500}
              height={300}
              className="object-cover"
            />
            <Image
              src="/skillindia.png"
              alt="Image 2"
              width={500}
              height={300}
              className="object-cover"
            />
            <Image
              src="/startupindia.png"
              alt="Image 3"
              width={500}
              height={300}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      {/* <div className="mt-20 flex justify-between">
        <div className="flex items-center justify-center">
          <Image
            src="/certificate.png"
            alt="Image 1"
            width={700}
            height={500}
            className="object-cover"
          />
        </div>
      </div> */}
      <div className="flex flex-col items-center p-8 mx-auto">
        {/* <h1 className="text-5xl font-bold mb-4 mt-10">CERTIFICATION</h1> */}
        <div className="mt-8 p-6 border rounded-lg w-full shadow-md">
          <div className="flex flex-col items-center">
            <div className="flex gap-x-4">
              <div className="text-center text-gray-700 flex flex-col gap-y-20 w-2/5">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="max-w-fit px-4 justify-between">
                      <span className="flex items-center">
                        {currentCertificate.icon}
                        {currentCertificate.title}
                      </span>
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[--radix-popover-trigger-width]">
                    <DropdownMenuItem
                      onClick={() => setSelectedType("offer-letter")}>
                      <FileText className="mr-2 h-4 w-4" />
                      Offer Letter
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setSelectedType("completion")}>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Completion
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem
                      onClick={() => setSelectedType("best-performer")}>
                      <Award className="mr-2 h-4 w-4" />
                      Best Performer
                    </DropdownMenuItem> */}
                  </DropdownMenuContent>
                </DropdownMenu>

                <p className="text-start">{currentCertificate.description}</p>
              </div>
              <div className="relative w-3/5 mb-6 bg-blue-500">
                <Image
                  src={currentCertificate.imageSrc || "/placeholder.svg"}
                  alt={currentCertificate.title}
                  width={700}
                  height={500}
                  className="w-full h-full object-contain rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
