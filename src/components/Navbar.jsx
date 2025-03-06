import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          eLearning
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:underline">
              Trang chủ
            </Link>
          </li>
          <li>
            <Link to="/courses" className="text-white hover:underline">
              Khóa học
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:underline">
              Giới thiệu
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
