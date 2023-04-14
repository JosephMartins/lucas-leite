import { Footer } from "../../components/layout/footer";
import AboutSection from "../home/about-section";
import { MainSection } from "../home/main-section";
import { PartnersSection } from "../home/partners-section";
import { Process } from "../home/process";
import ServicesSection from "../home/services-section";
import { WrapperMiddle } from "../home/styles";
import React from "react";
import { Header } from "../../components/layout/header";

export function Home() {
  return (
    <>
      <MainSection />
      <WrapperMiddle>
        <ServicesSection />
        <PartnersSection />
        <AboutSection />
      </WrapperMiddle>
      <Footer />
    </>
  );
}
