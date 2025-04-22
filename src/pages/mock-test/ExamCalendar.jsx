import React, { useState, useEffect } from "react";

const monthNames = [
  "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
  "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
];

// Hàm hỗ trợ
const daysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};
const firstDayOfMonth = (month, year) => {
  return new Date(year, month, 1).getDay();
};
const generateDateString = (year, month, day) => {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

// Hàm xác định pattern dựa trên cặp (location, format)
function getPatternIndex(location, format) {
  // Bạn có thể thay thế string so sánh bằng ID, map,... tuỳ ý
  // 5 địa điểm × 2 hình thức = 10 pattern

  if (location === "01 Trần Phú, P. Lý Thường Kiệt, TP. Quy Nhơn" && format === "paper") {
    return 1;
  }
  if (location === "01 Trần Phú, P. Lý Thường Kiệt, TP. Quy Nhơn" && format === "computer") {
    return 2;
  }
  if (location === "02 Phan Bội Châu, P. Trần Hưng Đạo, TP. Quy Nhơn" && format === "paper") {
    return 3;
  }
  if (location === "02 Phan Bội Châu, P. Trần Hưng Đạo, TP. Quy Nhơn" && format === "computer") {
    return 4;
  }
  if (location === "03 Võ Thị Sáu, P. Nguyễn Văn Cừ, TP. Quy Nhơn" && format === "paper") {
    return 5;
  }
  if (location === "03 Võ Thị Sáu, P. Nguyễn Văn Cừ, TP. Quy Nhơn" && format === "computer") {
    return 6;
  }
  if (location === "04 Ngô Mây, P. Quang Trung, TP. Quy Nhơn" && format === "paper") {
    return 7;
  }
  if (location === "04 Ngô Mây, P. Quang Trung, TP. Quy Nhơn" && format === "computer") {
    return 8;
  }
  if (location === "05 Lê Lợi, P. Lê Lợi, TP. Quy Nhơn" && format === "paper") {
    return 9;
  }
  if (location === "05 Lê Lợi, P. Lê Lợi, TP. Quy Nhơn" && format === "computer") {
    return 10;
  }

  // Mặc định: trả về 0 (không có pattern)
  return 0;
}

// Ví dụ 10 pattern "vui vẻ" (bạn thay đổi tuỳ ý)
// Trả về mảng dayString "available" và mảng dayString "full"
function generateDatesByPattern(patternIndex, year, month) {
  const totalDays = daysInMonth(month, year);
  const available = [];
  const full = [];

  for (let day = 1; day <= totalDays; day++) {
    const dateStr = generateDateString(year, month, day);

    switch (patternIndex) {
      case 1:
        // Ví dụ pattern 1: ngày chẵn available, ngày lẻ full
        if (day % 2 === 0) available.push(dateStr);
        else full.push(dateStr);
        break;
      case 2:
        // Ví dụ pattern 2: ngày chia hết cho 3 -> full, còn lại -> available
        if (day % 3 === 0) full.push(dateStr);
        else available.push(dateStr);
        break;
      case 3:
        // Ví dụ pattern 3: ngày < 15 -> available, >= 15 -> full
        if (day < 15) available.push(dateStr);
        else full.push(dateStr);
        break;
      case 4:
        // Ví dụ pattern 4: ngày bội số của 5 -> full, còn lại -> available
        if (day % 5 === 0) full.push(dateStr);
        else available.push(dateStr);
        break;
      case 5:
        // Pattern 5 tuỳ ý
        if (day <= 10) available.push(dateStr);
        else if (day <= 20) full.push(dateStr);
        else available.push(dateStr);
        break;
      case 6:
        // Pattern 6 tuỳ ý
        if (day % 7 === 0) full.push(dateStr);
        else available.push(dateStr);
        break;
      case 7:
        // Pattern 7
        // Tạm cho ngày Chủ nhật (dayOfWeek=0) full, còn lại available
        {
          const dayOfWeek = new Date(year, month, day).getDay();
          if (dayOfWeek === 0) full.push(dateStr);
          else available.push(dateStr);
        }
        break;
      case 8:
        // Pattern 8
        // Tạm cho tất cả available, trừ mùng 1 và 15 full
        if (day === 1 || day === 15) full.push(dateStr);
        else available.push(dateStr);
        break;
      case 9:
        // Pattern 9
        // Tạm cho ngày >=20 full, còn lại available
        if (day >= 20) full.push(dateStr);
        else available.push(dateStr);
        break;
      case 10:
        // Pattern 10
        // Tạm cho ngày lẻ available, chẵn full
        if (day % 2 === 1) available.push(dateStr);
        else full.push(dateStr);
        break;
      default:
        // Không có pattern -> không có lịch
        break;
    }
  }

  return { available, full };
}

// Hàm chính để lấy dữ liệu cho địa điểm + hình thức
function getLocationData(location, format, currentYear, currentMonth) {
  const allAvailableDates = [];
  const allFullDates = [];

  // Nếu chưa chọn location hoặc format thì trả về rỗng
  if (!location || !format) {
    return { allAvailableDates, allFullDates };
  }

  // Chỉ có dữ liệu trong giai đoạn 2025-2030
  if (currentYear < 2025 || currentYear > 2030) {
    return { allAvailableDates, allFullDates };
  }

  // Xác định pattern
  const patternIndex = getPatternIndex(location, format);

  // Sinh dữ liệu cho đúng month, year
  const { available, full } = generateDatesByPattern(patternIndex, currentYear, currentMonth);
  allAvailableDates.push(...available);
  allFullDates.push(...full);

  return { allAvailableDates, allFullDates };
}

// -------------------- COMPONENT CHÍNH --------------------
const ExamCalendar = ({ selectedLocation, selectedFormat, onDateSelect }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [availableDates, setAvailableDates] = useState([]);
  const [fullDates, setFullDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const prevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  useEffect(() => {
    // Mỗi lần đổi tháng/năm/địa điểm/hình thức thì load lại
    setSelectedDate(null);

    const { allAvailableDates, allFullDates } = getLocationData(
      selectedLocation,
      selectedFormat,
      currentYear,
      currentMonth
    );

    setAvailableDates(allAvailableDates);
    setFullDates(allFullDates);
  }, [currentMonth, currentYear, selectedLocation, selectedFormat]);

  const isAvailable = (day) => {
    const dateString = generateDateString(currentYear, currentMonth, day);
    return availableDates.includes(dateString);
  };

  const isFull = (day) => {
    const dateString = generateDateString(currentYear, currentMonth, day);
    return fullDates.includes(dateString);
  };

  const handleDateClick = (day) => {
    const dateString = generateDateString(currentYear, currentMonth, day);
    if (isAvailable(day)) {
      setSelectedDate(dateString);
      onDateSelect?.(dateString);
    }
  };

  const renderCalendar = () => {
    const total = daysInMonth(currentMonth, currentYear);
    const first = firstDayOfMonth(currentMonth, currentYear);
    const daysArray = [];

    // Ô trống trước ngày 1
    for (let i = 0; i < first; i++) {
      daysArray.push(
        <div key={`empty-${i}`} className="p-2 border text-gray-300"></div>
      );
    }

    // Các ngày trong tháng
    for (let day = 1; day <= total; day++) {
      const dateString = generateDateString(currentYear, currentMonth, day);
      const isDateAvailable = isAvailable(day);
      const isDateFull = isFull(day);
      const isDateSelected = (dateString === selectedDate);

      let className = "p-2 border text-center cursor-pointer ";
      if (isDateAvailable) {
        className += isDateSelected
          ? "bg-indigo-500 text-white font-bold"
          : "bg-green-100 text-green-700 hover:bg-green-200";
      } else if (isDateFull) {
        className += "bg-red-100 text-red-700 cursor-not-allowed";
      } else {
        className += "text-gray-700";
      }

      daysArray.push(
        <div
          key={day}
          className={className}
          onClick={() => !isDateFull && handleDateClick(day)}
        >
          {day}
        </div>
      );
    }

    return daysArray;
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prevMonth}
          className="px-3 py-1 rounded-md hover:bg-gray-200"
          type="button"
        >
          &lt;
        </button>
        <h2 className="text-xl font-semibold">
          {monthNames[currentMonth]} - {currentYear}
        </h2>
        <button
          onClick={nextMonth}
          className="px-3 py-1 rounded-md hover:bg-gray-200"
          type="button"
        >
          &gt;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        <div className="p-2 text-center font-semibold text-gray-500">CN</div>
        <div className="p-2 text-center font-semibold text-gray-500">T2</div>
        <div className="p-2 text-center font-semibold text-gray-500">T3</div>
        <div className="p-2 text-center font-semibold text-gray-500">T4</div>
        <div className="p-2 text-center font-semibold text-gray-500">T5</div>
        <div className="p-2 text-center font-semibold text-gray-500">T6</div>
        <div className="p-2 text-center font-semibold text-gray-500">T7</div>

        {renderCalendar()}
      </div>

      <div className="mt-4 flex items-center space-x-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-100 rounded-full mr-2"></div>
          <span className="text-sm text-gray-700">Còn chỗ trống</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-100 rounded-full mr-2"></div>
          <span className="text-sm text-gray-700">Hết chỗ</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border rounded-full mr-2"></div>
          <span className="text-sm text-gray-700">Không có lịch</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-indigo-500 rounded-full mr-2"></div>
          <span className="text-sm text-gray-700">Đã chọn</span>
        </div>
      </div>
    </div>
  );
};

export default ExamCalendar;