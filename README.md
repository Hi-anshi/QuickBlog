# 🚀 QuickBlog — AI-Powered Blogging Platform

QuickBlog is a modern, full-featured blogging platform that combines robust publishing tools with advanced AI-assisted writing, cloud-based media management, and a sleek, user-friendly interface. It empowers users to create, edit, manage, and share blog posts with ease, while leveraging AI to boost creativity and productivity.

---

## 🌐 Live Demo

[https://quick-blog-teal.vercel.app](https://quick-blog-teal.vercel.app)

---

## 📦 Tech Stack

- React (Vite)
- TailwindCSS
- Node.js
- Express
- MongoDB
- JWT + Cookie Sessions
- [ImageKit.io](https://imagekit.io)
- Google Gemini API
- Vercel (frontend & backend)

---

## ⚙️ Requirements

- Node.js v16 or higher
- npm or yarn
- MongoDB Atlas
- ImageKit.io account
- Gemini API key (from Google AI Studio)

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Hi-anshi/QuickBlog.git
cd QuickBlog
```

---

### 2. Setup the Backend

```bash
cd server
npm install
```

Create `.env` in `/server`:

```env
PORT=3000
MONGODB_URI=your_mongodb_uri
GEMINI_API_KEY=your_gemini_api_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_endpoint
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_password
JWT_SECRET=your_jwt_secret
```

Run the Backend:

```bash
npm start
```

---

### 3. Setup the Client

```bash
cd ../client
npm install
```

Create `.env` in `/client`:

```env
VITE_BACKEND_URL=https://your-backend-deployment-url.com
```

Start the Client:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 💡 Environment Variables Explained

| Variable                    | Description                                     |
| --------------------------- | ----------------------------------------------- |
| PORT                        | Port for backend server (default: 3000)         |
| MONGODB_URI                 | MongoDB Atlas connection string                 |
| GEMINI_API_KEY              | Google Gemini API key for AI content generation |
| IMAGEKIT_URL_ENDPOINT       | URL endpoint for ImageKit image hosting         |
| IMAGEKIT_PUBLIC_KEY         | Public API key from ImageKit                    |
| IMAGEKIT_PRIVATE_KEY        | Private API key from ImageKit                   |
| ADMIN_EMAIL                 | Admin login email                               |
| ADMIN_PASSWORD              | Admin login password                            |
| JWT_SECRET                  | Secret key for signing JWT tokens               |
| VITE_BACKEND_URL (client)   | URL of deployed backend for frontend requests   |

---
## ✨ Features Overview

- **Blog Management**
  - Create, edit, and delete blog posts.
  - Rich text editor supporting Headings, bold, italic, lists, and links with direct image uploads.
  - Categorize posts with tags.
  - SEO-friendly URLs for better search engine visibility..

- **User Authentication**
  - Secure login and logout.
  - JWT-based sessions with HTTP-only cookies.

- **Comment System**
  - Threaded/nested comments.
  - Authenticated user-only commenting.
  - Admins can approve or delete comments to maintain quality.

- **Search & Filter**
  - Full-text search across blog titles and content.
  - Filter blogs by category or tags for better discoverability.

- **AI Content Generation (Gemini)**
  - Generate complete blog drafts from prompts.
  - Rephrase and expand text.
  - Get ideas, outlines, and suggestions.
  - Integrated "Generate with AI" button inside the editor for seamless workflow.

- **Image Upload via ImageKit**
  - Direct image uploads inside blog posts.
  - Global CDN delivery for fast image loading.
  - Automatic resizing and optimization for performance.

- **Responsive UI**
  - Fully responsive across devices.
  - Clean design with dark mode.

### 🛠️ Admin Dashboard Features

- **Dashboard Summary Cards**
  - Total Blogs: Displays number of published blogs.
  - Total Comments: Shows total comment count.
  - Drafts: Shows number of draft blogs.

- **Latest Blogs Table**
  - Lists recent blogs with:
    - Serial number
    - Title
    - Date created/updated
    - Status (Published/Draft)
    - Action buttons (Edit, Delete, View)

- **Blog Management Actions**
  - Edit blog content.
  - Delete blog from the system.
  - Preview blog as a user.
  - (Optional) Toggle publish/draft status.

- **Live Data Fetching**
  - Fetches data from `/api/admin/dashboard`.
  - Auto-refreshes dashboard after actions.

- **Responsive UI**
  - Fully responsive layout for mobile, tablet, and desktop.
  - Intuitive and clean design with hover effects and icons.

- **Error Handling**
  - Toast notifications for API or fetch errors.


---

## 🚀 Deployment Guide

### Backend (Render/Railway)

```bash
# Deploy /server
# Add all .env variables in Vercel's dashboard
# Enable auto-redeploy on push (optional)
```

### Frontend (Vercel)

```bash
# Deploy /client
# Add VITE_BACKEND_URL in Vercel environment settings
```

---

## 🧪 Sample Admin Login

```bash
Email: admin@example.com
Password: your_password
```

---

## 🧑‍💻 Contributing

We welcome contributions from the community!

```bash
# 1. Fork the repo
# 2. Create a feature branch
git checkout -b feature-name
# 3. Commit changes
git commit -m "Add feature"
# 4. Push and submit a PR
```

---

## 📄 License

This project is licensed under the MIT License.

---
