import { Link } from 'react-router-dom';
import { useState } from 'react';

const Recruitment = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', experience: '', cv: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('phone', form.phone);
    formData.append('experience', form.experience);
    if (form.cv) formData.append('cv', form.cv);
    alert('Đã gửi ứng tuyển: ' + JSON.stringify({ ...form, cv: form.cv ? form.cv.name : null }));
  };

  const handleFileChange = (e) => {
    setForm({ ...form, cv: e.target.files[0] });
  };

  return (
    <div className="min-h-screen bg-background text-text py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Tuyển dụng giảng viên</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-secondary p-8 rounded-xl shadow-custom">
          <input
            type="text"
            placeholder="Họ và tên"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <textarea
            placeholder="Kinh nghiệm giảng dạy"
            value={form.experience}
            onChange={(e) => setForm({ ...form, experience: e.target.value })}
            className="w-full p-3 rounded-lg bg-background border border-gray-700 text-text placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
            rows="4"
          />
          <div>
            <label className="block text-sm font-medium mb-2">Tải lên CV (PDF hoặc Word)</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="w-full p-3 rounded-lg bg-background border border-gray-700 text-text file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-text hover:file:bg-indigo-700"
            />
            {form.cv && <p className="mt-2 text-gray-400 text-sm">Đã chọn: {form.cv.name}</p>}
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-primary text-text rounded-full hover:bg-indigo-700 transition-all shadow-md"
          >
            Gửi ứng tuyển
          </button>
        </form>
        <p className="mt-6 text-center text-gray-400">
          Quay lại <Link to="/" className="text-primary hover:underline">Trang chủ</Link>
        </p>
      </div>
    </div>
  );
};

export default Recruitment;