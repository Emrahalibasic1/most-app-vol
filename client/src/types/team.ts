import type { TeamId } from "./task";

export type MemberRole = "koordinator" | "senior" | "volonter" | "novi"
export type MemberStatus  = "aktivan" | "pauza" | "mentorisanje"



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