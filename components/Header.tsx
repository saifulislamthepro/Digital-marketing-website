"use client"

import { useState, useRef, useEffect } from "react"

export default function Header() {  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropActive, setDrop] = useState(false);
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
                <div className="logo">
                    <a href="/"><img src="/images/logo.svg" alt="logo" width={70}/></a>
                </div>
                    <nav className={`flex nav-lists ${menuOpen ? 'active' : ''}`}>
                        <a className="list" href="/about">About</a>
                        <div onClick={()=> setDrop(!dropActive)} className="services-container list">Services <i className={`fi fi-rs-angle-left ${dropActive? "i-rotate": ""}`}></i>
                        <ul className={`drop-down ${dropActive ? 's-active' : ''}`}>
                          <li><a href="/website">Web Development </a></li>
                          <li><a href="/graphics-design">Graphics Design</a></li>
                          <li><a href="/video">Video editing</a></li>
                          <li><a href="/marketing">Digital marketing</a></li>
                        </ul>
                        </div>
                        <div onClick={()=> setDrop(!dropActive)} className="packages-container list">Packages <i className={`fi fi-rs-angle-left ${dropActive? "i-rotate": ""}`}></i>
                        <ul className={`p-drop-down ${dropActive ? 'p-active' : ''}`}>
                          <li><a href="/packages/startup">StartUp Pack </a></li>
                          <li><a href="/packages/business">Business Pack </a></li>
                          <li><a href="/packages/premium">Premium Pack</a></li>
                        </ul>
                        </div>
                        <a className="list" href="/contact">Contact Us</a>
                    </nav>
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