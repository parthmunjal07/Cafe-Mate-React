import React from "react";

export default function Landing() {
  return (
    <div className="w-full h-full bg-[#FFF3E9]">
      <nav className="flex justify-between p-4 font-serif">
        <h1>CafeMate</h1>
        <button
          className="text-lg text-white bg-teal-900 rounded-2xl p-2 cursor-pointer 
                   hover:shadow-xl transition-shadow duration-300"
        >
          Get Started
        </button>
      </nav>
      <section className="bg-[#FFF3E9] w-full font-serif">
        <div className="mt-10 align-middle">
          <h1 className="text-6xl text-center text-teal-900">CafeMate</h1>
          <h1 className="text-4xl text-center text-teal-900 mt-2">
            One stop solution for the College Cafeteria Management
          </h1>
          <div className="flex justify-center mt-4">
            <button
              className="text-2xl text-white bg-teal-900 rounded-2xl p-2 cursor-pointer 
                   hover:shadow-xl transition-shadow duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#23543E] w-full mt-2">Section-2</section>
    </div>
  );
}
