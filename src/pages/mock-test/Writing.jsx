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
    navigate(`/test/writing/${year}/${month}`);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full border border-blue-300 rounded-lg p-5 shadow-sm bg-white
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
            className="w-20 h-20 object-cover rounded-full mr-6 border-4 border-blue-400"
          />
        )}
        <h2 className="text-3xl font-bold text-gray-900">
          IELTS Writing Test {year}
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

const WritingTest = () => {
  const navigate = useNavigate();
  // Dữ liệu tĩnh cho các năm từ 2021 đến 2025
  const [writingTestsData] = useState([
    {
      year: 2025,
      image: thithuImage,
      months: [
        { month: "January", testsTaken: "920,000" },
        { month: "February", testsTaken: "875,000" },
        { month: "March", testsTaken: "715,000" },
      ],
    },
    {
      year: 2024,
      image: thithuImage,
      months: [
        { month: "January", testsTaken: "876,534" },
        { month: "February", testsTaken: "925,476" },
        { month: "March", testsTaken: "823,156" },
        { month: "April", testsTaken: "543,278" },
        { month: "May", testsTaken: "654,789" },
        { month: "June", testsTaken: "912,456" },
        { month: "July", testsTaken: "762,534" },
        { month: "August", testsTaken: "567,892" },
        { month: "September", testsTaken: "376,124" },
      ],
    },
    {
      year: 2023,
      image: thithuImage,
      months: [
        { month: "January", testsTaken: "843,126" },
        { month: "February", testsTaken: "792,345" },
        { month: "March", testsTaken: "725,678" },
        { month: "April", testsTaken: "612,453" },
        { month: "May", testsTaken: "678,912" },
        { month: "June", testsTaken: "834,267" },
        { month: "July", testsTaken: "554,321" },
        { month: "August", testsTaken: "456,789" },
        { month: "September", testsTaken: "385,674" },
      ],
    },
    {
      year: 2022,
      image: thithuImage,
      months: [
        { month: "March", testsTaken: "704,356" },
        { month: "April", testsTaken: "612,487" },
        { month: "May", testsTaken: "732,145" },
        { month: "June", testsTaken: "789,456" },
        { month: "July", testsTaken: "567,321" },
        { month: "August", testsTaken: "478,123" },
        { month: "November", testsTaken: "356,784" },
        { month: "December", testsTaken: "312,456" },
      ],
    },
    {
      year: 2021,
      image: thithuImage,
      months: [
        { month: "April", testsTaken: "785,426" },
        { month: "May", testsTaken: "712,358" },
        { month: "June", testsTaken: "854,217" },
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
      textColor: "text-white",
      bgColor: "bg-blue-600",
    },
    {
      name: "Speaking",
      path: "/mock-test/speaking",
      icon: <FaMicrophone className="mr-2" />,
      hoverColor: "hover:bg-purple-600",
      borderColor: "border-purple-600",
      textColor: "text-purple-600",
      bgColor: "",
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
          <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-12">
            IELTS Writing Tests
          </h1>

          {/* Nội dung các năm */}
          {writingTestsData.length === 0 ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : (
            writingTestsData.map((testYear) => (
              <TestYearSection key={testYear.year} {...testYear} />
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WritingTest;