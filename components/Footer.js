"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Set initial value
    checkIsMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIsMobile);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'About Us', 
      href: '/about',
      dropdown: [
        { name: 'Our Story', href: '/about/our-story' },
        { name: 'Leadership', href: '/about/leadership' },
        { name: 'Accreditations', href: '/about/accreditations' }
      ]
    },
    { 
      name: 'Academics', 
      href: '/academics',
      dropdown: [
        { name: 'Curriculum', href: '/academics/curriculum' },
        { name: 'Departments', href: '/academics/departments' },
        { name: 'Academic Calendar', href: '/academics/calendar' }
      ]
    },
    { 
      name: 'Admissions', 
      href: '/admissions',
      dropdown: [
        { name: 'Apply Now', href: '/admissions/apply' },
        { name: 'Requirements', href: '/admissions/requirements' },
        { name: 'Scholarships', href: '/admissions/scholarships' }
      ]
    },
    { 
      name: 'Campuses', 
      href: '/campuses',
      dropdown: [
        { name: 'Lagos Campus', href: '/campuses/lagos' },
        { name: 'Abuja Campus', href: '/campuses/abuja' },
        { name: 'Virtual Tour', href: '/campuses/virtual-tour' }
      ]
    },
    { name: 'News & Events', href: '/news-events' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'E-Portal', href: '/e-portal', highlight: true }
  ];

  return (
    <>
      <nav
        style={{
          backgroundColor: '#4B5320',
          padding: isMobile ? '16px' : '0 32px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          fontFamily: "'Merriweather', serif"
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          {/* Logo */}
          <Link 
            href="/" 
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              textDecoration: 'none'
            }}
            onClick={closeMenu}
          >
            <img
              src="/images/sanniville-logo.png"
              alt="Sanniville Academy Logo"
              style={{
                height: isMobile ? '40px' : '50px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {navItems.map((item, index) => (
                <div key={index} style={{ position: 'relative' }}>
                  {item.dropdown ? (
                    <div style={{ position: 'relative' }}>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: '#FFFFFF',
                          padding: '20px 16px',
                          fontSize: '16px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.name}
                        <FiChevronDown style={{
                          transform: activeDropdown === item.name ? 'rotate(180deg)' : 'rotate(0)',
                          transition: 'transform 0.3s ease'
                        }} />
                      </button>
                      {activeDropdown === item.name && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: '0',
                            backgroundColor: '#FFFFFF',
                            minWidth: '200px',
                            borderRadius: '8px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                            padding: '16px 0',
                            zIndex: 1000
                          }}
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.dropdown.map((dropdownItem, idx) => (
                            <Link
                              key={idx}
                              href={dropdownItem.href}
                              style={{
                                display: 'block',
                                padding: '12px 24px',
                                color: '#1F2937',
                                textDecoration: 'none',
                                fontSize: '14px',
                                fontWeight: '500',
                                transition: 'background-color 0.3s ease'
                              }}
                              onMouseEnter={(e) => e.target.style.backgroundColor = '#F9FAFB'}
                              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      style={{
                        color: '#FFFFFF',
                        padding: '20px 16px',
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: item.highlight ? '700' : '600',
                        display: 'block',
                        transition: 'color 0.3s ease',
                        backgroundColor: item.highlight ? '#D4A017' : 'transparent',
                        borderRadius: item.highlight ? '6px' : '0',
                        margin: item.highlight ? '0 8px' : '0'
                      }}
                      onMouseEnter={(e) => {
                        if (!item.highlight) e.target.style.color = '#D4A017';
                      }}
                      onMouseLeave={(e) => {
                        if (!item.highlight) e.target.style.color = '#FFFFFF';
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '24px',
                cursor: 'pointer',
                padding: '8px'
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobile && isOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              right: '0',
              backgroundColor: '#4B5320',
              padding: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: '#FFFFFF',
                          padding: '16px',
                          fontSize: '16px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                          textAlign: 'left'
                        }}
                      >
                        {item.name}
                        <FiChevronDown style={{
                          transform: activeDropdown === item.name ? 'rotate(180deg)' : 'rotate(0)',
                          transition: 'transform 0.3s ease'
                        }} />
                      </button>
                      {activeDropdown === item.name && (
                        <div style={{ paddingLeft: '24px' }}>
                          {item.dropdown.map((dropdownItem, idx) => (
                            <Link
                              key={idx}
                              href={dropdownItem.href}
                              style={{
                                display: 'block',
                                padding: '12px 16px',
                                color: '#FFFFFF',
                                textDecoration: 'none',
                                fontSize: '14px',
                                fontWeight: '500',
                                borderLeft: '2px solid #D4A017'
                              }}
                              onClick={closeMenu}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      style={{
                        color: '#FFFFFF',
                        padding: '16px',
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: item.highlight ? '700' : '600',
                        display: 'block',
                        backgroundColor: item.highlight ? '#D4A017' : 'transparent',
                        borderRadius: item.highlight ? '6px' : '0',
                        margin: item.highlight ? '8px 0' : '0'
                      }}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Overlay for mobile menu */}
      {isMobile && isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '72px',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 999
          }}
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;