

````markdown
# 🚀 QuickBlog — AI-Powered Blogging Platform

**QuickBlog** is a modern, full-featured blogging platform that combines robust publishing tools with advanced **AI-assisted writing**, **cloud-based media management**, and a sleek, user-friendly interface. It empowers users to create, edit, manage, and share blog posts with ease, while leveraging AI to boost creativity and productivity.

---

## 🌐 Live Demo

https://quick-blog-teal.vercel.app

---

## 📦 Tech Stack

- **Frontend:** React (Vite) + TailwindCSS
- **Backend:** Node.js + Express + MongoDB
- **Authentication:** JWT + Cookie Sessions
- **Image Storage:** [ImageKit.io](https://imagekit.io)
- **AI Writer:** Google Gemini API
- **Deployment:** Vercel (frontend & backend)

---

## ⚙️ Requirements

- **Node.js** v16 or higher
- **npm** or **yarn**
- **MongoDB Atlas**
- **ImageKit.io account**
- **Gemini API key** (from Google AI Studio)

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

#### Create `.env` in `/server`:

```env
PORT=3000

MONGODB_URI=your_mongodb_uri

GEMINI_API_KEY=your_gemini_api_key

IMAGEKIT_URL_ENDPOINT = 'https://ik.imagekit.io/your_endpoint'
IMAGEKIT_PUBLIC_KEY = 'your_public_key'
IMAGEKIT_PRIVATE_KEY = 'your_private_key'

ADMIN_EMAIL = 'admin@example.com'
ADMIN_PASSWORD = 'your_password'

JWT_SECRET = 'your_jwt_secret'
```

#### Run the Backend:

```bash
npm start
```

---

### 3. Setup the Frontend

```bash
cd ../client
npm install
```

#### Create `.env` in `/client`:

```env
VITE_BACKEND_URL = https://your-backend-deployment-url.com
```

#### Start the Frontend:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 💡 Environment Variables Explained

| Variable                    | Description                                     |
| --------------------------- | ----------------------------------------------- |
| `PORT`                      | Port for backend server (default: 3000)         |
| `MONGODB_URI`               | MongoDB Atlas connection string                 |
| `GEMINI_API_KEY`            | Google Gemini API key for AI content generation |
| `IMAGEKIT_URL_ENDPOINT`     | URL endpoint for ImageKit image hosting         |
| `IMAGEKIT_PUBLIC_KEY`       | Public API key from ImageKit                    |
| `IMAGEKIT_PRIVATE_KEY`      | Private API key from ImageKit                   |
| `ADMIN_EMAIL`               | Admin login email                               |
| `ADMIN_PASSWORD`            | Admin login password                            |
| `JWT_SECRET`                | Secret key for signing JWT tokens               |
| `VITE_BACKEND_URL` (client) | URL of deployed backend for frontend requests   |

---

## ✨ Features Overview (Detailed)

### ✍️ Blog Management

- **Create, Edit, and Delete Posts:** Users can easily compose new blog posts, update existing ones, or remove them as needed. The intuitive editor supports rich formatting and media embedding.
- **Rich Text Editor with Image Uploads:** The integrated editor allows for bold, italic, headings, lists, links, and direct image uploads via ImageKit, making content creation seamless and visually appealing.
- **Categorization with Tags:** Organize posts using categories and tags, enabling readers to filter and discover content efficiently.
- **SEO-Friendly URLs:** Each blog post is assigned a clean, descriptive URL, improving search engine visibility and user experience.

### 👥 User Authentication

- **Register, Login, Logout:** Secure user registration and authentication flows, with password hashing and validation.
- **JWT & HTTP-Only Cookies:** Sessions are managed securely using JWT tokens stored in HTTP-only cookies, protecting against XSS attacks.
- **Admin Access:** Special admin accounts can moderate content, manage users, and access additional dashboard features.

### 💬 Comment System

- **Threaded Comments:** Readers can engage in discussions with nested replies, fostering community interaction.
- **Authenticated Commenting:** Only logged-in users can comment, reducing spam and ensuring accountability.
- **Admin Moderation:** Admins can review, approve, or delete comments to maintain a healthy discussion environment.

### 🔍 Search & Filter

- **Full-Text Search:** Instantly search posts by title or keywords, helping users find relevant content quickly.
- **Category & Tag Filters:** Filter posts by category or tag to narrow down topics of interest.

### 🧠 AI Content Generation (Gemini)

- **Instant Drafting:** Generate entire blog post drafts from a simple prompt using Google Gemini AI, saving time and sparking creativity.
- **Rephrasing & Expansion:** Select text and use AI to rephrase, clarify, or expand content for better readability and depth.
- **Idea Generation:** Get AI-powered topic suggestions, outlines, and inspiration for new posts.
- **Integrated Editor Tool:** Access AI features directly within the editor via a "Generate with AI" button for a seamless workflow.

### 🖼 Image Upload via ImageKit

- **Direct Image Uploads:** Upload images directly into blog posts, with automatic optimization and CDN delivery for fast loading.
- **Global CDN:** Images are served quickly worldwide, ensuring a smooth experience for all users.
- **Automatic Optimization:** Images are automatically resized and compressed for optimal performance.

### 📱 Responsive UI

- **Mobile, Tablet, Desktop Support:** The interface adapts beautifully to all screen sizes, providing a consistent experience everywhere.
- **Modern Design & Dark Mode:** Clean, modern aesthetics with optional dark mode for comfortable reading.

### 🛠 Admin Dashboard

- **User & Post Management:** Admins can view all users and posts, delete spam content, or remove problematic users.
- **Quick Stats Overview:** (Planned) Dashboard will display key metrics like total number of blogs, comments, and drafts.

---

## 🚀 Deployment Guide

### Backend (Render/Railway)

1. Deploy `/server`
2. Add all `.env` variables in Vercel's dashboard
3. Enable auto-redeploy on push (optional)

### Frontend (Vercel)

1. Deploy `/client`
2. Add `VITE_BACKEND_URL` in Vercel environment settings

---

## 🧪 Sample Admin Login

```bash
Email: admin@example.com
Password: your_password
```

---

## 🧑‍💻 Contributing

We welcome contributions from the community!

1. Fork the repo
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m "Add feature"`)
4. Push and submit a PR

---

## 📄 License

This project is licensed under the **MIT License**.

---
