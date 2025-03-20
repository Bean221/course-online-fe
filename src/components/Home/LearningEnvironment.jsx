import React from 'react'

const LearningEnvironment = () => {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">Môi trường học</h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-700 mb-4">
          Hệ thống lớp học hiện đại, trang bị đầy đủ thiết bị, phòng lab...
        </p>
        {/* Thêm ảnh minh họa */}
        <img
          src="https://via.placeholder.com/600x300"
          alt="Learning Environment"
          className="mx-auto rounded"
        />
      </div>
    </section>
  )
}

export default LearningEnvironment
