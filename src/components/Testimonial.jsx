const Testimonial = ({ name, content, img }) => {
  return (
    <div className="flex items-center space-x-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
      <img src={img} alt={name} className="w-16 h-16 rounded-full object-cover" />
      <div>
        <h4 className="font-semibold text-gray-800 dark:text-white">{name}</h4>
        <p className="text-gray-600 dark:text-gray-300 italic">"{content}"</p>
      </div>
    </div>
  );
};

export default Testimonial;