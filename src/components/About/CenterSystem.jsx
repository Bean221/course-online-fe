import React from "react";

export default function CenterSystem() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Hệ thống trung tâm</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          The Forum đang có nhiều chi nhánh hoạt động tại TP.HCM và Bà Rịa - Vũng Tàu
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {/* Hội sở */}
          <div className="p-4 bg-white shadow rounded">
            <img src="/images/building-icon.png" alt="Hội sở" className="mx-auto mb-2 h-12" />
            <h3 className="font-semibold">Hội Sở</h3>
            <p className="text-sm text-gray-600">01G3 Trung Tâm Thương Mại, P7, TP Vũng Tàu</p>
          </div>

          {/* Cơ sở 1 */}
          <div className="p-4 bg-white shadow rounded">
            <img src="/images/building-icon.png" alt="Cơ sở 1" className="mx-auto mb-2 h-12" />
            <h3 className="font-semibold">Cơ sở 1</h3>
            <p className="text-sm text-gray-600">27G1 Nguyễn Đảnh, P7, TP Vũng Tàu</p>
          </div>

          {/* Cơ sở 2 */}
          <div className="p-4 bg-white shadow rounded">
            <img src="/images/building-icon.png" alt="Cơ sở 2" className="mx-auto mb-2 h-12" />
            <h3 className="font-semibold">Cơ sở 2</h3>
            <p className="text-sm text-gray-600">2K3-3K6 Trưng Nhị Học, P7, TP Vũng Tàu</p>
          </div>

          {/* Cơ sở 3 */}
          <div className="p-4 bg-white shadow rounded">
            <img src="/images/building-icon.png" alt="Cơ sở 3" className="mx-auto mb-2 h-12" />
            <h3 className="font-semibold">Cơ sở 3</h3>
            <p className="text-sm text-gray-600">80 Bạch Đằng, Phường Phước Trung, TP Bà Rịa</p>
          </div>

          {/* Cơ sở 4 */}
          <div className="p-4 bg-white shadow rounded">
            <img src="/images/building-icon.png" alt="Cơ sở 4" className="mx-auto mb-2 h-12" />
            <h3 className="font-semibold">Cơ sở 4</h3>
            <p className="text-sm text-gray-600">75 Nguyễn Thái Học, P7, TP Vũng Tàu</p>
          </div>
        </div>
      </div>
    </section>
  );
}
