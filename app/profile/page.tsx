"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const [form, setForm] = useState({
    age: "",
    stage: "Student",
    interest: "Fashion"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    localStorage.setItem("careerProfile", JSON.stringify(form));
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-white">

      <div className="w-full max-w-md border rounded-2xl p-6 shadow-sm">

        <h1 className="text-2xl font-bold">
          Build Your Career Profile
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          Career OS will map your possible future paths
        </p>

        {/* AGE */}
        <div className="mt-5">
          <label className="text-sm font-medium">Age</label>
          <input
            name="age"
            type="number"
            placeholder="Enter your age"
            value={form.age}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        {/* STAGE */}
        <div className="mt-4">
          <label className="text-sm font-medium">Current Stage</label>
          <select
            name="stage"
            value={form.stage}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          >
            <option>Student</option>
            <option>Graduate</option>
            <option>Working</option>
          </select>
        </div>

        {/* INTEREST */}
        <div className="mt-4">
          <label className="text-sm font-medium">Career Interest</label>
          <select
            name="interest"
            value={form.interest}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          >
            <option>Fashion</option>
            <option>Business</option>
            <option>Tech</option>
            <option>Design</option>
            <option>Marketing</option>
          </select>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-black text-white p-3 rounded-xl hover:opacity-90"
        >
          Generate My Career Paths
        </button>

      </div>
    </div>
  );
}