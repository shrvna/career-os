export function generateCareers(profile) {
  if (!profile) return [];

  const { age, stage, interest } = profile;

  let base = [];

  if (interest === "Fashion") {
    base = [
      { title: "Fashion Designer", base: 80 },
      { title: "Brand Stylist", base: 75 },
      { title: "Content Creator", base: 70 }
    ];
  }

  if (interest === "Business") {
    base = [
      { title: "Marketing Executive", base: 85 },
      { title: "Entrepreneur", base: 70 },
      { title: "Sales Manager", base: 75 }
    ];
  }

  if (interest === "Tech") {
    base = [
      { title: "Software Developer", base: 85 },
      { title: "UI/UX Designer", base: 80 },
      { title: "Data Analyst", base: 75 }
    ];
  }

  if (interest === "Design") {
    base = [
      { title: "Graphic Designer", base: 80 },
      { title: "UI Designer", base: 78 }
    ];
  }

  if (interest === "Marketing") {
    base = [
      { title: "Digital Marketer", base: 85 },
      { title: "Brand Strategist", base: 78 }
    ];
  }

  return base.map((c) => {
    let match = c.base;

    if (age < 20) match += 5;
    if (age > 30) match -= 5;

    if (stage === "Student") match += 5;
    if (stage === "Working") match -= 2;

    return {
      ...c,
      match: Math.max(40, Math.min(95, match)),
      salary: "RM3K - RM10K",
      time: "1–3 years",
      difficulty: "Medium"
    };
  });
}