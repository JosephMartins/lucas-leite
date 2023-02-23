import { Footer } from "@/components/layout/footer";
import AboutSection from "@/views/home/about-section";
import { MainSection } from "@/views/home/main-section";
import { PartnersSection } from "@/views/home/partners-section";
import { Process } from "@/views/home/process";
import ServicesSection from "@/views/home/services-section";
import { WrapperMiddle } from "@/views/home/styles";
import React from "react";

export function Home() {
  return (
    <>
      <MainSection />
      <WrapperMiddle>
        <ServicesSection />
        <Process />
        <PartnersSection />
        <AboutSection />
      </WrapperMiddle>
      <Footer />
    </>
  );
}
