import type { Role } from "./roles";

export const DEMO_ACCOUNTS: {
  role: Role;
  email: string;
  password: string;
  name: string;
}[] = [
  {
    role: "admin",
    email: "admin@punetraffic.ai",
    password: "Admin@123",
    name: "Priya Deshmukh",
  },
  {
    role: "police",
    email: "police@punetraffic.ai",
    password: "Police@123",
    name: "Inspector Patil",
  },
  {
    role: "citizen",
    email: "citizen@punetraffic.ai",
    password: "Citizen@123",
    name: "Aarav Joshi",
  },
];
