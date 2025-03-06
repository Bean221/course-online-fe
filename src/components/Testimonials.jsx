function Testimonials() {
    const testimonials = [
      { id: 1, name: "Nguyễn Văn A", review: "Khóa học rất bổ ích!" },
      { id: 2, name: "Trần Thị B", review: "Giáo viên dạy dễ hiểu!" },
    ];
  
    return (
      <div className="container mx-auto my-10">
        <h2 className="text-2xl font-bold mb-6">Cảm nhận học viên</h2>
        <div className="grid grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="border p-4 rounded-lg shadow-md">
              <p className="italic">"{t.review}"</p>
              <h4 className="mt-2 font-semibold">- {t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Testimonials;
  