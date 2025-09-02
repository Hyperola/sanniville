"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) setActiveDropdown(null);
  };

  const navItems = {
    home: { href: '/', text: 'Home' },
    about: {
      text: 'About Us',
      subItems: [
        { href: '/about/history', text: 'History' },
        { href: '/about/vision-mission', text: 'Vision, Mission & Values' },
        { href: '/about/leadership', text: 'Leadership Team' },
        { href: '/about/song-prayers', text: 'School Song & Prayers' },
        { href: '/about/accreditation', text: 'Accreditation & Affiliations' },
        { href: '/about/faqs', text: 'FAQs' },
        { href: '/about/careers', text: 'Careers' },
        { href: '/about/success-stories', text: 'Success Stories' }
      ]
    },
    admissions: {
      text: 'Admissions',
      subItems: [
        { href: '/admissions/why-choose-us', text: 'Why Choose Us' },
        { href: '/admissions/procedure', text: 'Admission Procedure' },
        { href: '/admissions/requirements', text: 'Admission Requirements' },
        { href: '/admissions/tuition', text: 'Tuition & Payment' },
        { href: '/admissions/examination', text: 'Entrance Examination' },
        { href: '/admissions/scholarships', text: 'Scholarships' },
        { href: '/admissions/tours', text: 'Campus Tours' },
        { href: '/admissions/apply', text: 'Application Form' }
      ]
    },
    news: {
      text: 'News & Events',
      subItems: [
        { href: '/news-events#latest-news', text: 'Latest News' },
        { href: '/news-events#upcoming-events', text: 'Upcoming Events' },
        { href: '/news-events#event-gallery', text: 'Event Gallery' }
      ]
    },
    campusLife: {
      text: 'Campus Life',
      subItems: [
        { href: '/academics', text: 'Academics' },
        { href: '/our-campus', text: 'Our Campus' },
        { href: '/alumni-network', text: 'Alumni Network' }
      ]
    },
    connect: {
      text: 'Connect',
      subItems: [
        { href: '/e-portal', text: 'E-Portal' },
        { href: '/contact-us', text: 'Contact Us' }
      ]
    }
  };

  const renderDropdownItems = (items) => {
    return items.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        style={{
          display: 'block',
          padding: '10px 16px',
          textDecoration: 'none',
          color: '#1F2937',
          fontSize: '14px',
          transition: 'all 0.2s ease',
          borderRadius: '4px'
        }}
        onClick={() => {
          setActiveDropdown(null);
          setIsMobileMenuOpen(false);
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#D4A017';
          e.target.style.color = '#1F2937';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = '#1F2937';
        }}
      >
        {item.text}
      </Link>
    ));
  };

  return (
    <nav
      style={{
        background: 'linear-gradient(180deg, #4B5320 0%, #3a4419 100%)',
        color: '#FFFFFF',
        padding: '16px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        fontFamily: "'Merriweather', serif",
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(6px)',
        backgroundColor: 'rgba(75, 83, 32, 0.95)'
      }}
      ref={navbarRef}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '68px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src="/images/sanniville-logo.png"
            alt="Sanniville Academy Logo"
            style={{
              height: '44px',
              width: 'auto',
              objectFit: 'contain',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
          <Link
            href="/"
            style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#FFFFFF',
              textDecoration: 'none',
              letterSpacing: '0.5px'
            }}
          >
            Sanniville Academy
          </Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
            className="desktop-nav"
          >
            {Object.entries(navItems).map(([key, item]) => (
              <div key={key} style={{ position: 'relative' }}>
                {item.subItems ? (
                  <>
                    <button
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#FFFFFF',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: "'Merriweather', serif",
                        fontSize: '15px',
                        padding: '10px 14px',
                        borderRadius: '6px',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => toggleDropdown(key)}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#D4A017';
                        e.target.style.backgroundColor = 'rgba(212, 160, 23, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#FFFFFF';
                        e.target.style.backgroundColor = 'transparent';
                      }}
                    >
                      {item.text}
                      <svg
                        style={{
                          marginLeft: '6px',
                          width: '12px',
                          height: '12px',
                          transition: 'transform 0.3s ease'
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === key && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          marginTop: '8px',
                          width: '220px',
                          backgroundColor: '#FFFFFF',
                          color: '#1F2937',
                          boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                          borderRadius: '6px',
                          zIndex: 1001,
                          padding: '10px 0',
                          border: '1px solid #E5E7EB',
                          animation: 'fadeIn 0.3s ease'
                        }}
                      >
                        {renderDropdownItems(item.subItems)}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    style={{
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      fontSize: '15px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#D4A017';
                      e.target.style.backgroundColor = 'rgba(212, 160, 23, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#FFFFFF';
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    {item.text}
                  </Link>
                )}
              </div>
            ))}
            <a
              href="/login"
              style={{
                backgroundColor: '#D4A017',
                color: '#1F2937',
                padding: '8px 18px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#b58900';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#D4A017';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              E-Portal Login
            </a>
          </div>

          <button
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              fontSize: '24px',
              padding: '8px'
            }}
            className="mobile-toggle"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#3a4419',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            animation: 'slideIn 0.3s ease'
          }}
          className="mobile-menu"
        >
          {Object.entries(navItems).map(([key, item]) => (
            <div key={key} style={{ display: 'flex', flexDirection: 'column' }}>
              {item.subItems ? (
                <>
                  <button
                    style={{
                      color: '#FFFFFF',
                      background: 'none',
                      border: 'none',
                      fontSize: '16px',
                      padding: '12px 14px',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                    onClick={() => toggleDropdown(key)}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    {item.text}
                    <svg
                      style={{
                        width: '16px',
                        height: '16px',
                        transition: 'transform 0.3s ease',
                        transform: activeDropdown === key ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === key && (
                    <div
                      style={{
                        paddingLeft: '16px',
                        marginTop: '4px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px'
                      }}
                    >
                      {renderDropdownItems(item.subItems)}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '16px',
                    padding: '12px 14px',
                    borderRadius: '6px'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  {item.text}
                </Link>
              )}
            </div>
          ))}
          <a
            href="/login"
            style={{
              color: '#1F2937',
              backgroundColor: '#D4A017',
              padding: '12px 14px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '6px',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#b58900'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#D4A017'}
          >
            E-Portal Login
          </a>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
        @media (min-width: 1025px) {
          .mobile-menu {
            display: none;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;