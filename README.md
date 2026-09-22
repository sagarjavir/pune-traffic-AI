# Pune Traffic AI

Next.js demo of an AI traffic control room for Pune: live congestion, adaptive signals, accident dispatch, violations, parking, and a citizen portal.

This is a **frontend demo with mock Pune data**. It is not an official PMC / traffic-police system.

## Run locally

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Set `AUTH_SECRET` in `.env.local` to any long random string.

## Demo logins

Use the **Use** buttons on `/login`, or sign in with:

| Role | Email | Password | Can open |
| --- | --- | --- | --- |
| Admin | `admin@punetraffic.ai` | `Admin@123` | All modules, including signals and analytics |
| Police | `police@punetraffic.ai` | `Police@123` | Accidents, violations, emergency, traffic, parking |
| Citizen | `citizen@punetraffic.ai` | `Citizen@123` | Dashboard, live traffic, parking, citizen portal |

Register at `/register` as **Police** or **Citizen**. Admin cannot be self-registered; use the demo Admin account.

New registrations are stored in `data/users.json` on this machine only. They will not appear after a fresh deploy.

## Main routes

- `/` home
- `/login` and `/register`
- `/dashboard` role home
- `/live/traffic` congestion map
- `/accident` AI accident desk and dispatch
- `/emergency` green corridor (updates after dispatch)
- `/signals` `/violations` `/parking` `/analytics` `/citizen`

## Stack

Next.js 16, React 19, Tailwind CSS, Leaflet/OSM maps, cookie sessions.

## GitHub

Remote: `https://github.com/sagarjavir/pune-traffic-AI.git`
