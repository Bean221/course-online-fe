// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#0A0F24', // Nền chính
        secondary: '#1A233F',  // Nền phụ
        primary: '#5B4CFF',    // Xanh tím sáng
        accent: '#FFD60A',     // Vàng sáng
        text: '#E5E7EB',       // Chữ chính
        'text-secondary': '#9CA3AF', // Chữ phụ
        gray: {
          900: '#0A0F24',
          800: '#1A233F',
          700: '#2D3748',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        custom: '0 4px 15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};