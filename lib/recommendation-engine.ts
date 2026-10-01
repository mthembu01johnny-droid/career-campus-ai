export interface StudentProfile {
  full_name: string;
  major: string;
  interests: string[];
  career_goals: string;
}

export interface CareerRole {
  id: string;
  role_name: string;
  required_skills: string[];
  industry: string;
  salary_range: string;
}

const CAREER_DATABASE: CareerRole[] = [
  { id: '1', role_name: 'Software Engineer', required_skills: ['Programming', 'Problem Solving', 'System Design'], industry: 'Technology', salary_range: '120k-200k' },
  { id: '2', role_name: 'Product Manager', required_skills: ['Strategy', 'Leadership', 'Analytics'], industry: 'Technology', salary_range: '130k-220k' },
  { id: '3', role_name: 'Data Scientist', required_skills: ['Statistics', 'Machine Learning', 'Python'], industry: 'Technology', salary_range: '110k-180k' },
  { id: '4', role_name: 'UX Designer', required_skills: ['Design', 'Research', 'Communication'], industry: 'Technology', salary_range: '100k-170k' },
  { id: '5', role_name: 'Business Analyst', required_skills: ['Analytics', 'Communication', 'SQL'], industry: 'Technology', salary_range: '90k-150k' },
  { id: '6', role_name: 'Management Consultant', required_skills: ['Strategy', 'Leadership', 'Communication'], industry: 'Consulting', salary_range: '100k-200k' },
  { id: '7', role_name: 'Investment Banker', required_skills: ['Finance', 'Analysis', 'Leadership'], industry: 'Finance', salary_range: '120k-300k' },
  { id: '8', role_name: 'Marketing Manager', required_skills: ['Strategy', 'Communication', 'Analytics'], industry: 'Marketing', salary_range: '80k-140k' },
];

const SKILL_KEYWORDS: { [key: string]: string[] } = {
  'Programming': ['CS', 'computer science', 'software', 'coding', 'code', 'developer', 'engineer'],
  'Design': ['design', 'ux', 'ui', 'graphic', 'visual', 'creative'],
  'Analytics': ['analytics', 'data', 'statistics', 'math', 'numbers', 'analysis'],
  'Leadership': ['management', 'leadership', 'management', 'team', 'leader'],
  'Finance': ['finance', 'accounting', 'business', 'economics', 'financial'],
  'Strategy': ['strategy', 'business', 'planning', 'entrepreneurship'],
  'Communication': ['communication', 'writing', 'presentation', 'business', 'english'],
  'Problem Solving': ['problem solving', 'critical thinking', 'puzzle', 'logic'],
  'System Design': ['system', 'architecture', 'design', 'scale', 'infrastructure'],
  'Machine Learning': ['machine learning', 'ai', 'artificial intelligence', 'algorithms', 'neural'],
  'Python': ['python', 'programming', 'coding', 'script'],
  'SQL': ['sql', 'database', 'data', 'query'],
  'Research': ['research', 'analysis', 'study', 'investigation'],
};

function extractSkillsFromText(text: string): string[] {
  const lowerText = text.toLowerCase();
  const extractedSkills: string[] = [];

  for (const [skill, keywords] of Object.entries(SKILL_KEYWORDS)) {
    if (keywords.some((keyword) => lowerText.includes(keyword))) {
      extractedSkills.push(skill);
    }
  }

  return Array.from(new Set(extractedSkills));
}

function calculateFitScore(studentSkills: string[], roleRequiredSkills: string[]): number {
  if (roleRequiredSkills.length === 0) return 0;
  const matchedSkills = roleRequiredSkills.filter((skill) => studentSkills.includes(skill)).length;
  return matchedSkills / roleRequiredSkills.length;
}

function rankInterestMatch(studentInterests: string[], roleIndustry: string): number {
  const interestsLower = studentInterests.map((i) => i.toLowerCase()).join(' ');
  if (interestsLower.includes(roleIndustry.toLowerCase())) return 0.5;
  return 0;
}

export function generateRecommendations(profile: StudentProfile): Array<{ role_name: string; fit_score: number; reason: string }> {
  const extractedSkills = extractSkillsFromText(`${profile.major} ${profile.interests.join(' ')} ${profile.career_goals}`);
  const recommendations = CAREER_DATABASE.map((role) => {
    const skillFit = calculateFitScore(extractedSkills, role.required_skills);
    const interestFit = rankInterestMatch(profile.interests, role.industry);
    const fitScore = (skillFit * 0.7 + interestFit * 0.3) * (0.5 + Math.random() * 0.5);
    return {
      role_name: role.role_name,
      fit_score: Math.min(fitScore, 1),
      reason: `Based on your ${profile.major} background and interest in ${profile.interests[0] || 'technology'}, this role aligns with your goals.`,
    };
  }).filter((r) => r.fit_score > 0.3).sort((a, b) => b.fit_score - a.fit_score).slice(0, 5);
  return recommendations;
}
