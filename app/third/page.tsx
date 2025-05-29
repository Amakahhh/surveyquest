"use client";
import Image from "next/image";
import wood from "@/public/woodenbg.svg";
import logoAndText from "@/public/surveyquestlogoandtext.svg";
import step3 from "@/public/step3.svg";
import logoOnly from "@/public/onlylogo.svg";
import { useState } from "react";
import Link from "next/link";

function Third() {
  const [institution, setInstitution] = useState("Covenant University");
  const [role, setRole] = useState("Student");
  const [college, setCollege] = useState("");
  const [level, setLevel] = useState("");
  const [department, setDepartment] = useState("");
  const [course, setCourse] = useState("");
  const [departmentError, setDepartmentError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!department) {
      setDepartmentError("This field must be filled");
      return;
    }
    alert("Submitted");
  };
  const isFormValid = () => {
    return (
      institution !== "" &&
      role !== "" &&
      college !== "" &&
      level !== "" &&
      department !== ""
    );
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <p className="text-[#2E2F3266] absolute top-4 left-4 md:left-2/3 md:-translate-x-1/2">
        Telegram User ID: 1234567890
      </p>

      <div className="w-1/2 hidden md:flex  relative ">
        <Image
          src={wood}
          alt="Wood background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={logoAndText}
            alt="Logo with text"
            className="w-80 h-auto"
            priority
          />
        </div>
      </div>

      <div className="md:hidden w-full flex justify-center mt-4">
        <Image
          src={logoOnly}
          alt="Logo only"
          className="w-40 h-auto"
          priority
        />
      </div>

      <div className="flex-1 bg-[#FCFAF2] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Image src={step3} alt="Step 2" className="w-full h-20 mb-4" />
          <h1 className="text-2xl font-extrabold mb-6 text-[#B3935E]">
            Almost there...
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-black">Name of institution:</label>
              <select
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                className="border border-[#0c0b09] text-black rounded w-full py-2 px-3"
                required
              >
                <option value="Afe Babalola University">
                  Afe Babalola University
                </option>
                <option value="Babcock University">Babcock University</option>
                <option value="Bells University">Bells University</option>
                <option value="Bowen University">Bowen University</option>
                <option value="Covenant University">Covenant University</option>
                <option value="Landmark University">Landmark University</option>
                <option value="Lead city University">Lead city University</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="text-black">Role in institution:</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border border-[#0c0b09] text-black rounded w-full py-2 px-3"
                required
              >
                <option value="Student">Student</option>
                <option value="Student">Lecturer</option>
              </select>
            </div>
            <div className="flex mb-4 space-x-2">
              <div className="flex-1">
                <label className="text-black">College:</label>
                <select
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  className="border border-[#0c0b09] text-black rounded w-full py-2 px-3"
                  required
                >
                  <option value="">Select College</option>
                  <option value="CST">CLDS</option>
                  <option value="CST">CMSS</option>
                  <option value="CST">CST</option>
                  <option value="CST">COE</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="text-black">Level:</label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="border border-[#0c0b09] text-black rounded w-full py-2 px-3"
                  required
                >
                  <option value="">Select Level</option>
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="300">300</option>
                  <option value="400">400</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="text-black">Department:</label>
              <select
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                  setDepartmentError("");
                }}
                className={`border rounded w-full py-2 px-3 ${
                  departmentError ? "border-red-500" : "border-[#0c0b09]"
                } text-black`}
                required
              >
                <option value="">Select Department</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Electrical Engineering">
                  Electrical Engineering
                </option>
              </select>
              {departmentError && (
                <p className="text-red-500 text-sm mt-1">
                  {departmentError}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label className="text-black">Course:</label>
              <input
                type="text"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="border border-[#0c0b09] text-black rounded w-full py-2 px-3"
              />
            </div>
            <Link href="/fourth">
              <button
                type="submit"
                className={`bg-[#B3935E] text-white py-2 px-4 rounded w-full ${
                  !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!isFormValid()}
              >
                Next
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Third;