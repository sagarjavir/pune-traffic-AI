export const ROLES = ["admin", "police", "citizen"] as const;
export type Role = (typeof ROLES)[number];

export type PublicUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
  badgeNumber?: string;
  department?: string;
  locality?: string;
};

export const ROLE_HOME: Record<Role, string> = {
  admin: "/dashboard",
  police: "/dashboard",
  citizen: "/dashboard",
};

export const ROLE_LABEL: Record<Role, string> = {
  admin: "Admin",
  police: "Police",
  citizen: "Citizen",
};

const ROLE_ROUTES: Record<Role, string[]> = {
  admin: [
    "/dashboard",
    "/live/traffic",
    "/signals",
    "/accident",
    "/violations",
    "/emergency",
    "/parking",
    "/analytics",
    "/citizen",
  ],
  police: [
    "/dashboard",
    "/live/traffic",
    "/accident",
    "/violations",
    "/emergency",
    "/parking",
    "/citizen",
  ],
  citizen: ["/dashboard", "/live/traffic", "/parking", "/citizen"],
};

export function canAccess(role: Role, pathname: string) {
  return ROLE_ROUTES[role].some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
}

export function navItemsForRole(role: Role | null) {
  const items = [
    { name: "Home", path: "/", roles: null },
    { name: "Dashboard", path: "/dashboard", roles: ["admin", "police", "citizen"] },
    { name: "Live Traffic", path: "/live/traffic", roles: ["admin", "police", "citizen"] },
    { name: "Signals", path: "/signals", roles: ["admin"] },
    { name: "Accidents", path: "/accident", roles: ["admin", "police"] },
    { name: "Violations", path: "/violations", roles: ["admin", "police"] },
    { name: "Emergency", path: "/emergency", roles: ["admin", "police"] },
    { name: "Parking", path: "/parking", roles: ["admin", "police", "citizen"] },
    { name: "Analytics", path: "/analytics", roles: ["admin"] },
    { name: "Citizen", path: "/citizen", roles: ["admin", "police", "citizen"] },
  ] as const;

  return items.filter((item) => {
    if (item.roles === null) return true;
    if (!role) return false;
    return (item.roles as readonly Role[]).includes(role);
  });
}

export const DEMO_ACCOUNTS = [
  {
    role: "admin" as const,
    email: "admin@punetraffic.ai",
    password: "Admin@123",
    name: "Priya Deshmukh",
  },
  {
    role: "police" as const,
    email: "police@punetraffic.ai",
    password: "Police@123",
    name: "Inspector Patil",
  },
  {
    role: "citizen" as const,
    email: "citizen@punetraffic.ai",
    password: "Citizen@123",
    name: "Aarav Joshi",
  },
];
