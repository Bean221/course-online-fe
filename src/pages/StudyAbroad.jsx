import React from 'react'

// layout
import Header from '../components/layout/Header'
import Footer from '../components/Layout/Footer'
import Banner from '../components/Home/Banner'
import ServicesGroup from '../components/About/ServicesGroup'
import CenterSystem from '../components/About/CenterSystem'
import RecruitmentForm from '../components/About/RecruitmentForm'


// Import form

// Import các section
export default function StudyAbroad() {
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
