"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4">
      {/* Logo */}
      <div className="heading">
        <Link href="/">Logo</Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-4 nav-link">
        <Link href="#about">About</Link>
        <Link href="#specialities">Specialities</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#blog">Blog</Link>
        <Link href="#testimonials">Testimonials</Link>
        <Link href="#contact">Contact</Link>
      </nav>

      {/* Hire Me Button */}
      <button className="hidden md:block button">Hire Me</button>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          ☰
        </button>
        {isOpen && (
          <div className="absolute flex flex-col top-16 right-4 bg-white shadow-lg p-4 space-y-2">
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link href="/faq" onClick={() => setIsOpen(false)}>
              FAQ
            </Link>
            <button className="button">Hire Me</button>
          </div>
        )}
      </div>
    </header>
  );
}
