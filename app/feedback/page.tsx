"use client";

import { useState, useEffect } from "react";

export default function FeedbackPage() {
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("careerFeedbackHistory");

    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const handleFeedback = (type) => {
    const timestamp = new Date().toLocaleString();

    let entry = {
      type,
      time: timestamp
    };

    let updatedHistory = [...history, entry];

    setHistory(updatedHistory);
    localStorage.setItem(
      "careerFeedbackHistory",
      JSON.stringify(updatedHistory)
    );

    // system response logic (simulated learning system)
    if (type === "applied") {
      setMessage("System Update: Application recorded. Refining career match accuracy...");
    }

    if (type === "rejected") {
      setMessage("System Update: Rejection logged. Adjusting skill-gap model...");
    }

    if (type === "hired") {
      setMessage("System Update: Success recorded. Strengthening similar career paths...");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Career Feedback Loop
        </h1>

        <p className="text-gray-500 mt-2">
          Help Career OS learn from your real-world outcomes
        </p>
      </div>

      {/* BUTTONS */}
      <div className="grid md:grid-cols-3 gap-4 mt-8">

        <button
          onClick={() => handleFeedback("applied")}
          className="bg-black text-white p-4 rounded-xl hover:opacity-90 transition"
        >
          I Applied for a Job
        </button>

        <button
          onClick={() => handleFeedback("rejected")}
          className="bg-gray-800 text-white p-4 rounded-xl hover:opacity-90 transition"
        >
          I Got Rejected
        </button>

        <button
          onClick={() => handleFeedback("hired")}
          className="bg-green-600 text-white p-4 rounded-xl hover:opacity-90 transition"
        >
          I Got Hired
        </button>

      </div>

      {/* SYSTEM MESSAGE */}
      {message && (
        <div className="mt-8 p-4 bg-white border rounded-xl shadow-sm">
          <p className="text-sm">{message}</p>
        </div>
      )}

      {/* HISTORY LOG */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">
          Your Activity Log
        </h2>

        <div className="mt-4 space-y-2">
          {history.length === 0 && (
            <p className="text-gray-500 text-sm">
              No feedback recorded yet.
            </p>
          )}

          {history.map((item, index) => (
            <div
              key={index}
              className="bg-white border p-3 rounded-lg text-sm"
            >
              <p>
                <b>{item.type.toUpperCase()}</b>
              </p>
              <p className="text-gray-500">{item.time}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}