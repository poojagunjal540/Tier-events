# 🎉 Tier-Based Event Showcase

A simple Next.js 14 application to display events grouped by their tier (Platinum, Gold, Silver). Built using PostgreSQL, Prisma ORM, and Tailwind CSS.

---

## 📁 Features

- ✅ Display events grouped by tier
- ✅ Data stored in PostgreSQL (Neon)
- ✅ Uses Prisma ORM for database interaction
- ✅ Styled using Tailwind CSS
- ✅ Built with Next.js 14 App Router

---

## 🧱 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **PostgreSQL** (via Neon)
- **Prisma** (ORM)
- **Clerk.dev** (Authentication) — *optional, but included*

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/tier-events.git
cd tier-events
2. Install dependencies
bash
Copy
Edit
npm install
3. Set up environment variables
Create a .env.local file in the root directory:

env
Copy
Edit
DATABASE_URL=your_postgres_database_url
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_API_KEY=your_clerk_api_key
4. Set up Prisma
bash
Copy
Edit
npx prisma generate
npx prisma migrate dev --name init
5. Seed the database
bash
Copy
Edit
npx ts-node prisma/seed.ts
6. Run the development server
bash
Copy
Edit
npm run dev
📂 Project Structure
bash
Copy
Edit
src/
  ├── app/                  # App router structure
  │   ├── page.tsx          # Home page
  │   └── layout.tsx        # Root layout
  ├── lib/
  │   └── actions.ts        # Fetch events from DB
  └── components/
      └── EventCard.tsx     # Reusable event card
✅ Requirements Met
 PostgreSQL setup with Prisma schema

 Seed script to populate tiered events

 Grouping logic for events based on tier

 UI showing grouped events using Tailwind

 Fully functional app served via Next.js 14

📸 Screenshots
(Add screenshots of the homepage if required by your instructor.)

🧑‍💻 Author
Pooja Gunjal

📃 License
MIT – Feel free to use and modify.
