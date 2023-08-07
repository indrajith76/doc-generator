import React from "react";

const Resume = () => {
  return (
    <section>
      <h2 className="text-center text-3xl font-semibold mt-5">
        Generate your Resume
      </h2>
      <div className="grid grid-cols-2">
        <div className="border">
            <h3 className="text-xl font-semibold underline text-center my-5">Enter Your Information's</h3>
          <div className="grid grid-cols-2 gap-5 px-10">
            <div>
              <label htmlFor="">Name</label>
              <input
                className="block border w-full"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div>
              <label htmlFor="">Location</label>
              <input
                className="block border w-full"
                type="text"
                name="location"
                id="location"
              />
            </div>
            <div>
              <label htmlFor="">Mobile</label>
              <input
                className="block border w-full"
                type="text"
                name="mobile"
                id="mobile"
              />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input
                className="block border w-full"
                type="text"
                name="email"
                id="email"
              />
            </div>
          </div>
        </div>
        <div className="border"></div>
      </div>
    </section>
  );
};

export default Resume;
