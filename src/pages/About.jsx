import React from "react";
import Header from '../components/layout/Header'
import Footer from "../components/Layout/Footer";
import Banner from "../components/Home/Banner";
import RecruitmentForm from "../components/About/RecruitmentForm";
import CenterSystem from "../components/About/CenterSystem";
import ServicesGroup from "../components/About/ServicesGroup";
export default function About() {
  return (
    <>
      <Banner />
      <ServicesGroup />
      <CenterSystem />
      <RecruitmentForm />
      <Header />
      <Footer />
    </>
  );
}
