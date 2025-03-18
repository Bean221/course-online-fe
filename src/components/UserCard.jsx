const UserCard = ({ name, email, contact, rating, role }) => {
  return (
    <div className="bg-secondary p-6 rounded-2xl shadow-custom hover:shadow-lg transition-all text-center text-text">
      <img src="/assets/default-avatar.jpg" alt={name} className="w-16 h-16 rounded-full mx-auto mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-text-secondary">{email}</p>
      {contact && <p className="text-text-secondary">Liên hệ: {contact}</p>}
      <p className="text-accent">★ {rating || 'N/A'}</p>
      <p className="text-sm text-primary">{role === 'teacher' ? 'Giảng viên' : 'Học viên'}</p>
    </div>
  );
};

export default UserCard;