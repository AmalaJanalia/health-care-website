import React from "react";

import { Link } from "react-router-dom";

import "../App.css";
const HomePage = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h2>Welcome to your MentalHealth Companion</h2>
        <p>
        Welcome to Our Mental Health Companion Website

Our mental health companion website is dedicated to fostering a safe and supportive environment where individuals can explore, learn, and grow on their journey towards better mental well-being. We understand that navigating mental health challenges can be complex and overwhelming, which is why we've curated a range of resources and tools to support you every step of the way.
<span>
What We Offer:

Educational Resources: Access a wealth of articles, guides, and videos covering various aspects of mental health, including understanding common disorders, coping strategies, and self-care practices.
Community Support: Connect with others who share similar experiences in our supportive community forums. Share your story, ask questions, and offer support to fellow members in a safe and non-judgmental space.
Self-Assessment Tools: Take advantage of our self-assessment tools to gain insights into your mental health and well-being. Our quizzes and assessments are designed to help you better understand your emotions, behaviors, and stressors.
Therapist Directory: Find qualified therapists and mental health professionals in your area with our comprehensive directory. Search by location, specialty, and treatment approach to find the right fit for your needs.
Interactive Activities: Engage in interactive activities and exercises aimed at promoting relaxation, mindfulness, and emotional regulation. From guided meditations to creative expression, there's something for everyone to explore.
Weekly Newsletter: Subscribe to our weekly newsletter for curated content, expert advice, and upcoming events delivered straight to your inbox. Stay informed and inspired on your mental health journey.</span>
Join Our Community Today:

Whether you're seeking support, information, or simply a sense of belonging, our mental health companion website is here to empower you on your path to wellness. Join our community today and take the first step towards prioritizing your mental health and happiness.

Feel free to customize and expand upon this description to better suit the specific features and goals of your mental health companion website.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
