import React from 'react'
import { useNavigate } from 'react-router-dom'
import bannerImg from '../../assets/banner.png'


const Banner = () => {
  const navigate = useNavigate()

  const handleScrollToForm = () => {
    // Tìm element có id="dang-ky-ngay"
    const formSection = document.getElementById('dang-ky-ngay')
    if (formSection) {
      // Cuộn mượt đến form
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-16 bg-[#E8F8FA] py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* ... Cột trái */}
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#274C4F] mb-2">
            Trung tâm Anh Ngữ
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">
            BeanLearn
          </h1>
          <ul className="space-y-2 mb-6 pl-4">
            <li className="list-disc text-gray-700">Mô hình học tiên phong University Lecture</li>
            <li className="list-disc text-gray-700">Nâng band cấp tốc chỉ sau 90 giờ học</li>
            <li className="list-disc text-gray-700">Chuyên đào tạo IELTS / SAT / Tiếng Anh Trẻ Em</li>
            <li className="list-disc text-gray-700">Cam kết chất lượng đầu ra</li>
          </ul>

          <div className="flex space-x-4">
            {/* Nút 1: Tìm hiểu khóa học */}
            <button
              onClick={() => navigate('/courses')}
              className="bg-[#4FC3F7] text-white px-5 py-2 rounded transition-all duration-300 
                         cursor-pointer hover:bg-[#42b0dd] hover:shadow-lg hover:scale-105 hover:-translate-y-1"
            >
              Tìm hiểu khóa học
            </button>
            {/* Nút 2: Nhận tư vấn -> Cuộn xuống form */}
            <button
              onClick={handleScrollToForm}
              className="bg-red-500 text-white px-5 py-2 rounded transition-all duration-300 
                         cursor-pointer hover:bg-red-600 hover:shadow-lg hover:scale-105 hover:-translate-y-1"
            >
              Nhận tư vấn
            </button>
          </div>
        </div>

        {/* Cột phải: Hình ảnh */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img src={bannerImg} alt="Banner" />
        </div>
      </div>
    </section>
  )
}

export default Banner
