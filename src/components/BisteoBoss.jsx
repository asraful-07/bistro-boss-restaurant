import React from "react";
import bg from "../assets/images/home/chef-service.jpg";

const BisteoBoss = () => {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat mb-24"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white bg-opacity-80 rounded-lg p-8 shadow-lg text-center max-w-lg mx-auto">
        <h1 className="text-4xl font-bold mb-4">BISTRO BOSS</h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore, et,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BisteoBoss;
