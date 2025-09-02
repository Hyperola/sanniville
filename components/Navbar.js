"use client";
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Navigation data
  const navItems = [
    { key: 'home', href: '/', text: 'Home', icon: '🏠' },
    {
      key: 'about',
      text: 'About Us',
      icon: '🎯',
      subItems: [
        { href: '/about/history', text: 'Our History', icon: '📜' },
        { href: '/about/vision-mission', text: 'Vision & Mission', icon: '🚀' },
        { href: '/about/leadership', text: 'Leadership Team', icon: '👥' },
        { href: '/about/song-prayers', text: 'School Song & Prayers', icon: '🎵' },
        { href: '/about/accreditation', text: 'Accreditation', icon: '🏆' },
        { href: '/about/faqs', text: 'FAQs', icon: '❓' },
        { href: '/about/careers', text: 'Careers', icon: '💼' },
        { href: '/about/success-stories', text: 'Success Stories', icon: '⭐' }
      ]
    },
    {
      key: 'admissions',
      text: 'Admissions',
      icon: '📝',
      subItems: [
        { href: '/admissions/why-choose-us', text: 'Why Choose Us', icon: '💡' },
        { href: '/admissions/procedure', text: 'Admission Process', icon: '📋' },
        { href: '/admissions/requirements', text: 'Requirements', icon: '✅' },
        { href: '/admissions/tuition', text: 'Tuition & Fees', icon: '💰' },
        { href: '/admissions/examination', text: 'Entrance Exam', icon: '📚' },
        { href: '/admissions/scholarships', text: 'Scholarships', icon: '🎓' },
        { href: '/admissions/tours', text: 'Campus Tours', icon: '🏛️' },
        { href: '/admissions/apply', text: 'Apply Now', icon: '🚀' }
      ]
    },
    {
      key: 'academics',
      text: 'Academics',
      icon: '📖',
      subItems: [
        { href: '/academics/curriculum', text: 'Curriculum', icon: '📚' },
        { href: '/academics/programs', text: 'Programs', icon: '🎯' },
        { href: '/academics/facilities', text: 'Facilities', icon: '🏢' },
        { href: '/academics/library', text: 'Library', icon: '📚' }
      ]
    },
    {
      key: 'campus',
      text: 'Campus Life',
      icon: '🌟',
      subItems: [
        { href: '/campus/sports', text: 'Sports & Recreation', icon: '⚽' },
        { href: '/campus/clubs', text: 'Clubs & Societies', icon: '👫' },
        { href: '/campus/events', text: 'Events & Activities', icon: '🎉' },
        { href: '/campus/dining', text: 'Dining Services', icon: '🍽️' }
      ]
    },
    {
      key: 'news',
      text: 'News & Events',
      icon: '📰',
      subItems: [
        { href: '/news/latest', text: 'Latest News', icon: '🔥' },
        { href: '/news/events', text: 'Upcoming Events', icon: '📅' },
        { href: '/news/gallery', text: 'Photo Gallery', icon: '📸' },
        { href: '/news/newsletter', text: 'Newsletter', icon: '📧' }
      ]
    },
    {
      key: 'contact',
      text: 'Contact',
      icon: '📞',
      subItems: [
        { href: '/contact/info', text: 'Contact Information', icon: '📍' },
        { href: '/contact/directions', text: 'Directions', icon: '🗺️' },
        { href: '/contact/admissions', text: 'Admissions Office', icon: '🏢' },
        { href: '/portal', text: 'Student Portal', icon: '💻' }
      ]
    }
  ];

  const ChevronIcon = ({ isOpen }) => (
    <svg
      style={{
        width: 'clamp(10px, 2vw, 12px)',
        height: 'clamp(10px, 2vw, 12px)',
        transition: 'transform 0.3s',
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const MenuIcon = () => (
    <svg
      style={{
        width: 'clamp(20px, 5vw, 24px)',
        height: 'clamp(20px, 5vw, 24px)',
      }}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  const CloseIcon = () => (
    <svg
      style={{
        width: 'clamp(20px, 5vw, 24px)',
        height: 'clamp(20px, 5vw, 24px)',
      }}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div style={{ position: 'relative' }}>
      {/* Main Navbar */}
      <nav
        ref={navbarRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.5s ease-out',
          background: isScrolled
            ? 'rgba(30, 41, 55, 0.95)'
            : 'linear-gradient(to right, #1F2937, #1E2A37, #1F2937)',
          borderBottom: isScrolled ? '1px solid rgba(212, 160, 23, 0.2)' : 'none',
          boxShadow: isScrolled ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            width: '100%',
            margin: '0 auto',
            padding: '0 clamp(16px, 4vw, 32px)',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: isScrolled ? 'clamp(56px, 14vw, 64px)' : 'clamp(64px, 16vw, 80px)',
              transition: 'height 0.3s',
            }}
          >
            {/* Logo */}
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 12px)', cursor: 'pointer' }}>
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 'clamp(12px, 3vw, 16px)',
                  padding: 'clamp(6px, 1.5vw, 8px)',
                  transition: 'all 0.3s',
                  background: 'linear-gradient(to bottom right, rgba(212, 160, 23, 0.2), rgba(212, 160, 23, 0.2))',
                  border: '1px solid rgba(212, 160, 23, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(212, 160, 23, 0.3), rgba(212, 160, 23, 0.3))';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(212, 160, 23, 0.2), rgba(212, 160, 23, 0.2))';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom right, #D4A017, #D4A017)',
                    opacity: 0.1,
                    transition: 'opacity 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.2')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.1')}
                />
                <div
                  style={{
                    width: 'clamp(28px, 7vw, 32px)',
                    height: 'clamp(28px, 7vw, 32px)',
                    background: 'linear-gradient(to bottom right, #D4A017, #D4A017)',
                    borderRadius: 'clamp(8px, 2vw, 10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#1F2937',
                    fontWeight: 'bold',
                    fontSize: 'clamp(16px, 4vw, 20px)',
                    fontFamily: "'Merriweather', serif",
                  }}
                >
                  S
                </div>
              </div>
              <div>
                <h1
                  style={{
                    fontFamily: "'Merriweather', serif",
                    fontSize: isScrolled ? 'clamp(16px, 4vw, 18px)' : 'clamp(18px, 4.5vw, 20px)',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                    background: 'linear-gradient(to right, #FFFFFF, #FFF7D2, #D4A017)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    transition: 'all 0.3s',
                  }}
                >
                  Sanniville Academy
                </h1>
                <p
                  style={{
                    fontFamily: "'Merriweather', serif",
                    fontSize: 'clamp(10px, 2.5vw, 12px)',
                    color: '#6B7280',
                    fontWeight: '500',
                    letterSpacing: '0.5px',
                  }}
                >
                  Excellence in Education
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div
              style={{
                display: window.innerWidth >= 1024 ? 'flex' : 'none',
                alignItems: 'center',
                gap: 'clamp(4px, 1vw, 8px)',
              }}
            >
              {navItems.map((item) => (
                <div key={item.key} style={{ position: 'relative' }}>
                  {item.subItems ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.key)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'clamp(6px, 1.5vw, 8px)',
                          padding: 'clamp(8px, 2vw, 10px) clamp(12px, 3vw, 16px)',
                          borderRadius: 'clamp(8px, 2vw, 12px)',
                          fontFamily: "'Merriweather', serif",
                          fontSize: 'clamp(13px, 3.2vw, 14px)',
                          fontWeight: '500',
                          color: '#E5E7EB',
                          background: 'transparent',
                          border: '1px solid transparent',
                          transition: 'all 0.3s',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#FFFFFF';
                          e.currentTarget.style.background = 'linear-gradient(to right, rgba(212, 160, 23, 0.1), rgba(212, 160, 23, 0.1))';
                          e.currentTarget.style.border = '1px solid rgba(212, 160, 23, 0.2)';
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#E5E7EB';
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.border = '1px solid transparent';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        <span style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', opacity: 0.7 }}>{item.icon}</span>
                        <span>{item.text}</span>
                        <ChevronIcon isOpen={activeDropdown === item.key} />
                      </button>
                      {activeDropdown === item.key && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            marginTop: 'clamp(8px, 2vw, 12px)',
                            width: 'clamp(200px, 50vw, 320px)',
                            background: 'rgba(255, 255, 255, 0.95)',
                            borderRadius: 'clamp(12px, 3vw, 16px)',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                            border: '1px solid rgba(209, 213, 219, 0.5)',
                            overflow: 'hidden',
                            animation: 'slideIn 0.2s ease-in',
                          }}
                        >
                          <div style={{ padding: 'clamp(8px, 2vw, 12px)' }}>
                            {item.subItems.map((subItem) => (
                              <a
                                key={subItem.href}
                                href={subItem.href}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 'clamp(8px, 2vw, 12px)',
                                  padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 16px)',
                                  borderRadius: 'clamp(8px, 2vw, 12px)',
                                  color: '#374151',
                                  fontFamily: "'Merriweather', serif",
                                  fontSize: 'clamp(12px, 3vw, 14px)',
                                  fontWeight: '500',
                                  transition: 'all 0.2s',
                                  border: '1px solid transparent',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.color = '#1F2937';
                                  e.currentTarget.style.background = 'linear-gradient(to right, #FFF7D2, #FFF7D2)';
                                  e.currentTarget.style.border = '1px solid rgba(212, 160, 23, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.color = '#374151';
                                  e.currentTarget.style.background = 'transparent';
                                  e.currentTarget.style.border = '1px solid transparent';
                                }}
                              >
                                <span style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', transition: 'transform 0.2s' }}
                                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                >
                                  {subItem.icon}
                                </span>
                                <span>{subItem.text}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(6px, 1.5vw, 8px)',
                        padding: 'clamp(8px, 2vw, 10px) clamp(12px, 3vw, 16px)',
                        borderRadius: 'clamp(8px, 2vw, 12px)',
                        fontFamily: "'Merriweather', serif",
                        fontSize: 'clamp(13px, 3.2vw, 14px)',
                        fontWeight: '500',
                        color: '#E5E7EB',
                        textDecoration: 'none',
                        transition: 'all 0.3s',
                        border: '1px solid transparent',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.background = 'linear-gradient(to right, rgba(212, 160, 23, 0.1), rgba(212, 160, 23, 0.1))';
                        e.currentTarget.style.border = '1px solid rgba(212, 160, 23, 0.2)';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#E5E7EB';
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.border = '1px solid transparent';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <span style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', opacity: 0.7 }}>{item.icon}</span>
                      <span>{item.text}</span>
                    </a>
                  )}
                </div>
              ))}
              <div
                style={{
                  marginLeft: 'clamp(16px, 4vw, 24px)',
                  paddingLeft: 'clamp(16px, 4vw, 24px)',
                  borderLeft: '1px solid #374151',
                }}
              >
                <a
                  href="/portal/login"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    padding: 'clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px)',
                    borderRadius: 'clamp(12px, 3vw, 16px)',
                    fontFamily: "'Merriweather', serif",
                    fontSize: 'clamp(13px, 3.2vw, 14px)',
                    fontWeight: '600',
                    background: 'linear-gradient(to right, #D4A017, #D4A017)',
                    color: '#1F2937',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 12px rgba(212, 160, 23, 0.25)',
                    border: '1px solid rgba(212, 160, 23, 0.5)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #D4A017, #D4A017)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(212, 160, 23, 0.35)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #D4A017, #D4A017)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 160, 23, 0.25)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: 'clamp(6px, 1.5vw, 8px)' }}>
                    <span>Portal Login</span>
                    <div
                      style={{
                        width: 'clamp(6px, 1.5vw, 8px)',
                        height: 'clamp(6px, 1.5vw, 8px)',
                        background: 'rgba(30, 41, 55, 0.3)',
                        borderRadius: '50%',
                        animation: 'pulse 2s infinite',
                      }}
                    />
                  </span>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to right, rgba(255, 255, 255, 0.2), transparent)',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                  />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              style={{
                display: window.innerWidth >= 1024 ? 'none' : 'block',
                padding: 'clamp(8px, 2vw, 12px)',
                borderRadius: 'clamp(12px, 3vw, 16px)',
                background: 'rgba(30, 41, 55, 0.5)',
                border: '1px solid #374151',
                color: '#E5E7EB',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(30, 41, 55, 0.7)';
                e.currentTarget.style.border = '1px solid rgba(212, 160, 23, 0.5)';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(30, 41, 55, 0.5)';
                e.currentTarget.style.border = '1px solid #374151';
                e.currentTarget.style.color = '#E5E7EB';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div style={{ transition: 'transform 0.3s' }}>
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 40,
              display: window.innerWidth >= 1024 ? 'none' : 'block',
            }}
            onClick={closeMobileMenu}
          />
        )}

        {/* Mobile Menu */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            height: '100%',
            width: 'clamp(240px, 85vw, 320px)',
            zIndex: 50,
            background: 'linear-gradient(to bottom, #1F2937, #1E2A37, #1F2937)',
            borderLeft: '1px solid rgba(55, 65, 81, 0.5)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.5s ease-out',
            display: window.innerWidth >= 1024 ? 'none' : 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Mobile Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 'clamp(16px, 4vw, 24px)',
              borderBottom: '1px solid rgba(55, 65, 81, 0.5)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 12px)' }}>
              <div
                style={{
                  width: 'clamp(28px, 7vw, 32px)',
                  height: 'clamp(28px, 7vw, 32px)',
                  background: 'linear-gradient(to bottom right, #D4A017, #D4A017)',
                  borderRadius: 'clamp(8px, 2vw, 12px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1F2937',
                  fontWeight: 'bold',
                  fontSize: 'clamp(16px, 4vw, 20px)',
                  fontFamily: "'Merriweather', serif",
                }}
              >
                S
              </div>
              <span
                style={{
                  color: '#FFFFFF',
                  fontFamily: "'Merriweather', serif",
                  fontSize: 'clamp(16px, 4vw, 18px)',
                  fontWeight: '600',
                }}
              >
                Menu
              </span>
            </div>
            <button
              onClick={closeMobileMenu}
              style={{
                padding: 'clamp(6px, 1.5vw, 8px)',
                borderRadius: 'clamp(8px, 2vw, 12px)',
                background: 'rgba(30, 41, 55, 0.5)',
                color: '#D1D5DB',
                transition: 'all 0.2s',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(30, 41, 55, 0.7)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(30, 41, 55, 0.5)';
                e.currentTarget.style.color = '#D1D5DB';
              }}
            >
              <CloseIcon />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: 'clamp(12px, 3vw, 16px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(4px, 1vw, 8px)',
            }}
          >
            {navItems.map((item) => (
              <div key={item.key}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.key)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 'clamp(12px, 3vw, 16px)',
                        borderRadius: 'clamp(12px, 3vw, 16px)',
                        color: '#E5E7EB',
                        background: activeDropdown === item.key ? 'rgba(30, 41, 55, 0.3)' : 'transparent',
                        border: activeDropdown === item.key ? '1px solid rgba(212, 160, 23, 0.3)' : '1px solid transparent',
                        fontFamily: "'Merriweather', serif",
                        fontSize: 'clamp(14px, 3.5vw, 16px)',
                        fontWeight: '500',
                        transition: 'all 0.3s',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        if (activeDropdown !== item.key) {
                          e.currentTarget.style.background = 'linear-gradient(to right, rgba(30, 41, 55, 0.5), rgba(30, 41, 55, 0.5))';
                          e.currentTarget.style.border = '1px solid rgba(55, 65, 81, 0.5)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeDropdown !== item.key) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.border = '1px solid transparent';
                        }
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 12px)' }}>
                        <span style={{ fontSize: 'clamp(16px, 4vw, 20px)' }}>{item.icon}</span>
                        <span>{item.text}</span>
                      </div>
                      <ChevronIcon isOpen={activeDropdown === item.key} />
                    </button>
                    {activeDropdown === item.key && (
                      <div
                        style={{
                          marginTop: 'clamp(4px, 1vw, 8px)',
                          marginLeft: 'clamp(12px, 3vw, 16px)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 'clamp(4px, 1vw, 8px)',
                          animation: 'slideIn 0.3s ease-in',
                        }}
                      >
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            onClick={closeMobileMenu}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 'clamp(8px, 2vw, 12px)',
                              padding: 'clamp(8px, 2vw, 12px)',
                              borderRadius: 'clamp(8px, 2vw, 12px)',
                              color: '#D1D5DB',
                              fontFamily: "'Merriweather', serif",
                              fontSize: 'clamp(12px, 3vw, 14px)',
                              fontWeight: '500',
                              transition: 'all 0.2s',
                              borderLeft: '2px solid transparent',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = '#FFFFFF';
                              e.currentTarget.style.background = 'linear-gradient(to right, rgba(212, 160, 23, 0.1), rgba(212, 160, 23, 0.1))';
                              e.currentTarget.style.borderLeft = '2px solid #D4A017';
                              e.currentTarget.style.transform = 'translateX(8px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = '#D1D5DB';
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.borderLeft = '2px solid transparent';
                              e.currentTarget.style.transform = 'translateX(0)';
                            }}
                          >
                            <span style={{ fontSize: 'clamp(12px, 3vw, 16px)' }}>{subItem.icon}</span>
                            <span>{subItem.text}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={closeMobileMenu}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'clamp(8px, 2vw, 12px)',
                      padding: 'clamp(12px, 3vw, 16px)',
                      borderRadius: 'clamp(12px, 3vw, 16px)',
                      color: '#E5E7EB',
                      fontFamily: "'Merriweather', serif",
                      fontSize: 'clamp(14px, 3.5vw, 16px)',
                      fontWeight: '500',
                      transition: 'all 0.3s',
                      border: '1px solid transparent',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.background = 'linear-gradient(to right, rgba(30, 41, 55, 0.5), rgba(30, 41, 55, 0.5))';
                      e.currentTarget.style.border = '1px solid rgba(55, 65, 81, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#E5E7EB';
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.border = '1px solid transparent';
                    }}
                  >
                    <span style={{ fontSize: 'clamp(16px, 4vw, 20px)' }}>{item.icon}</span>
                    <span>{item.text}</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Portal Button */}
          <div
            style={{
              padding: 'clamp(16px, 4vw, 24px)',
              borderTop: '1px solid rgba(55, 65, 81, 0.5)',
            }}
          >
            <a
              href="/portal/login"
              onClick={closeMobileMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'clamp(8px, 2vw, 12px)',
                padding: 'clamp(12px, 3vw, 16px)',
                borderRadius: 'clamp(12px, 3vw, 16px)',
                background: 'linear-gradient(to right, #D4A017, #D4A017)',
                color: '#1F2937',
                fontFamily: "'Merriweather', serif",
                fontSize: 'clamp(14px, 3.5vw, 16px)',
                fontWeight: '600',
                transition: 'all 0.3s',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(212, 160, 23, 0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #D4A017, #D4A017)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(212, 160, 23, 0.35)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #D4A017, #D4A017)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 160, 23, 0.25)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span>Access Portal</span>
              <div
                style={{
                  width: 'clamp(6px, 1.5vw, 8px)',
                  height: 'clamp(6px, 1.5vw, 8px)',
                  background: 'rgba(30, 41, 55, 0.3)',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite',
                }}
              />
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div style={{ height: isScrolled ? 'clamp(56px, 14vw, 64px)' : 'clamp(64px, 16vw, 80px)', transition: 'height 0.3s' }} />
      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Navbar;