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

## 🧰 NPM Packages Used

```txt
react                - Core React library
firebase             - Firebase services (auth, etc.)
react-icons          - Icon components
swiper               - Carousel slider
react-toastify       - Toast notifications
tailwindcss          - Utility-first CSS framework
daisyui              - Tailwind component library
vite                 - Fast dev server and build tool
