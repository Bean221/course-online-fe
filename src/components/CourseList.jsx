import { useEffect, useState } from "react";
import courseService from "../services/courseService";

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      const data = await courseService.getCourses();
      setCourses(data);
    }
    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6">Khóa học mới nhất</h2>
      <div className="grid grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{course.name}</h3>
            <p className="text-gray-600 mt-2">{course.description}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Xem chi tiết
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
