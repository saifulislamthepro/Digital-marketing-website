"use client"

import { useState, useRef, useEffect } from "react"

export default function Header() {  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropActive, setDrop] = useState(false);
  const [pdropActive, setpDrop] = useState(false);
    const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    setMounted(true);

    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        requestAnimationFrame(() => setMenuOpen(false));
      }
    }

    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); // adjust threshold as needed
    };


    window.addEventListener('scroll', handleScroll);



    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };

  },[menuOpen]);

  if (!mounted) return null;   
  return(
        <header className={`flex ${scrolled ? "fixed" : ""}`}>
            <section className="container flex" ref={menuRef}>
                <div className="block">
                    <a href="/"><img src="/images/logo.svg" alt="logo" width={70}/></a>
                </div>
                <div className="block">
                    <nav className={`flex nav-lists ${menuOpen ? 'active' : ''}`}>
                        <a href="/about">About</a>
                        <a href="/services">Services</a>
                        <a href="/packages">Packages</a>
                        <a href="/portfolio">Portfolio</a>
                        <a href="/contact">Contact Us</a>
                    </nav>
                </div>
                <div className="block">
                    <strong>Book a Meeting</strong>
                </div>
                <div onClick={()=> {setMenuOpen(!menuOpen)}} className="flex mobile-toggle">
                    <div className={`bars ${menuOpen ? "bar-closed" : ''}`}>
                        <i className="fi fi-rs-list"></i>
                    </div>
                    <div className={`cross ${menuOpen ? "cross-active" : ''}`}>
                        <i className="fi fi-rs-cross"></i>
                    </div>
                </div>
            </section>
        </header>
    )
}