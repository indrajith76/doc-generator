import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="w-2/4 mx-auto">
      <h1 className="text-center text-5xl mt-5">Doc Generator</h1>
      <p className="my-5">Select Your Document type:</p>
      <div className="grid grid-cols-2 gap-10">
        <Link to="/resume" className="bg-red-500 text-2xl px-10 py-20 rounded-lg text-center text-white font-semibold hover:shadow-2xl">
          Resume
        </Link>
        <Link to="/visitingCard" className="bg-red-500 text-2xl px-10 py-20 rounded-lg text-center text-white font-semibold hover:shadow-2xl">
          Visiting Card
        </Link>
        <Link to="/coverPage" className="bg-red-500 text-2xl px-10 py-20 rounded-lg text-center text-white font-semibold hover:shadow-2xl">
          Cover Page
        </Link>
        <Link to="/poster" className="bg-red-500 text-2xl px-10 py-20 rounded-lg text-center text-white font-semibold hover:shadow-2xl">
          Poster
        </Link>
      </div>
    </section>
  );
};

export default Home;
