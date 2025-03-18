import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import UserCard from '../components/UserCard';
import { fetchCourses, fetchUsers } from '../services/api';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [aboutUs, setAboutUs] = useState({
    title: 'Về chúng tôi',
    content: 'Bean Learning là nền tảng học trực tuyến hiện đại, kết nối học viên với những giảng viên hàng đầu.',
  });
  const [testimonials] = useState([
    { id: 1, name: 'Học viên A', content: 'Khóa học rất thực tế, dễ hiểu!', rating: 4.8 },
    { id: 2, name: 'Học viên B', content: 'Giảng viên hỗ trợ nhiệt tình.', rating: 4.7 },
  ]);

  useEffect(() => {
    fetchCourses().then(data => setCourses(data.slice(0, 3))).catch(err => console.error(err));
    fetchUsers().then(data => {
      const topTeachers = data.filter(u => u.role === 'teacher').slice(0, 3);
      setTeachers(topTeachers);
    }).catch(err => console.error(err));
  }, []);

  const handleSave = () => {
    setIsEditing(false);
    alert('Đã lưu thay đổi!');
  };

  return (
    <div className="min-h-screen bg-background text-text space-y-16">
      {/* Banner */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center">
        <div className="text-center p-8 bg-secondary bg-opacity-90 rounded-2xl shadow-custom">
          <h1 className="text-5xl font-bold mb-4">Khám phá tri thức cùng Bean Learning</h1>
          <p className="text-xl mb-6 text-text-secondary">Học mọi lúc, mọi nơi với các khóa học chất lượng cao.</p>
          <Link to="/courses" className="px-6 py-3 bg-accent text-background rounded-full hover:bg-yellow-500 transition-all shadow-md">
            Khám phá ngay
          </Link>
        </div>
      </section>

      {/* Về chúng tôi */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        {isEditing && user?.role === 'admin' ? (
          <div className="bg-secondary p-6 rounded-2xl shadow-custom">
            <input
              type="text"
              value={aboutUs.title}
              onChange={e => setAboutUs({ ...aboutUs, title: e.target.value })}
              className="w-full p-3 mb-4 border border-gray-700 bg-background text-text rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <textarea
              value={aboutUs.content}
              onChange={e => setAboutUs({ ...aboutUs, content: e.target.value })}
              className="w-full p-3 border border-gray-700 bg-background text-text rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              rows="4"
            />
            <button onClick={handleSave} className="mt-4 px-6 py-3 bg-primary text-text rounded-full hover:bg-blue-600 shadow-md">
              Lưu
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-4">{aboutUs.title}</h2>
            <p className="text-lg text-text-secondary mb-6">{aboutUs.content}</p>
            {user?.role === 'admin' && (
              <button onClick={() => setIsEditing(true)} className="px-6 py-3 bg-accent text-background rounded-full hover:bg-yellow-500 shadow-md">
                Chỉnh sửa
              </button>
            )}
          </>
        )}
      </section>

      {/* Khóa học nổi bật */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Khóa học nổi bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map(course => <CourseCard key={course.id} {...course} />)}
        </div>
        <div className="text-center mt-8">
          <Link to="/courses" className="px-6 py-3 bg-primary text-text rounded-full hover:bg-blue-600 shadow-md">
            Xem thêm
          </Link>
        </div>
      </section>

      {/* Giảng viên nổi bật */}
      <section className="bg-secondary py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Giảng viên nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teachers.map(teacher => <UserCard key={teacher.id} {...teacher} />)}
          </div>
          <div className="text-center mt-8">
            <Link to="/teachers" className="px-6 py-3 bg-primary text-text rounded-full hover:bg-blue-600 shadow-md">
              Xem thêm
            </Link>
          </div>
        </div>
      </section>

      {/* Tuyển dụng */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Tham gia đội ngũ giảng viên</h2>
        <p className="text-lg text-text-secondary mb-6">Bạn đam mê giảng dạy? Hãy gia nhập chúng tôi để truyền cảm hứng cho học viên!</p>
        <Link to="/recruitment" className="px-6 py-3 bg-accent text-background rounded-full hover:bg-yellow-500 shadow-md">
          Ứng tuyển ngay
        </Link>
      </section>

      {/* Cảm nhận học viên */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Cảm nhận học viên</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map(item => (
            <div key={item.id} className="bg-secondary p-6 rounded-2xl shadow-custom">
              <p className="text-text-secondary italic mb-4">"{item.content}"</p>
              <p className="text-primary font-semibold">{item.name}</p>
              <p className="text-accent">★ {item.rating}</p>
            </div>
          ))}
        </div>
        {user?.role === 'admin' && !isEditing && (
          <div className="text-center mt-8">
            <button onClick={() => setIsEditing(true)} className="px-6 py-3 bg-accent text-background rounded-full hover:bg-yellow-500 shadow-md">
              Chỉnh sửa
            </button>
          </div>
        )}
      </section>

      {/* CTA cuối */}
      <section className="bg-primary text-text py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Bắt đầu hành trình học tập ngay hôm nay!</h2>
        <Link to="/register" className="px-6 py-3 bg-accent text-background rounded-full hover:bg-yellow-500 shadow-md">
          Đăng ký ngay
        </Link>
      </section>
    </div>
  );
};

export default Home;