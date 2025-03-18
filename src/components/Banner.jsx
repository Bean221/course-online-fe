const Banner = () => {
  return (
    <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/assets/banner.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Chinh phục tri thức cùng Bean Learning</h1>
          <p className="text-lg mb-6">Học tập linh hoạt, chất lượng hàng đầu!</p>
          <button className="px-6 py-3 bg-primary text-white rounded-full hover:bg-green-700 transition-all">
            Bắt đầu ngay
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;