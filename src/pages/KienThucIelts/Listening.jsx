import React from "react";

// layout
import Header from "../../components/layout/Header";
import Footer from "../../components/Layout/Footer";
import Banner from "../../components/Home/Banner";
import ServicesGroup from "../../components/About/ServicesGroup";
import CenterSystem from "../../components/About/CenterSystem";
import RegistrationForm from "../../components/Home/RegistrationForm";
import StudentTestimonials from "../../components/Home/StudentTestimonials";
import TeacherTeam from "../../components/Home/TeacherTeam";
import LearningEnvironment from "../../components/Home/LearningEnvironment";
import PressMention from "../../components/Home/PressMention";

// Import form

// Import các section
export default function StudyAbroad() {
  return (
    <>
      <Banner />
      <ServicesGroup />
      <CenterSystem />
      <RegistrationForm />
      <StudentTestimonials />
      <TeacherTeam />
      <LearningEnvironment />
      <PressMention />
      <Header />
      <Footer />
    </>
  );
}
