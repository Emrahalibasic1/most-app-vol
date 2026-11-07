import type { TeamId } from "./task";

export type MemberRole = "koordinator" | "senior" | "volonter" | "novi"
export type MemberStatus  = "aktivan" | "pauza" | "mentorisanje"
export type NewMember = Omit<TeamMember, "id">


export interface TeamMember{
    id: string;
    name : string;
    email : string;
    role : MemberRole;
    status : MemberStatus;
    taskCount : number;
    skills : string[];
} 
export interface Team {
    id : TeamId;
    coordinatorId : string;
    memberIds : string[];
    okrTitle : string;
    okrProgress : number;
       
}
export const ROLE_LABEL: Record<MemberRole, string> = {
  koordinator: "Koordinator",
  senior: "Senior volonter",
  volonter: "Volonter",
  novi: "Novi član",
};
export const STATUS_LABEL: Record<MemberStatus, string> = {
  aktivan: "Aktivan",
  pauza: "Pauza",
  mentorisanje: "Mentorisanje",
};
export const OVERLOAD_LIMIT = 4;