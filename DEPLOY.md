# Deployment Instructions

This document explains how to deploy this React project and handle common issues, including **filename casing** problems that can affect deployments.

---

## 1. Prerequisites

Make sure you have:

- Node.js and npm installed
- Git installed
- An account on **Netlify** or **Vercel**

---

## 2. Handling Filename Casing Issues

Some deployment platforms (like Vercel, Netlify, or Linux servers) are **case-sensitive**, so filenames must match exactly with imports.

**Steps to fix filename casing in Git if issue found:**
git mv -f src/pages/notfound.jsx src/pages/NotFound.jsx
-all other files that need changes ...

git add .
git commit -m "Fix filename casing"
git push origin main


## 3. Build the project locally
npm install
npm run build