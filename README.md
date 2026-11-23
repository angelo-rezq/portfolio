<div align="center">

# 👨‍💻 Angelo Rezq — Portfolio

**Serverless personal portfolio with a password-protected admin dashboard for live content editing**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Site-Visit-success?style=for-the-badge)](https://angelo-portfolio.angluosr.workers.dev)

[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F38020?style=flat-square&logo=cloudflareworkers&logoColor=white)](https://workers.cloudflare.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com)

</div>

---

## 🌐 Live

- **Site:** [angelo-portfolio.angluosr.workers.dev](https://angelo-portfolio.angluosr.workers.dev)
- **Admin dashboard:** [angelo-portfolio.angluosr.workers.dev/dash-admin](https://angelo-portfolio.angluosr.workers.dev/dash-admin)

## ✨ Features

- 🖥️ **Responsive portfolio** for web and mobile projects — categories, project detail pages, image galleries and technology tags.
- ✏️ **Admin dashboard** — password-protected studio for editing and publishing hero, biography, ventures, skills and contact sections without a redeploy.
- 🗄️ **Database-backed content** — every section is stored as a document and published instantly from the dashboard.
- 📱 **Mobile-first navigation**, project filtering and dedicated project detail pages.
- 🔎 **SEO built in** — static metadata, sitemap and robots rules served from the edge.
- 🔐 **Hardened auth** — PBKDF2-SHA256 password hashing (100k iterations), 7-day sessions, and lockout after failed sign-in attempts.

## 🛠️ Tech Stack

| Layer | Choice |
| --- | --- |
| Runtime | Cloudflare Workers (serverless, edge) |
| Frontend | Static HTML/CSS/JS assets |
| Dashboard | Next.js (static export) |
| Database | MongoDB Atlas |
| Auth | Web Crypto (PBKDF2-SHA256, bearer sessions) |

## 🚀 Getting Started

```bash
npm install
npx wrangler dev      # local development
npx wrangler deploy   # publish to the edge
```

---

<div align="center">

## 👨‍💻 Developed by [Angelo Rezq](https://github.com/angelo-rezq)

**Full-Stack Developer · Flutter · Next.js · React**

[![Portfolio](https://img.shields.io/badge/Portfolio-black?style=for-the-badge)](https://angelo-portfolio.angluosr.workers.dev)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Chat-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/201127570256)
[![Email](https://img.shields.io/badge/Email-angelo.rezq.dev%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:angelo.rezq.dev@gmail.com)

</div>
