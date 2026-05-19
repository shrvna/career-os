"use client";

import { useEffect, useState } from "react";

export default function TwinsPage() {
  const [profile, setProfile] = useState(null);
  const [twins, setTwins] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("careerProfile");

    if (data) {
      const parsed = JSON.parse(data);
      setProfile(parsed);

      // Generate twins based on interest
      generateTwins(parsed);
    }
  }, []);

  const generateTwins = (profile) => {
    let result = [];

    const interest = profile?.interest;

    if (interest === "Fashion") {
      result = [
        {
          name: "Career Twin A",
          path: "Fashion Designer → Brand Builder",
          outcome: "Creative growth, early instability, long-term brand success"
        },
        {
          name: "Career Twin B",
          path: "Fashion → Marketing Shift",
          outcome: "Stable corporate career with steady income"
        },
        {
          name: "Career Twin C",
          path: "Freelance Stylist",
          outcome: "Flexible lifestyle but inconsistent income"
        }
      ];
    }

    if (interest === "Business") {
      result = [
        {
          name: "Career Twin A",
          path: "Marketing Executive → Manager",
          outcome: "Fast corporate growth trajectory"
        },
        {
          name: "Career Twin B",
          path: "Startup Founder",
          outcome: "High risk, high reward journey"
        },
        {
          name: "Career Twin C",
          path: "Sales → Consulting",
          outcome: "Stable income with strong network growth"
        }
      ];
    }

    if (interest === "Tech") {
      result = [
        {
          name: "Career Twin A",
          path: "Software Developer",
          outcome: "High demand, strong salary growth"
        },
        {
          name: "Career Twin B",
          path: "UI/UX Designer",
          outcome: "Creative + technical hybrid career"
        },
        {
          name: "Career Twin C",
          path: "Data Analyst → Product Role",
          outcome: "Analytical path leading to leadership roles"
        }
      ];
    }

    if (interest === "Design") {
      result = [
        {
          name: "Career Twin A",
          path: "Graphic Designer",
          outcome: "Creative portfolio-based career"
        },
        {
          name: "Career Twin B",
          path: "UI/UX Designer",
          outcome: "High demand digital design career"
        }
      ];
    }

    if (interest === "Marketing") {
      result = [
        {
          name: "Career Twin A",
          path: "Content Marketer",
          outcome: "Strong digital growth opportunities"
        },
        {
          name: "Career Twin B",
          path: "Brand Strategist",
          outcome: "Corporate leadership potential"
        }
      ];
    }

    setTwins(result);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Career Twins
        </h1>

        <p className="text-gray-500 mt-2">
          People like you and where their careers went
        </p>
      </div>

      {/* PROFILE SUMMARY */}
      {profile ? (
        <div className="mt-6 bg-white border rounded-xl p-5 shadow-sm">
          <h2 className="font-semibold mb-2">Your Profile</h2>

          <p><b>Age:</b> {profile.age}</p>
          <p><b>Stage:</b> {profile.stage}</p>
          <p><b>Interest:</b> {profile.interest}</p>
        </div>
      ) : (
        <div className="mt-6 text-gray-500">
          No profile found. Please complete onboarding first.
        </div>
      )}

      {/* TWINS GRID */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">

        {twins.map((t, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >

            <h2 className="text-xl font-semibold">
              {t.name}
            </h2>

            <p className="mt-3 font-medium">
              {t.path}
            </p>

            <p className="mt-2 text-sm text-gray-600">
              {t.outcome}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}