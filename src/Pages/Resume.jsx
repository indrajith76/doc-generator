import React, { useState } from "react";

const Resume = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [location, setLocation] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [company1, setCompany1] = useState("");
  const [position1, setPosition1] = useState("");
  const [company2, setCompany2] = useState("");
  const [position2, setPosition2] = useState("");
  const [skills, setSkills] = useState("");
  const [degree1, setDegree1] = useState("");
  const [institute1, setInstitute1] = useState("");
  const [degree2, setDegree2] = useState("");
  const [institute2, setInstitute2] = useState("");
  const [bgColor, setBgColor] = useState("white");
  console.log(bgColor);
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
              <label htmlFor="name">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div>
              <label htmlFor="designation">Designation</label>
              <input
                onChange={(e) => setDesignation(e.target.value)}
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="designation"
                id="designation"
              />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <input
                onChange={(e) => setLocation(e.target.value)}
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="location"
                id="location"
              />
            </div>
            <div>
              <label htmlFor="mobile">Mobile</label>
              <input
                onChange={(e) => setMobile(e.target.value)}
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="mobile"
                id="mobile"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="block border w-full px-2 h-8 rounded-md col-span-1"
                type="text"
                name="email"
                id="email"
              />
            </div>
            {/* Experience */}
            <h4 className="font-semibold text-xl col-span-2">Experience:</h4>
            <div>
              <label htmlFor="company1">Company Name</label>
              <input
                onChange={(e) => setCompany1(e.target.value)}
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="company1"
                id="company1"
              />
            </div>
            <div>
              <label htmlFor="position1">Position</label>
              <input
                onChange={(e) => setPosition1(e.target.value)}
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
                onChange={(e) => setCompany2(e.target.value)}
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="company2"
                id="company2"
              />
            </div>
            <div>
              <label htmlFor="position2">Position</label>
              <input
                onChange={(e) => setPosition2(e.target.value)}
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
              onChange={(e) => setSkills(e.target.value)}
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
                onChange={(e) => setDegree1(e.target.value)}
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="degree1"
                id="degree1"
              />
            </div>
            <div>
              <label htmlFor="institute1">Institute Name</label>
              <input
                onChange={(e) => setInstitute1(e.target.value)}
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
                onChange={(e) => setDegree2(e.target.value)}
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
                onChange={(e) => setInstitute2(e.target.value)}
                className="block border w-full px-2 h-8 rounded-md"
                type="text"
                name="institute2"
                id="institute2"
              />
            </div>
            <div className="col-span-2">
              <div className="flex items-center gap-5">
                <h4 className="font-semibold text-xl">Background Color:</h4>
                <button
                  onClick={() => setBgColor("green")}
                  className="bg-white border-8 border-green-500 w-6 h-6 rounded-full"
                ></button>
                <button
                  onClick={() => setBgColor("blue")}
                  className="bg-white border-8 border-blue-500 w-6 h-6 rounded-full"
                ></button>
                <button
                  onClick={() => setBgColor("yellow")}
                  className="bg-white border-8 border-yellow-500 w-6 h-6 rounded-full"
                ></button>
                <button
                  onClick={() => setBgColor("red")}
                  className="bg-white border-8 border-red-500 w-6 h-6 rounded-full"
                ></button>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-10">
            <button className="bg-green-500 px-5 py-3 text-white font-semibold rounded-md">
              Generate
            </button>
          </div>
        </div>

        {/* OUtput */}
        <div
          className={`border p-10 ${
            (bgColor == "green" && "bg-green-200") ||
            (bgColor == "blue" && "bg-blue-200") ||
            (bgColor == "yellow" && "bg-yellow-200") ||
            (bgColor == "red" && "bg-red-200")
          }`}
        >
          <h3 className="text-3xl font-bold">{name}</h3>
          <h5 className="text-xl font-semibold">{designation}</h5>
          <p>{location}</p>
          <p>{mobile}</p>
          <p>{email}</p>
          <hr className="my-5 border border-black" />

          <div className="grid grid-cols-2 gap-5">
            <div>
              {(company1 || company2) && (
                <h4 className="text-2xl font-semibold mb-3">Experience:</h4>
              )}
              <h5 className="text-xl font-semibold">{company1}</h5>
              <p className="mb-2">{position1}</p>
              <h5 className="text-xl font-semibold">{company2}</h5>
              <p className="mb-2">{position2}</p>
            </div>
            <div>
              {skills && (
                <h4 className="text-2xl font-semibold mb-3">Skills:</h4>
              )}
              <div className="flex flex-wrap gap-3">
                {skills.split(",").map((skill,idx) => (
                  <span key={idx} className="bg-slate-200 bg-opacity-50 border border-gray-400 px-3 rounded-xl">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div>
              {(degree1 || degree2) && (
                <h4 className="text-2xl font-semibold mb-3">Education:</h4>
              )}
              <h5 className="text-xl font-semibold">{degree1}</h5>
              <p className="mb-2">{institute1}</p>
              <h5 className="text-xl font-semibold">{degree2}</h5>
              <p className="mb-2">{institute2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
