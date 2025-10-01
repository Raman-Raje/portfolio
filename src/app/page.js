'use client';

import { useEffect } from 'react';
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from '@/components/Projects';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function Home() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    // Cleanup
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <ThemeProvider>
      <Navigation />
      <Hero />
      <Experience />
      <Projects/>
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}