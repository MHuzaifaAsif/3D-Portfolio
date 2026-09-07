# Muhammad Huzaifa - 3D Developer Portfolio

A modern, responsive 3D Portfolio built with **React**, **Three.js / React Three Fiber**, **Tailwind CSS**, and **TypeScript**. Features interactive 3D models (Computers canvas, animated Stars, Earth canvas, floating tech balls), smooth Framer Motion transitions, and a contact system ready for Vercel deployment.

---

## 🚀 Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **3D Graphics & Animations**: Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`), Framer Motion, Maath
- **Styling**: Tailwind CSS
- **Icons & UI**: Lucide / SVG assets, Sonner toasts, React Tilt
- **Deployment & API**: Vercel (Edge/Serverless Functions), Resend & Google reCAPTCHA v3

---

## 🛠️ Project Structure

```bash
PortfolioWeb/
  ├── api/                 # Vercel serverless functions (e.g. /api/contact)
  ├── public/              # 3D models (desktop_pc, planet) & static icons
  ├── src/
  │   ├── assets/          # Icons, company logos, tech stack images
  │   ├── components/      # UI components (Hero, About, Experience, Tech, Works, Contact, etc.)
  │   │   └── canvas/      # 3D R3F canvas components (Computers, Earth, Ball, Stars)
  │   ├── constants/       # Personal data (Experience, Projects, Services, Tech, Socials)
  │   ├── hoc/             # Higher-Order Components (SectionWrapper)
  │   ├── lib/             # Contact form validations & helpers
  │   ├── utils/           # Motion variants & utility helpers
  │   ├── app.tsx          # Main application layout
  │   └── main.tsx         # Root entry point
  ├── vercel.json          # Vercel routing & build configuration
  └── vite.config.ts       # Vite build configuration
```

---

## ⚙️ Getting Started Locally

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd PortfolioWeb
```

### 2. Install dependencies
```bash
npm install
# or
pnpm install
```

### 3. Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Fill in your API credentials:
- **Resend**: `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_TO_EMAIL`
- **Google reCAPTCHA v3**: `VITE_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY`

*(Note: The portfolio gracefully provides direct email & phone contact options even if reCAPTCHA or Resend keys are not yet configured).*

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for Production
```bash
npm run build
```

---

## 🌐 Deploying to Vercel

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Personalize portfolio for Muhammad Huzaifa"
   git remote set-url origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
   - Import your GitHub repository.
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Add Environment Variables in Vercel**:
   In your Vercel Project Settings -> Environment Variables, add:
   - `VITE_RECAPTCHA_SITE_KEY`
   - `RECAPTCHA_SECRET_KEY`
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_SITE_URL`

4. Click **Deploy**!

---

## 📬 Contact & Connect

- **Name**: Muhammad Huzaifa
- **Role**: Full-Stack Developer & Software Engineer
- **Email**: [mhuzaifa.asif412@gmail.com](mailto:mhuzaifa.asif412@gmail.com)
- **Phone**: [+92 322 0676858](tel:03220676858)
- **Education**: FAST National University of Computer and Emerging Sciences (FAST-NUCES)
