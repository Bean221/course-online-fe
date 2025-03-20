// RegistrationForm.jsx
import React, { useState } from 'react'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Gọi API để lưu lead / đăng ký
    alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm.')
    setFormData({ fullName: '', phone: '', email: '' })
  }

  return (
    // Đặt id để cuộn đến
    <section id="dang-ky-ngay" className="py-10 px-4 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">Đăng ký ngay</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded shadow"
      >
        <div className="mb-4">
          <label className="block font-semibold mb-1">Họ và tên</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Số điện thoại</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Gửi đăng ký
        </button>
      </form>
    </section>
  )
}

export default RegistrationForm
