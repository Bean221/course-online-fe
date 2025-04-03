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
    navigate(`/test/reading/${year}/${month}`);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full border border-green-300 rounded-lg p-5 shadow-sm bg-white
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
            className="w-20 h-20 object-cover rounded-full mr-6 border-4 border-green-400"
          />
        )}
        <h2 className="text-3xl font-bold text-gray-900">
          IELTS Reading Test {year}
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

const ReadingTest = () => {
  const navigate = useNavigate();
  // Dữ liệu tĩnh cho các năm từ 2021 đến 2025
  const [readingTestsData] = useState([
    {
      year: 2025,
      image: thithuImage,
      months: [
        { month: "January", testsTaken: "1,050,000" },
        { month: "February", testsTaken: "925,000" },
        { month: "March", testsTaken: "780,000" },
      ],
    },
    {
      year: 2024,
      image: thithuImage,
      months: [
        { month: "January", testsTaken: "912,536" },
        { month: "February", testsTaken: "1,023,145" },
        { month: "March", testsTaken: "856,234" },
        { month: "April", testsTaken: "587,634" },
        { month: "May", testsTaken: "674,231" },
        { month: "June", testsTaken: "943,211" },
        { month: "July", testsTaken: "792,345" },
        { month: "August", testsTaken: "584,367" },
        { month: "September", testsTaken: "385,246" },
      ],
    },
    {
      year: 2023,
      image: thithuImage,
      months: [
        { month: "January", testsTaken: "853,478" },
        { month: "February", testsTaken: "794,562" },
        { month: "March", testsTaken: "732,987" },
        { month: "April", testsTaken: "624,568" },
        { month: "May", testsTaken: "687,543" },
        { month: "June", testsTaken: "842,387" },
        { month: "July", testsTaken: "569,842" },
        { month: "August", testsTaken: "475,632" },
        { month: "September", testsTaken: "394,875" },
      ],
    },
    {
      year: 2022,
      image: thithuImage,
      months: [
        { month: "March", testsTaken: "714,563" },
        { month: "April", testsTaken: "623,471" },
        { month: "May", testsTaken: "742,365" },
        { month: "June", testsTaken: "798,235" },
        { month: "July", testsTaken: "568,472" },
        { month: "August", testsTaken: "498,327" },
        { month: "November", testsTaken: "362,451" },
        { month: "December", testsTaken: "324,968" },
      ],
    },
    {
      year: 2021,
      image: thithuImage,
      months: [
        { month: "April", testsTaken: "798,426" },
        { month: "May", testsTaken: "724,156" },
        { month: "June", testsTaken: "863,251" },
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
      textColor: "text-white",
      bgColor: "bg-green-600",
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
          <h1 className="text-4xl font-extrabold text-center text-green-700 mb-12">
            IELTS Reading Tests
          </h1>

          {/* Nội dung các năm */}
          {readingTestsData.length === 0 ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : (
            readingTestsData.map((testYear) => (
              <TestYearSection key={testYear.year} {...testYear} />
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReadingTest;