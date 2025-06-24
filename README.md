# 🎁 Cratezy - Subscription Box Service Platform

Cratezy is a personalized subscription box platform that allows users to browse, subscribe to, and manage monthly curated boxes tailored to their interests. It supports various categories including Tech, Health, Home & Living, Food & Drink, Kids & Education, and Pet Care.

🔗 **Live Site**: [https://a9-cratezy-tarek.netlify.app/](https://a9-cratezy-tarek.netlify.app/)

---

## 🧩 Project Purpose

The goal of Cratezy is to provide a seamless and engaging experience for users to discover subscription boxes. With Firebase authentication and personalized content, users can manage their profiles, reviews, and subscriptions with ease. The platform is responsive, fast, and secure — encouraging support for local creators and businesses.

---

## 🚀 Key Features

- 🔐 **Authentication**: Firebase email/password login, Google login, password reset  
- 🧑‍💻 **Protected Routes**: Subscription details & profile only accessible after login  
- 🧾 **Dynamic Content**: JSON-based subscription services  
- 🧰 **Subscription Details**: Users can view, review, and rate services  
- 🧠 **My Profile Page**: Edit & update name and photo using Firebase `updateProfile()`  
- 🎡 **Swiper Slider**: Interactive homepage slider  
- 📝 **Blog Section**: Responsive blog layout for trending posts  
- 🌐 **Dynamic Title**: Updates browser title per route  
- 📱 **Responsive Design**: Mobile, tablet, and desktop-friendly  
- 🎨 **Unique UI**: Tailwind CSS with DaisyUI components  
- 🌍 **404 Page**: Custom Not Found page  
- 🔐 **Environment Variables**: Secured Firebase credentials via `.env`  
- ✨ **Extra Route**: Includes additional protected route (e.g. Blog/Profile)  
- 👁 **Show/Hide Password**: Password toggle on register page  

---

## 🛠️ Technologies Used

- React – Frontend library for building UI  
- React Router v7 – Declarative routing and nested layouts  
- Firebase – Authentication and backend services  
- Tailwind CSS – Utility-first CSS framework  
- DaisyUI – Component library for Tailwind  
- Swiper – Responsive carousel/slider  
- React Toastify – Toast notification system  
- React Helmet – Manage page metadata/title dynamically  
- Lucide React – Icon library  
- Vite – Build tool for fast development  
- .env – Secured environment variable management  

---
##🚀 How to Run Locally
-git clone https://github.com/TarekNexus/Cratezy-Subscription-Services
cd cratezy
# Create a .env file in the project root and add the Firebase config:
- VITE_API_URL=your_api_url
- VITE_FIREBASE_API_KEY=your_firebase_api_key
- VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
- VITE_FIREBASE_PROJECT_ID=your_project_id
- VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
- VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
- VITE_FIREBASE_APP_ID=your_app_id

## 📦 Dependencies
- Install dependencies
- npm install
- npm run dev
```json
{
  "@tailwindcss/vite": "^4.1.5",
  "daisyui": "^5.0.35",
  "firebase": "^11.6.1",
  "lucide-react": "^0.507.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-helmet": "^6.1.0",
  "react-router": "^7.5.3",
  "react-router-dom": "^7.5.3",
  "react-toastify": "^11.0.5",
  "swiper": "^11.2.6",
  "tailwindcss": "^4.1.5"
}
