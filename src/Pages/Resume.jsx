import React from "react";

const Resume = () => {
  return (
    <section>
      <h2 className="text-center text-3xl font-semibold my-5">
        Generate your Resume
      </h2>
      <div className="grid grid-cols-2">
        <div className="border pb-10">
          <h3 className="text-xl font-semibold underline text-center my-5">
            Enter Your Information's
          </h3>
          <div className="grid grid-cols-2 gap-5 px-10">
            <div>
              <label htmlFor="">Name</label>
              <input
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div>
              <label htmlFor="">Location</label>
              <input
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="location"
                id="location"
              />
            </div>
            <div>
              <label htmlFor="">Mobile</label>
              <input
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="mobile"
                id="mobile"
              />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="email"
                id="email"
              />
            </div>
            {/* Experience */}
            <h4 className="font-semibold text-xl">Experience:</h4>
            <br />
            <div>
              <label htmlFor="company1">Company Name</label>
              <input
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="company1"
                id="company1"
              />
            </div>
            <div>
              <label htmlFor="position1">Position</label>
              <input
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="position1"
                id="position1"
              />
            </div>
            <div>
              <label htmlFor="company2">
                Another Company Name <small>(if any)</small>
              </label>
              <input
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="company2"
                id="company2"
              />
            </div>
            <div>
              <label htmlFor="position2">Position</label>
              <input
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="position2"
                id="position2"
              />
            </div>
            {/* Skills */}
            <h4 className="font-semibold text-xl">Skills:</h4>
            <br />
            <textarea
              name=""
              id=""
              className="col-span-2 border rounded-md px-2 py-1"
              placeholder="Html, CSS, Javascript etc ..."
            ></textarea>

            {/* Education */}
            <h4 className="font-semibold text-xl">Education:</h4>
            <br />
            <div>
              <label htmlFor="degree1">Degree Name</label>
              <input
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="degree1"
                id="degree1"
              />
            </div>
            <div>
              <label htmlFor="institute1">Institute Name</label>
              <input
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="institute1"
                id="institute1"
              />
            </div>
            <div>
              <label htmlFor="degree2">
                Another Degree Name <small>(if any)</small>
              </label>
              <input
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="degree2"
                id="degree2"
              />
            </div>
            <div>
              <label htmlFor="institute2">
                Another Institute Name <small>(if any)</small>
              </label>
              <input
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="institute2"
                id="institute2"
              />
            </div>
          </div>
          <div className="flex justify-center my-10"><button className="bg-green-500 px-5 py-3 text-white font-semibold rounded-md">Generate</button></div>
        </div>
        <div className="border"></div>
      </div>
    </section>
  );
};

export default Resume;
