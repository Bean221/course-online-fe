import React from 'react'

const StudentTestimonials = () => {
  const testimonials = [
    { id: 1, name: 'Nguyễn Văn A', text: 'BeanLearn thật tuyệt vời...' },
    { id: 2, name: 'Trần Thị B', text: 'Môi trường học tập thân thiện...' },
  ]

  return (
    <section className="py-10 px-4 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">Chia sẻ của học viên</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {testimonials.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <p className="text-gray-700 italic">"{item.text}"</p>
            <p className="text-right font-semibold">- {item.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StudentTestimonials
