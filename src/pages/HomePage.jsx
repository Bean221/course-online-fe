import React from 'react'

// layout 

import Header from '../components/layout/Header'
import Footer from '../components/Layout/Footer'

// Import các section
import Banner from '../components/Home/Banner'
import BeanStory from '../components/Home/BeanStory'
import UniquePoints from '../components/Home/UniquePoints'
import CoursesSection from '../components/Home/CoursesSection'
import ReasonSolution from '../components/Home/ReasonSolution'
import RegistrationForm from '../components/Home/RegistrationForm'
import StudentAchievements from '../components/Home/StudentAchievements'
import StudentTestimonials from '../components/Home/StudentTestimonials'
import TeacherTeam from '../components/Home/TeacherTeam'
import LearningEnvironment from '../components/Home/LearningEnvironment'
import PressMention from '../components/Home/PressMention'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <BeanStory />
      <UniquePoints />
      <CoursesSection />
      <ReasonSolution />
      <RegistrationForm />
      <StudentAchievements />
      <StudentTestimonials />
      <TeacherTeam />
      <LearningEnvironment />
      <PressMention />
      <Footer />
    </div>
  )
}

export default HomePage
