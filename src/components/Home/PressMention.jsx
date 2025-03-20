import React from 'react'

const PressMention = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Báo nói về BeanLearn</h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-700 mb-4">
          BeanLearn đã được vinh danh trên các trang báo uy tín...
        </p>
        <div className="flex justify-center space-x-6">
          <img src="https://via.placeholder.com/100x50" alt="Logo 1" />
          <img src="https://via.placeholder.com/100x50" alt="Logo 2" />
          <img src="https://via.placeholder.com/100x50" alt="Logo 3" />
        </div>
      </div>
    </section>
  )
}

export default PressMention
