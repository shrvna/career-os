"use client";

import { useEffect, useState } from "react";

export default function RoadmapPage() {
  const [profile, setProfile] = useState(null);
  const [career, setCareer] = useState(null);

  useEffect(() => {
    const p = localStorage.getItem("careerProfile");
    const c = localStorage.getItem("selectedCareer");

    if (p) setProfile(JSON.parse(p));
    if (c) setCareer(JSON.parse(c));
  }, []);

  const getRoadmap = () => {
    const interest =
      career?.title || profile?.interest || "General";

    // -------------------------
    // FASHION PATH
    // -------------------------
    if (
      interest.includes("Fashion") ||
      interest.includes("Stylist") ||
      interest.includes("Designer")
    ) {
      return [
        {
          stage: "Discovery (15–18)",
          points: [
            "Learn sewing & fashion basics",
            "Build personal style portfolio",
            "Social media exposure",
            "Explore creative identity"
          ]
        },
        {
          stage: "Young Adult (18–22)",
          points: [
            "Fashion school / internship",
            "Freelance styling",
            "First paid clients",
            "Brand building basics"
          ]
        },
        {
          stage: "Early Career (23–34)",
          points: [
            "Junior designer / assistant designer",
            "Work with fashion brands",
            "Develop signature style",
            "Launch small collections"
          ]
        },
        {
          stage: "Mid Career (35–44)",
          points: [
            "Creative director or lead designer",
            "Own fashion label",
            "Industry recognition",
            "Mentor new designers"
          ]
        }
      ];
    }

    // -------------------------
    // BUSINESS PATH
    // -------------------------
    if (
      interest.includes("Business") ||
      interest.includes("Marketing") ||
      interest.includes("Entrepreneur")
    ) {
      return [
        {
          stage: "Discovery (15–18)",
          points: [
            "Learn communication skills",
            "Basic finance understanding",
            "Join school business clubs",
            "Explore entrepreneurship mindset"
          ]
        },
        {
          stage: "Young Adult (18–22)",
          points: [
            "Internships in companies",
            "Start small side business",
            "Networking & LinkedIn growth",
            "Business studies or experience"
          ]
        },
        {
          stage: "Early Career (23–34)",
          points: [
            "Marketing / sales / analyst roles",
            "Build professional experience",
            "Increase income stability",
            "Develop leadership skills"
          ]
        },
        {
          stage: "Mid Career (35–44)",
          points: [
            "Manager / director roles",
            "Start or scale business",
            "Investments & expansion",
            "Mentor others"
          ]
        }
      ];
    }

    // -------------------------
    // TECH PATH
    // -------------------------
    if (
      interest.includes("Tech") ||
      interest.includes("Developer") ||
      interest.includes("UI")
    ) {
      return [
        {
          stage: "Discovery (15–18)",
          points: [
            "Learn coding basics",
            "Build small projects",
            "Understand UI/UX principles",
            "Explore problem solving"
          ]
        },
        {
          stage: "Young Adult (18–22)",
          points: [
            "Computer science / bootcamp",
            "Internships in tech companies",
            "Build portfolio projects",
            "Join hackathons"
          ]
        },
        {
          stage: "Early Career (23–34)",
          points: [
            "Software engineer / designer",
            "Work on real products",
            "Specialize in field",
            "Collaborate in teams"
          ]
        },
        {
          stage: "Mid Career (35–44)",
          points: [
            "Senior engineer / tech lead",
            "Architect or product lead",
            "Start startup opportunities",
            "Mentor juniors"
          ]
        }
      ];
    }

    // -------------------------
    // DEFAULT
    // -------------------------
    return [
      {
        stage: "Discovery",
        points: [
          "Explore interests",
          "Build foundational skills"
        ]
      }
    ];
  };

  const roadmap = getRoadmap();

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-bold">
          Career Roadmap
        </h1>

        <p className="text-gray-500 mt-2">
          AI-generated personalized career journey
        </p>
      </div>

      {/* CONTEXT */}
      <div className="mt-6 bg-white border rounded-2xl p-5">
        <p className="text-sm text-gray-500">
          Based on:
        </p>

        <p className="font-medium mt-1">
          {career
            ? career.title
            : profile?.interest || "General Path"}
        </p>
      </div>

      {/* ROADMAP */}
      <div className="mt-10 space-y-8">

        {roadmap.map((step, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl p-6 shadow-sm"
          >

            <h2 className="text-xl font-semibold">
              {step.stage}
            </h2>

            <div className="mt-4 space-y-2 text-gray-600">
              {step.points.map((p, i) => (
                <div key={i} className="flex gap-2">
                  <span>•</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}