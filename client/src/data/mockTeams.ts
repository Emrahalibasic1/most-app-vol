import type { Team, TeamMember } from "../types/team";

export const TEAM_MEMBERS: TeamMember[] = [
  // IT Inženjering
  { id: "m1", name: "Denis Kovač", email: "denis.k@volonteri.ba", role: "koordinator", status: "aktivan", taskCount: 3, skills: ["React", "Node.js", "Arhitektura"] },
  { id: "m2", name: "Kenan Mujić", email: "kenan.m@volonteri.ba", role: "volonter", status: "aktivan", taskCount: 5, skills: ["Python", "PostgreSQL", "DevOps"] },
  { id: "m3", name: "Damir Velić", email: "damir.v@volonteri.ba", role: "volonter", status: "aktivan", taskCount: 2, skills: ["Tailwind", "HTML/CSS", "TypeScript"] },
  { id: "m4", name: "Faris Delić", email: "faris.d@volonteri.ba", role: "novi", status: "mentorisanje", taskCount: 1, skills: ["QA Testiranje", "Git"] },

  // Dizajn tim
  { id: "m5", name: "Lejla Imamović", email: "lejla.i@volonteri.ba", role: "koordinator", status: "aktivan", taskCount: 3, skills: ["Figma", "Brending", "Art Direction"] },
  { id: "m6", name: "Emina Salihović", email: "emina.s@volonteri.ba", role: "volonter", status: "aktivan", taskCount: 4, skills: ["Ilustracije", "Social Media"] },
  { id: "m7", name: "Amar Čolić", email: "amar.c@volonteri.ba", role: "volonter", status: "aktivan", taskCount: 2, skills: ["Print priprema", "InDesign"] },

  // PR & Komunikacije
  { id: "m8", name: "Sara Mešić", email: "sara.m@volonteri.ba", role: "koordinator", status: "aktivan", taskCount: 3, skills: ["Strategija", "Društvene mreže"] },
  { id: "m9", name: "Hana Omerović", email: "hana.o@volonteri.ba", role: "senior", status: "aktivan", taskCount: 2, skills: ["Copywriting", "Mediji", "Storytelling"] },

  // HR & Volonteri
  { id: "m10", name: "Haris Tahirović", email: "haris.t@volonteri.ba", role: "koordinator", status: "aktivan", taskCount: 2, skills: ["Onboarding", "Regrutacija"] },
  { id: "m11", name: "Medina Karić", email: "medina.k@volonteri.ba", role: "volonter", status: "pauza", taskCount: 0, skills: ["Komunikacija", "Organizacija"] },

  // Edu & Radionice
  { id: "m12", name: "Nejra Bešić", email: "nejra.b@volonteri.ba", role: "koordinator", status: "aktivan", taskCount: 2, skills: ["Radionice", "Mentorstvo"] },
  { id: "m13", name: "Mirza Begić", email: "mirza.b@volonteri.ba", role: "volonter", status: "aktivan", taskCount: 1, skills: ["Prezentacije", "Edukacija"] },
];

export const TEAMS_DATA: Team[] = [
  { id: "it", coordinatorId: "m1", memberIds: ["m1", "m2", "m3", "m4"], okrTitle: "Lansiranje web platforme", okrProgress: 88 },
  { id: "dizajn", coordinatorId: "m5", memberIds: ["m5", "m6", "m7"], okrTitle: "Vizuelni identitet i info dan", okrProgress: 64 },
  { id: "pr", coordinatorId: "m8", memberIds: ["m8", "m9"], okrTitle: "Doseg na društvenim mrežama +40%", okrProgress: 92 },
  { id: "hr", coordinatorId: "m10", memberIds: ["m10", "m11"], okrTitle: "Onboarding novih volontera", okrProgress: 55 },
  { id: "edu", coordinatorId: "m12", memberIds: ["m12", "m13"], okrTitle: "Serija radionica za mlade", okrProgress: 40 },
];