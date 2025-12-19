import React from "react";
import Problems from "../assets/prob.png";

export default function Landing() {
  return (
    <div className="w-full min-h-screen bg-[#FFF3E9] overflow-x-hidden">
      <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-[#FFF3E9]/50">
        <div
          className="flex justify-between items-center p-4 font-serif 
                         rounded-2xl mx-2 my-2"
        >
          <h1 className="text-3xl text-teal-900">CafeMate</h1>
          <button className="text-lg text-white bg-teal-900 rounded-2xl p-2 hover:shadow-xl transition-shadow duration-300">
            Get Started
          </button>
        </div>
      </nav>

      <section className="bg-[#FFF3E9] w-full font-serif pb-36 pt-50">
        <div className="mt-10">
          <h1 className="text-6xl text-center text-teal-900">CafeMate</h1>
          <h1 className="text-4xl text-center text-teal-900 mt-2">
            One stop solution for the College Cafeteria Management
          </h1>
          <div className="flex justify-center mt-4">
            <button className="text-2xl text-white bg-teal-900 rounded-2xl p-2 hover:shadow-xl transition-shadow duration-300 mt-2">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#FFB53A] w-full h-fit mt-2 pb-10">
        <div className="flex justify-between px-10">
          <div className="p-3">
            <h1 className="text-4xl text-center pt-4 mt-4 font-serif">
              The Problems We Solve
            </h1>
            <p className="text-2xl font-serif text-center mt-3"> We solve the below problems to make student life easier and maintain sustainability.</p>
            <ul className="text-2xl mt-6 font-serif list-disc">
              <li>The Time Crunch - As soon as a student class finishes his/her class he/she can order till they reach the Cafeteria. </li>
              <li>The Crowd - Avoiding the hassle at the cafeteria counter.</li>
              <li>The Wastage - The on time preparation as per orders reduces wastage.</li>
            </ul>
          </div>
          <div>
            <img src={Problems} className="w-[800px] mt-10 rounded-xl" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
