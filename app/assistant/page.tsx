"use client";

import { useEffect, useState } from "react";
import { generateCareers } from "@/lib/careerEngine";

export default function AssistantPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [profile, setProfile] = useState(null);
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("careerProfile");

    if (data) {
      const parsed = JSON.parse(data);
      setProfile(parsed);

      const generated = generateCareers(parsed);
      setCareers(generated);
    }

    setMessages([
      {
        role: "bot",
        text:
          "Hi 👋 I'm your Career OS Co-Pilot. I can help you understand careers, skills, salary expectations, future pathways, and what fits you best.",
        suggestions: [
          "What career suits me?",
          "What skills should I learn?",
          "Expected salary?",
          "What is my future path?"
        ]
      }
    ]);
  }, []);

  const getAIResponse = (question) => {
    const lower = question.toLowerCase();

    if (!profile) {
      return {
        text:
          "Please complete your profile first so I can personalize recommendations.",
        suggestions: ["Go to profile"]
      };
    }

    const topCareer = careers[0];

    // BEST CAREER
    if (
      lower.includes("career") ||
      lower.includes("suitable") ||
      lower.includes("best for me") ||
      lower.includes("what suits me")
    ) {
      return {
        text: `Based on your profile (${profile.stage}, ${profile.interest}), your strongest match right now is ${topCareer?.title} (${topCareer?.match}% match). This recommendation aligns with your interests, career stage, and long-term growth potential.`,
        suggestions: [
          "Why this career?",
          "Expected salary?",
          "What skills should I learn?"
        ]
      };
    }

    // WHY
    if (
      lower.includes("why") ||
      lower.includes("reason")
    ) {
      return {
        text: `Career OS recommends ${topCareer?.title} because it closely matches your ${profile.interest} interest and current ${profile.stage} stage. Users with similar profiles often grow well in this pathway.`,
        suggestions: [
          "Future path?",
          "What skills matter?"
        ]
      };
    }

    // SALARY
    if (
      lower.includes("salary") ||
      lower.includes("pay") ||
      lower.includes("income")
    ) {
      return {
        text: `For your recommended pathways, salary typically ranges between RM3K–RM10K+ depending on specialization, experience, and market demand across Asia.`,
        suggestions: [
          "Highest paying path?",
          "Future path?"
        ]
      };
    }

    // SKILLS
    if (
      lower.includes("skill") ||
      lower.includes("learn") ||
      lower.includes("improve")
    ) {
      let skillReply = "";

      if (profile.interest === "Fashion") {
        skillReply =
          "Recommended skills: sewing, pattern making, portfolio building, branding, fashion illustration, and digital marketing.";
      }

      if (profile.interest === "Business") {
        skillReply =
          "Recommended skills: marketing, negotiation, leadership, analytics, communication, and networking.";
      }

      if (profile.interest === "Tech") {
        skillReply =
          "Recommended skills: coding, UI/UX, software tools, problem-solving, and portfolio projects.";
      }

      return {
        text: skillReply,
        suggestions: [
          "Best career for me?",
          "Future salary?"
        ]
      };
    }

    // FUTURE PATH
    if (
      lower.includes("future") ||
      lower.includes("path") ||
      lower.includes("trajectory")
    ) {
      return {
        text: `Your likely progression looks like: Learning → Skill Building → Entry Role → Specialization → Leadership or Entrepreneurship. Your strongest projected path currently aligns with ${topCareer?.title}.`,
        suggestions: [
          "What skills should I learn?",
          "How long will it take?"
        ]
      };
    }

    // TIME
    if (
      lower.includes("how long") ||
      lower.includes("time")
    ) {
      return {
        text:
          "Most career paths take around 1–3 years to gain traction and 5–10 years for strong specialization or leadership roles.",
        suggestions: [
          "Future salary?",
          "Best path for me?"
        ]
      };
    }

    // FASHION VS BUSINESS
    if (
      lower.includes("fashion") &&
      lower.includes("business")
    ) {
      return {
        text:
          "Fashion aligns more strongly with your current profile, while business strengthens long-term stability and entrepreneurship potential. Combining both may create the strongest outcome.",
        suggestions: [
          "What should I study?",
          "Future path?"
        ]
      };
    }

    // DEFAULT RESPONSE
    return {
      text: `Based on your profile (${profile.age}, ${profile.stage}, ${profile.interest}), I recommend exploring your Dashboard recommendations first. Try asking me about career fit, salary, skills, or your future path.`,
      suggestions: [
        "What career suits me?",
        "Expected salary?",
        "Future path?"
      ]
    };
  };

  const sendMessage = (text = input) => {
    if (!text.trim()) return;

    const userMessage = {
      role: "user",
      text
    };

    const ai = getAIResponse(text);

    const botMessage = {
      role: "bot",
      text: ai.text,
      suggestions: ai.suggestions
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      botMessage
    ]);

    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-bold">
          Career OS Co-Pilot
        </h1>

        <p className="text-gray-500 mt-2">
          Your AI-powered career guide
        </p>
      </div>

      {/* CHAT AREA */}
      <div className="mt-6 bg-white border rounded-2xl p-5 h-[500px] overflow-y-auto shadow-sm">

        {messages.map((msg, i) => (
          <div key={i} className="mb-5">

            <div
              className={`flex ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                  msg.role === "user"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            </div>

            {/* SUGGESTIONS */}
            {msg.role === "bot" &&
              msg.suggestions && (
                <div className="flex flex-wrap gap-2 mt-2 ml-2">
                  {msg.suggestions.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => sendMessage(s)}
                      className="text-xs bg-gray-200 px-3 py-2 rounded-full hover:bg-gray-300 transition"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="mt-4 flex gap-3">

        <input
          type="text"
          placeholder="Ask about your career..."
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          className="flex-1 border rounded-xl px-4 py-3 bg-white"
        />

        <button
          onClick={() => sendMessage()}
          className="bg-black text-white px-6 rounded-xl hover:opacity-90 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}