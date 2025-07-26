# Pagination App (Next.js)

A minimal pagination example built using **Next.js** and React, demonstrating how to navigate between pages using query parameters (e.g., `/?page=1`) and conditionally disable navigation links (e.g., "Previous" button on the first page).

## 📦 Features

- Server/client-side routing via query strings
- Simple `Previous` and `Next` navigation
- Disables navigation when on the first page
- Easy to extend for API or SSR pagination

## 📁 Project Structure

src/
├── pages/
│ └── index.js # Main page with pagination logic
└── styles/
└── globals.css # Global styles (if any)

> Note: All main logic lives in `src/pages/index.js`.

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/pagination-app.git
cd pagination-app

npm install

npm run dev
```
