import about_image_2 from "./about-2.png";
import about_image from "./about.png";
import apple_light from "./apple-white.png";
import apple_dark from "./apple_dark.png";
import author_4 from "./author-04.png";
import author_1 from "./author-1.png";
import author_2 from "./author-2.png";
import author_3 from "./author-3.png";
import blog_image_1 from "./blog-01.jpg";
import blog_image_2 from "./blog-02.jpg";
import blog_image_3 from "./blog-03.jpg";
import client_1 from "./client-01.svg";
import client_2 from "./client-02.svg";
import client_3 from "./client-03.svg";
import client_4 from "./client-04.svg";
import client_5 from "./client-05.svg";
import client_6 from "./client-06.svg";
import cta_image from "./cta.png";
import fav_icon from "./favicon.ico";
import gray_gemini from "./gemini.png";
import gemini from "./Google-gemini.png";
import hero_image from "./hero.png";
import dark_logo from "./logo-white.svg";
import logo from "./logo.svg";
import mobile_frame from "./mobile-frame.png";
import play_store from "./playstore.png";
import screen_1 from "./screen-1.png";
import screen_2 from "./screen-2.png";
import screen_3 from "./screen-3.png";
import error_image from "./error.png";

import {
  Layers,
  LayoutTemplate,
  Gauge,
  SlidersHorizontal,
  RefreshCcw,
  PencilRuler,
} from "lucide-react";

export const assets = {
  logo,
  dark_logo,
  hero_image,
  about_image,
  about_image_2,
  screen_1,
  screen_2,
  screen_3,
  mobile_frame,
  cta_image,
  author_1,
  author_2,
  author_3,
  author_4,
  blog_image_1,
  blog_image_2,
  blog_image_3,
  client_1,
  client_2,
  client_3,
  client_4,
  client_5,
  client_6,
  fav_icon,
  apple_dark,
  apple_light,
  gemini,
  gray_gemini,
  play_store,
  error_image,
};

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Support", href: "#support" },
];

export const pagesLinks = [
  { label: "Blog Grids", to: "/blog-grids" },
  { label: "Blog Details", to: "/blog-details" },
  { label: "404 Error", to: "/404" },
  { label: "Log In", to: "/login" },
  { label: "Sign Up", to: "/signup" },
];

export const blogs = [
  {
    id: 1,
    title: "Boost Your Brand with Smart Online Marketing",
    description:
      "Discover how targeted online strategies can elevate your brand and reach new audiences effectively.",
    userName: "Sarah Lee",
    date: "20 Apr, 2025",
    image: blog_image_1,
  },
  {
    id: 2,
    title: "Master UI/UX with These Essential Techniques",
    description:
      "Get practical tips on improving your design workflow and creating better user experiences.",
    userName: "Carlos Gomez",
    date: "10 May, 2025",
    image: blog_image_2,
  },
  {
    id: 3,
    title: "Write Cleaner Code with These Best Practices",
    description:
      "Improve your programming efficiency and maintainability with these essential coding principles.",
    userName: "Emily Chen",
    date: "28 May, 2025",
    image: blog_image_3,
  },
];
export const clients = [
  {
    id: 1,
    image: author_1,
    description:
      "Appline has transformed the way I manage my projects. It's intuitive, fast, and packed with features that make my workflow seamless.",
    title: "Web Entrepreneur",
    name: "Musharof Chowdhury",
  },
  {
    id: 2,
    image: author_2,
    description:
      "The design and user experience of this app are top-notch. It feels modern and helps me stay organized without any hassle.",
    title: "Product Designer",
    name: "Naimur Rahman",
  },
  {
    id: 3,
    image: author_3,
    description:
      "From development to deployment, Appline makes the entire process smoother. I highly recommend it for any app developer.",
    title: "App Developer",
    name: "Devid Miller",
  },
  {
    id: 4,
    image: author_4,
    description:
      "With Appline, I've been able to streamline my SEO campaigns and track results more efficiently. It’s a must-have tool!",
    title: "SEO Expert",
    name: "Justin Farnandes",
  },
];

export const faqs = [
  {
    id: 1,
    title: "What services do you offer?",
    description:
      "We offer digital product design, branding, and development services tailored to startups and growing businesses.",
  },
  {
    id: 2,
    title: "How long does a project typically take?",
    description:
      "Project duration depends on complexity, but most branding and website projects are completed within 4–6 weeks.",
  },
  {
    id: 3,
    title: "Do you work with international clients?",
    description:
      "Absolutely! We collaborate with clients around the world using digital tools to ensure seamless communication.",
  },
];
export const featuresData = [
  {
    id: 1,
    icon: PencilRuler,
    title: "Crafted for App Landing",
    description:
      "Tailored sections and structure designed specifically for showcasing mobile and web apps effectively.",
  },
  {
    id: 2,
    icon: Layers,
    title: "High-quality Design",
    description:
      "Pixel-perfect layouts with sleek visuals that look professional across all devices.",
  },
  {
    id: 3,
    icon: LayoutTemplate,
    title: "All Essential Sections",
    description:
      "Includes everything from feature highlights to testimonials and FAQs—ready to go.",
  },
  {
    id: 4,
    icon: Gauge,
    title: "Speed Optimized",
    description:
      "Built with performance in mind to ensure fast load times and smooth user experience.",
  },
  {
    id: 5,
    icon: SlidersHorizontal,
    title: "Fully Customizable",
    description:
      "Easily adapt layout, colors, fonts, and components to match your unique brand.",
  },
  {
    id: 6,
    icon: RefreshCcw,
    title: "Regular Updates",
    description:
      "Stay current with continuous improvements, feature additions, and best practices.",
  },
];
export const plans = [
  {
    id: 1,
    category: "Free",
    subtitle: "Perfect for individuals getting started.",
    price: 0,
    bgColor: "bg-gray-800",
    features: [
      "60-day chat history",
      "15 GB cloud storage",
      "24/7 Support",
      "Custom Branding Strategy",
    ],
  },
  {
    id: 2,
    category: "Unlimited",
    subtitle: "Great for growing teams and businesses.",
    price: 35,
    bgColor: "bg-indigo-500",
    features: [
      "Unlimited chat history",
      "100 GB cloud storage",
      "Priority Support",
      "Advanced Branding Tools",
    ],
  },
  {
    id: 3,
    category: "Business",
    subtitle: "Ideal for large organizations.",
    price: 59,
    bgColor: "bg-gray-800",
    features: [
      "Unlimited chat history",
      "1 TB cloud storage",
      "Dedicated Account Manager",
      "Full Branding Suite",
    ],
  },
];
