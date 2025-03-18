let users = [
  { id: 'admin', username: 'admin', email: 'admin@gmail.com', password: '123', role: 'admin', contact: 'admin@beanlearn.com' },
  { id: 'teacher1', username: 'teacher1', email: 'teacher@gmail.com', password: '123', role: 'teacher', contact: '0901234567', rating: 4.8 },
  { id: 'student1', username: 'student1', email: 'student@gmail.com', password: '123', role: 'student', enrolledCourses: ['1'], rating: 4.7 },
  { id: 'user1', username: 'user1', email: 'user@gmail.com', password: '123', role: 'user', contact: 'user1@beanlearn.com' },
];

let courses = [
  { id: '1', title: 'Lập trình React', price: '1.500.000 VNĐ', description: 'Học React cơ bản.', teacher: 'teacher1' },
  { id: '2', title: 'Thiết kế UI/UX', price: '2.000.000 VNĐ', description: 'Thiết kế giao diện.', teacher: 'teacher2' },
];

export const fetchCourses = () => Promise.resolve(courses);
export const fetchUsers = () => Promise.resolve(users);
export const fetchCourseById = (id) => Promise.resolve(courses.find(c => c.id === id));
export const fetchUserByEmail = (email, password) => Promise.resolve(users.find(u => u.email === email && u.password === password));
export const registerUser = (userData) => {
  const newUser = { ...userData, id: userData.username, role: 'user', contact: userData.contact || '' };
  users.push(newUser);
  return Promise.resolve(newUser);
};
export const enrollCourse = (userId, courseId) => {
  const user = users.find(u => u.id === userId);
  if (user) {
    user.enrolledCourses = user.enrolledCourses ? [...user.enrolledCourses, courseId] : [courseId];
    user.role = 'student';
  }
  return Promise.resolve(user);
};
export const assignTeacher = (userId, adminId) => {
  const admin = users.find(u => u.id === adminId && u.role === 'admin');
  if (!admin) throw new Error('Only admin can assign teachers');
  const user = users.find(u => u.id === userId);
  if (user) {
    user.role = 'teacher';
    user.contact = user.contact || 'Chưa cung cấp';
  }
  return Promise.resolve(user);
};
export const approveStudent = (studentId, teacherId, courseId) => {
  const teacher = users.find(u => u.id === teacherId && u.role === 'teacher');
  const student = users.find(u => u.id === studentId && u.role === 'student');
  if (teacher && student && student.enrolledCourses?.includes(courseId)) {
    student.approvedBy = teacherId;
    return Promise.resolve(student);
  }
  throw new Error('Approval failed');
};
// Giảng viên hoặc Admin thêm khóa học 
export const createCourse = (courseData, userId) => {
  const user = users.find(u => u.id === userId && (u.role === 'teacher' || u.role === 'admin'));
  if (!user) throw new Error('Only teachers or admin can create courses');
  const newCourse = { id: String(courses.length + 1), ...courseData, teacher: userId };
  courses.push(newCourse);
  return Promise.resolve(newCourse);
};