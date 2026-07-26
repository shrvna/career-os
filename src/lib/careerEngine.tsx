export function generateCareers(profile: any) { 
  if (!profile) return [];

  const { age, stage, interest } = profile;

  let base: any[] = []; 

  // --------------------
  // CAREER MODELS
  // --------------------

  if (interest === "Fashion") {
    base = [
      { title: "Fashion Designer", base: 80 },
      { title: "Brand Stylist", base: 75 },
      { title: "Content Creator", base: 70 },
      { title: "Boutique Owner", base: 65 }
    ];
  }

  if (interest === "Business") {
    base = [
      { title: "Marketing Executive", base: 85 },
      { title: "Entrepreneur", base: 70 },
      { title: "Sales Manager", base: 75 },
      { title: "Business Analyst", base: 68 }
    ];
  }

  if (interest === "Tech") {
    base = [
      { title: "Software Developer", base: 88 },
      { title: "UI/UX Designer", base: 82 },
      { title: "Data Analyst", base: 76 },
      { title: "Product Manager", base: 72 }
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
      { title: "Brand Strategist", base: 80 }
    ];
  }

  // --------------------
  // INTELLIGENCE LAYER
  // --------------------

  return base.map((c) => {
    let match = c.base;
    let reasons = [];

    // AGE LOGIC
    if (age < 20) {
      match += 5;
      reasons.push("Early stage → high exploration potential");
    }

    if (age >= 20 && age <= 30) {
      match += 3;
      reasons.push("Prime career exploration & skill-building phase");
    }

    if (age > 30) {
      match -= 5;
      reasons.push("Later entry → requires faster specialization");
    }

    // STAGE LOGIC
    if (stage === "Student") {
      match += 5;
      reasons.push("Student profile → strong learning alignment");
    }

    if (stage === "Graduate") {
      match += 3;
      reasons.push("Graduate stage → transition-ready profile");
    }

    if (stage === "Working") {
      match -= 2;
      reasons.push("Existing work experience shifts optimization path");
    }

    return {
      ...c,
      match: Math.max(40, Math.min(95, match)),
      salary: "RM3K - RM10K",
      time: "1–3 years",
      difficulty: "Medium",
      reasons
    };
  });
}