"use client";

import { useEffect, useState } from "react";
import { generateCareers } from "@/lib/careerEngine";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [careers, setCareers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("careerProfile");

    if (data) {
      const parsed = JSON.parse(data);

      setProfile(parsed);

      const results = generateCareers(parsed);
      setCareers(results);
    }
  }, []);

  const handleExplore = (job) => {
    // save selected career for roadmap page
    localStorage.setItem("selectedCareer", JSON.stringify(job));

    // go to roadmap
    router.push("/roadmap");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Career Intelligence Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          AI-powered career recommendations with explainable reasoning
        </p>
      </div>

      {/* PROFILE CARD */}
      {profile && (
        <div className="mt-6 bg-white border rounded-2xl p-5 shadow-sm">

          <h2 className="font-semibold text-lg mb-3">
            Your Profile
          </h2>

          <div className="grid md:grid-cols-3 gap-4 text-sm">

            <div>
              <p className="text-gray-500">Age</p>
              <p className="font-medium">{profile.age}</p>
            </div>

            <div>
              <p className="text-gray-500">Stage</p>
              <p className="font-medium">{profile.stage}</p>
            </div>

            <div>
              <p className="text-gray-500">Interest</p>
              <p className="font-medium">{profile.interest}</p>
            </div>

          </div>
        </div>
      )}

      {/* ROADMAP CTA */}
      {profile && (
        <div className="mt-6 bg-gradient-to-r from-black to-gray-800 text-white p-6 rounded-2xl shadow-sm">

          <h2 className="text-xl font-semibold">
            Your Career Navigation System
          </h2>

          <p className="text-gray-300 mt-2">
            Explore your AI-generated career journey from student → leadership
          </p>

          <Link href="/roadmap">
            <button className="mt-4 bg-white text-black px-5 py-2 rounded-xl font-medium hover:opacity-90 transition">
              View Full Roadmap →
            </button>
          </Link>

        </div>
      )}

      {/* CAREER CARDS */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">

        {careers.map((job, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
          >

            {/* TITLE + MATCH */}
            <div className="flex justify-between items-start">

              <h2 className="text-xl font-semibold">
                {job.title}
              </h2>

              <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
                {job.match}%
              </span>

            </div>

            {/* DETAILS */}
            <div className="mt-4 text-sm text-gray-600 space-y-1">
              <p><b>Salary:</b> {job.salary}</p>
              <p><b>Time:</b> {job.time}</p>
              <p><b>Difficulty:</b> {job.difficulty}</p>
            </div>

            {/* WHY THIS MATCH */}
            {job.reasons && (
              <div className="mt-4 bg-gray-50 p-4 rounded-xl">
                <p className="font-semibold text-sm mb-2">
                  Why this matches you:
                </p>

                <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
                  {job.reasons.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* BUTTON (FIXED FUNCTIONALITY) */}
            <button
              onClick={() => handleExplore(job)}
              className="mt-5 w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition"
            >
              Explore Career Path
            </button>

          </div>
        ))}

      </div>

      {/* EMPTY STATE */}
      {!profile && (
        <div className="mt-10 bg-white border rounded-2xl p-8 text-center">
          <p className="text-gray-500">
            No profile found. Please complete onboarding first.
          </p>
        </div>
      )}

    </div>
  );
}