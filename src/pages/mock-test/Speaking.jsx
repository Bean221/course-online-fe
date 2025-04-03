import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeadphones, FaBook, FaPen, FaMicrophone } from "react-icons/fa";

// Import Header & Footer theo đường dẫn có sẵn
import Header from "../../components/layout/Header";
import Footer from "../../components/Layout/Footer";
import thithuImage from "../../assets/thithu.png";

// Component hiển thị nút bài test của từng tháng
const TestCard = ({ month, testsTaken, year }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/test/speaking/${year}/${month}`);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full border border-purple-300 rounded-lg p-5 shadow-sm bg-white
                 hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300
                 text-gray-800 text-left cursor-pointer"
    >
      <h3 className="font-semibold text-xl mb-2">{month}</h3>
      <p className="text-sm text-gray-500">{testsTaken} tests taken</p>
    </button>
  );
};

// Component hiển thị block của từng năm
const TestYearSection = ({ year, image, months }) => {
  return (
    <div className="bg-white p-8 rounded-xl mb-10 shadow-lg border border-gray-200">
      <div className="flex items-center mb-6">
        {image && (
          <img
            src={image}
            alt={`Cover ${year}`}
            className="w-20 h-20 object-cover rounded-full mr-6 border-4 border-purple-400"
          />
        )}
        <h2 className="text-3xl font-bold text-gray-900">
          IELTS Speaking Test {year}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {months.map((item, index) => (
          <TestCard
            key={index}
            month={item.month}
            testsTaken={item.testsTaken}
            year={year}
          />
        ))}
      </div>
    </div>
  );
};

const SpeakingTest = () => {
  const navigate = useNavigate();
  // Dữ liệu tĩnh cho các năm từ 2021 đến 2025
  const [speakingTestsData] = useState([
    {
      year: 2025,
      image: thithuImage,
      months: [
        { month: "January", testsTaken: "890,000" },
        { month: "February", testsTaken: "810,000" },
        { month: "March", testsTaken: "680,000" },
      ],
    },
    {
      year: 2024,
      image: thithuImage,
      months: [
        { month: "January", testsTaken: "834,289" },
        { month: "February", testsTaken: "917,345" },
        { month: "March", testsTaken: "795,124" },
        { month: "April", testsTaken: "524,765" },
        { month: "May", testsTaken: "634,215" },
        { month: "June", testsTaken: "878,543" },
        { month: "July", testsTaken: "725,489" },
        { month: "August", testsTaken: "543,216" },
        { month: "September", testsTaken: "365,781" },
      ],
    },
    {
      year: 2023,
      image: thithuImage,
      months: [
        { month: "January", testsTaken: "824,543" },
        { month: "February", testsTaken: "764,218" },
        { month: "March", testsTaken: "698,765" },
        { month: "April", testsTaken: "587,432" },
        { month: "May", testsTaken: "652,198" },
        { month: "June", testsTaken: "823,459" },
        { month: "July", testsTaken: "542,876" },
        { month: "August", testsTaken: "432,567" },
        { month: "September", testsTaken: "365,219" },
      ],
    },
    {
      year: 2022,
      image: thithuImage,
      months: [
        { month: "March", testsTaken: "687,459" },
        { month: "April", testsTaken: "598,723" },
        { month: "May", testsTaken: "714,365" },
        { month: "June", testsTaken: "763,289" },
        { month: "July", testsTaken: "541,867" },
        { month: "August", testsTaken: "467,324" },
        { month: "November", testsTaken: "346,217" },
        { month: "December", testsTaken: "307,546" },
      ],
    },
    {
      year: 2021,
      image: thithuImage,
      months: [
        { month: "April", testsTaken: "765,321" },
        { month: "May", testsTaken: "698,543" },
        { month: "June", testsTaken: "835,768" },
      ],
    },
  ]);

  // Mảng các nút điều hướng kỹ năng với icon
  const skills = [
    {
      name: "Listening",
      path: "/mock-test/listening",
      icon: <FaHeadphones className="mr-2" />,
      hoverColor: "hover:bg-red-600",
      borderColor: "border-red-600",
      textColor: "text-red-600",
      bgColor: "",
    },
    {
      name: "Reading",
      path: "/mock-test/reading",
      icon: <FaBook className="mr-2" />,
      hoverColor: "hover:bg-green-600",
      borderColor: "border-green-600",
      textColor: "text-green-600",
      bgColor: "",
    },
    {
      name: "Writing",
      path: "/mock-test/writing",
      icon: <FaPen className="mr-2" />,
      hoverColor: "hover:bg-blue-600",
      borderColor: "border-blue-600",
      textColor: "text-blue-600",
      bgColor: "",
    },
    {
      name: "Speaking",
      path: "/mock-test/speaking",
      icon: <FaMicrophone className="mr-2" />,
      hoverColor: "hover:bg-purple-600",
      borderColor: "border-purple-600",
      textColor: "text-white",
      bgColor: "bg-purple-600",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Thanh công cụ: gồm nút "All" và 4 kỹ năng nằm trên cùng một hàng với Grid */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-2 justify-center mb-12">
            {/* Nút "All" với icon */}
            <button
              onClick={() => navigate("/mock-test")}
              className="flex items-center px-4 py-1 border border-indigo-600 text-indigo-600 rounded-full 
               shadow hover:shadow-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 cursor-pointer text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h18M3 6h18M3 18h18"
                />
              </svg>
              <span>All</span>
            </button>
            {/* Các nút khác */}
            {skills.map((skill, index) => (
              <button
                key={index}
                onClick={() => navigate(skill.path)}
                className={`flex items-center px-4 py-1 rounded-full border ${skill.borderColor} ${skill.bgColor ? skill.bgColor : ""} ${skill.textColor} 
                  transition-all duration-300 cursor-pointer ${skill.hoverColor} hover:text-white text-sm`}
              >
                {skill.icon}
                {skill.name}
              </button>
            ))}
          </div>

          {/* Tiêu đề chính */}
          <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-12">
            IELTS Speaking Tests
          </h1>

          {/* Nội dung các năm */}
          {speakingTestsData.length === 0 ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : (
            speakingTestsData.map((testYear) => (
              <TestYearSection key={testYear.year} {...testYear} />
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpeakingTest;