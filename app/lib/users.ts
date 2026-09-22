import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { DEMO_ACCOUNTS, type PublicUser, type Role } from "./roles";
import { hashPassword, verifyPassword } from "./passwords";

export type StoredUser = PublicUser & {
  passwordHash: string;
  createdAt: string;
};

export type RegisterInput = {
  name: string;
  email: string;
  password: string;
  role: Role;
  badgeNumber?: string;
  department?: string;
  locality?: string;
};

const USERS_PATH = path.join(process.cwd(), "data", "users.json");
let memoryUsers: StoredUser[] | null = null;

function toPublicUser(user: StoredUser): PublicUser {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    badgeNumber: user.badgeNumber,
    department: user.department,
    locality: user.locality,
  };
}

function createDemoUser(account: (typeof DEMO_ACCOUNTS)[number]): StoredUser {
  return {
    id: `demo-${account.role}`,
    name: account.name,
    email: account.email,
    role: account.role,
    passwordHash: hashPassword(account.password),
    createdAt: new Date().toISOString(),
    department: account.role === "admin" ? "PMC Traffic Control" : undefined,
    badgeNumber: account.role === "police" ? "PUN-TRF-1024" : undefined,
    locality: account.role === "citizen" ? "Kothrud" : undefined,
  };
}

function readFromDisk(): StoredUser[] | null {
  try {
    if (!existsSync(USERS_PATH)) return null;
    const parsed = JSON.parse(readFileSync(USERS_PATH, "utf8")) as StoredUser[];
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function persist(users: StoredUser[]) {
  memoryUsers = users;
  try {
    mkdirSync(path.dirname(USERS_PATH), { recursive: true });
    writeFileSync(USERS_PATH, JSON.stringify(users, null, 2));
  } catch {
    // Keep the in-memory list if the file cannot be written.
  }
}

function loadUsers() {
  if (memoryUsers) return memoryUsers;
  const fromDisk = readFromDisk();
  const users = fromDisk?.length ? fromDisk : [];

  for (const account of DEMO_ACCOUNTS) {
    if (!users.some((user) => user.email === account.email)) {
      users.push(createDemoUser(account));
    }
  }

  persist(users);
  return users;
}

export function findUserByEmail(email: string) {
  return loadUsers().find((user) => user.email === email.toLowerCase()) ?? null;
}

export function authenticateUser(email: string, password: string) {
  const user = findUserByEmail(email);
  if (!user || !verifyPassword(password, user.passwordHash)) return null;
  return toPublicUser(user);
}

export function registerUser(input: RegisterInput) {
  const users = loadUsers();
  const email = input.email.trim().toLowerCase();
  if (users.some((user) => user.email === email)) {
    throw new Error("An account with this email already exists.");
  }

  const user: StoredUser = {
    id: `user-${Date.now()}`,
    name: input.name.trim(),
    email,
    role: input.role,
    passwordHash: hashPassword(input.password),
    createdAt: new Date().toISOString(),
    badgeNumber: input.badgeNumber?.trim() || undefined,
    department: input.department?.trim() || undefined,
    locality: input.locality?.trim() || undefined,
  };

  persist([...users, user]);
  return toPublicUser(user);
}
