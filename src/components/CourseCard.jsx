import { Link } from 'react-router-dom';

const CourseCard = ({ id, title, price, teacher }) => {
  return (
    <div className="bg-secondary p-6 rounded-2xl shadow-custom hover:shadow-lg transition-all text-text">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-text-secondary mb-2">Giảng viên: {teacher}</p>
      <p className="text-primary font-bold">{price}</p>
      <Link to={`/course/${id}`} className="mt-4 inline-block px-4 py-2 bg-primary text-text rounded-full hover:bg-blue-600 shadow-md">
        Xem chi tiết
      </Link>
    </div>
  );
};

export default CourseCard;