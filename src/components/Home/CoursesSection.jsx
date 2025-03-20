import React from 'react'

const CoursesSection = () => {
  // Giả lập dữ liệu 3 khóa học
  const courses = [
    { id: 1, name: 'IELTS Intensive', desc: 'Khóa học luyện thi IELTS cấp tốc' },
    { id: 2, name: 'SAT Mastery', desc: 'Khóa học chuyên sâu SAT' },
    { id: 3, name: 'Kids English', desc: 'Tiếng Anh trẻ em' },
  ]

  return (
    <section className="py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Các khóa học</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-4 shadow rounded">
            <h3 className="font-semibold text-lg">{course.name}</h3>
            <p className="text-gray-600 mt-2">{course.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CoursesSection
