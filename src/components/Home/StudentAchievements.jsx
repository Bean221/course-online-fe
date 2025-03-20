import React from 'react'

const StudentAchievements = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Thành tích học viên</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 rounded shadow">
          <p>Học viên A: IELTS 7.5 sau 3 tháng</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <p>Học viên B: SAT 1400+</p>
        </div>
      </div>
    </section>
  )
}

export default StudentAchievements
