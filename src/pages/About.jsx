import React from "react";
import Header from '../components/layout/Header'
import Footer from "../components/Layout/Footer";
import Banner from "../components/Home/Banner";
import RecruitmentForm from "../components/About/RecruitmentForm";
import CenterSystem from "../components/About/CenterSystem";
import ServicesGroup from "../components/About/ServicesGroup";
import StudentAchievements from '../components/Home/StudentAchievements'
import StudentTestimonials from '../components/Home/StudentTestimonials'
import TeacherTeam from '../components/Home/TeacherTeam'
import LearningEnvironment from '../components/Home/LearningEnvironment'
import PressMention from '../components/Home/PressMention'
export default function About() {
  return (
    <>
      <Banner />
      <ServicesGroup />
      <CenterSystem />
      <RecruitmentForm />
      <StudentAchievements />
      <StudentTestimonials />
      <TeacherTeam />
      <LearningEnvironment />
      <PressMention />F
      <Header />
      <Footer />
    </>
  );
}
