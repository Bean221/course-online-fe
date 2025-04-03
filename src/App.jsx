import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import CoursesPage from "./pages/courses/CoursesPage";
import IeltsPage from "./pages/courses/IeltsPage";
import SatPage from "./pages/courses/SatPage";
import KidsPage from "./pages/courses/KidsPage";
import SpeakingTest from "./pages/mock-test/Speaking";
import WritingTest from "./pages/mock-test/Writing";
import ListeningTest from "./pages/mock-test/Listening";
import ReadingTest from "./pages/mock-test/Reading";
import StudyAbroad from "./pages/StudyAbroad";
import MockTest from "./pages/mock-test/MockTest";
import RegisterIELTS from "./pages/mock-test/RegisterIELTS";
import KienThucIeltsHome from "./pages/KienThucIelts";
import Speaking from "./pages/KienThucIelts/Speaking";
import Writing from "./pages/KienThucIelts/Writing";
import Listening from "./pages/KienThucIelts/Listening";
import Reading from "./pages/KienThucIelts/Reading";
import SatMath from "./pages/KienThucIelts/SatMath";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import History from "./pages/History";


function App() {
  return (
    <Routes>
      <Route path="/history" element={<History />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />}>
        <Route path="ielts" element={<IeltsPage />} />
        <Route path="sat" element={<SatPage />} />
        <Route path="kids" element={<KidsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      {/* Trang Về BeanLearn */}
      <Route path="/about" element={<About />} />

      {/* Trang đăng ký */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* 4 kỹ năng con */}
      <Route path="/mock-test" element={<MockTest />} />
      <Route path="/mock-test/speaking" element={<SpeakingTest />} />
      <Route path="/mock-test/writing" element={<WritingTest />} />
      <Route path="/mock-test/listening" element={<ListeningTest />} />
      <Route path="/mock-test/reading" element={<ReadingTest />} />
      <Route path="/mock-test/RegisterIELTS" element={<RegisterIELTS />} />
      {/* Trang Tư Vấn Du Học */}
      <Route path="/study-abroad" element={<StudyAbroad />} />

      {/* Kiến Thức IELTS tổng quát */}
      <Route path="/ielts-knowledge" element={<KienThucIeltsHome />} />
      {/* 4 trang IELTS + 1 trang SAT Math */}
      <Route path="/ielts-knowledge/speaking" element={<Speaking />} />
      <Route path="/ielts-knowledge/writing" element={<Writing />} />
      <Route path="/ielts-knowledge/listening" element={<Listening />} />
      <Route path="/ielts-knowledge/reading" element={<Reading />} />
      <Route path="/ielts-knowledge/sat" element={<SatMath />} />
      {/* Trang Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Trang Cá Nhân */}
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
