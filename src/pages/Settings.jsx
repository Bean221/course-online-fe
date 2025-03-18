import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Settings = () => {
  const { user } = useContext(AuthContext);
  const [settings, setSettings] = useState({
    theme: 'dark',
    notifications: true,
    language: 'vi',
  });

  if (!user) {
    return (
      <div className="min-h-screen bg-background text-text flex items-center justify-center">
        <p>Vui lòng <Link to="/login" className="text-primary hover:underline">đăng nhập</Link> để xem cài đặt.</p>
      </div>
    );
  }

  const handleSave = () => {
    alert('Đã lưu cài đặt: ' + JSON.stringify(settings));
  };

  return (
    <div className="min-h-screen bg-background text-text py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Cài đặt hệ thống</h1>
        <div className="bg-secondary p-8 rounded-xl shadow-custom space-y-6">
          {/* Giao diện */}
          <div>
            <label className="block text-lg font-semibold mb-2">Giao diện</label>
            <select
              value={settings.theme}
              onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
              className="w-full p-3 rounded-lg bg-background border border-gray-700 text-text"
            >
              <option value="dark">Tối</option>
              <option value="light">Sáng</option>
            </select>
          </div>

          {/* Thông báo */}
          <div>
            <label className="block text-lg font-semibold mb-2">Thông báo</label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
                className="w-5 h-5 text-primary border-gray-700 bg-background rounded focus:ring-primary"
              />
              <span>Bật thông báo</span>
            </label>
          </div>

          {/* Ngôn ngữ */}
          <div>
            <label className="block text-lg font-semibold mb-2">Ngôn ngữ</label>
            <select
              value={settings.language}
              onChange={(e) => setSettings({ ...settings, language: e.target.value })}
              className="w-full p-3 rounded-lg bg-background border border-gray-700 text-text"
            >
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* Lưu */}
          <button onClick={handleSave} className="w-full p-3 bg-primary text-text rounded-full hover:bg-purple-700 shadow-md">
            Lưu cài đặt
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;