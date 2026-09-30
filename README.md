# Kade Government Hospital Client Relations

A mobile-first QR-based Client Relations Statement System for Kade Government Hospital.

## Features
- Client and staff statement forms with server-side validation.
- Review step, declaration confirmation, reference number, and success page.
- PostgreSQL persistence, Resend email delivery, Helmet, CORS, request limits, and rate limiting.
- Direct QR destinations: `/`, `/client-statement`, and `/staff-statement`.

## Setup
1. Create a PostgreSQL/Supabase database and run `database/schema.sql` (or `backend/sql.sql`).
2. Copy `backend/.env.example` to `backend/.env` and fill in the Supabase and frontend values. Email is optional.
3. Copy `frontend/.env.example` to `frontend/.env` and set `VITE_API_URL`.
4. Run `npm install` in both `backend` and `frontend`.
5. Start the API with `npm run dev` in `backend`, then Vite with `npm run dev` in `frontend`.

## API
- `GET /api/health`
- `POST /api/statements/client`
- `POST /api/statements/staff`

The API accepts `incidentDate`, `name`, `telephone`, `narrative`, `declarationAccepted`, `signature`, and `unit` for staff.

## QR codes
After deployment, encode your HTTPS frontend URLs with any QR generator:
- General: `https://YOUR-DOMAIN.com/`
- Client: `https://YOUR-DOMAIN.com/client-statement`
- Staff: `https://YOUR-DOMAIN.com/staff-statement`
Save the exported images as `qr/client-qr.png` and `qr/staff-qr.png`.

## Deployment and security
Deploy the frontend to Vercel, Netlify, or Cloudflare Pages and the API to Render, Railway, or Fly.io. Use HTTPS, production-only environment variables, a restricted `FRONTEND_URL`, a managed Supabase database, and never place backend credentials in the frontend. If `EMAIL_API_KEY` is blank, submissions are still saved and the user receives a reference number; only administrator email notifications are skipped.
