"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const [age, setAge] = useState("");
  const [stage, setStage] = useState("Student");
  const [interest, setInterest] = useState("Fashion");

  const handleSubmit = () => {
    // store simple data temporarily
    localStorage.setItem(
      "careerProfile",
      JSON.stringify({ age, stage, interest })
    );

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">

      <div className="w-full max-w-md border rounded-xl p-6">

        <h1 className="text-2xl font-bold mb-6">
          Tell us about you
        </h1>

        {/* AGE */}
        <input
          type="number"
          placeholder="Enter your age"
          className="w-full border p-2 mb-4 rounded"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        {/* STAGE */}
        <select
          className="w-full border p-2 mb-4 rounded"
          value={stage}
          onChange={(e) => setStage(e.target.value)}
        >
          <option>Student</option>
          <option>Graduate</option>
          <option>Working</option>
        </select>

        {/* INTEREST */}
        <select
          className="w-full border p-2 mb-4 rounded"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        >
          <option>Fashion</option>
          <option>Business</option>
          <option>Tech</option>
          <option>Design</option>
        </select>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white p-2 rounded"
        >
          Generate Career Paths
        </button>

      </div>
    </div>
  );
}