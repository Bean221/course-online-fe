import React from 'react'

const TeacherTeam = () => {
  const teachers = [
    { id: 1, name: 'John Smith', expertise: 'IELTS Speaking' },
    { id: 2, name: 'Jane Doe', expertise: 'SAT Math' },
  ]

  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Đội ngũ giảng viên</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {teachers.map((t) => (
          <div key={t.id} className="bg-gray-100 p-4 rounded shadow">
            <h3 className="font-semibold">{t.name}</h3>
            <p className="text-gray-600">Chuyên môn: {t.expertise}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeacherTeam
