"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}!`);
    setEmail('');
  };

  return (
    <footer
      style={{
        backgroundColor: '#4B5320',
        color: '#FFFFFF',
        padding: '64px 16px',
        fontFamily: "'Merriweather', serif",
        boxShadow: '0 -4px 8px rgba(0,0,0,0.15)'
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px',
          paddingBottom: '48px',
          borderBottom: '1px solid #E5E7EB'
        }}
        className="footer-grid"
      >
        <div>
          <h3
            style={{
              fontSize: '22px',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#D4A017'
            }}
          >
            About Sanniville Academy
          </h3>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.7',
              color: '#E5E7EB',
              maxWidth: '300px'
            }}
          >
            Sanniville Academy is dedicated to fostering academic excellence, leadership, and innovation in a nurturing environment.
          </p>
          <img
            src="/images/sanniville-logo.png"
            alt="Sanniville Academy Logo"
            style={{
              height: '48px',
              width: 'auto',
              objectFit: 'contain',
              marginTop: '16px',
              transition: 'transform 0.3s ease-in-out'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>
        <div>
          <h3
            style={{
              fontSize: '22px',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#D4A017'
            }}
          >
            Quick Links
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              { name: 'Home', href: '/' },
              { name: 'About Us', href: '/about' },
              { name: 'Admissions', href: '/admissions' },
              { name: 'News & Events', href: '/news-events' },
              { name: 'Academics', href: '/academics' },
              { name: 'E-Portal', href: '/e-portal' },
              { name: 'Contact Us', href: '/contact-us' }
            ].map((link, index) => (
              <li key={index} style={{ marginBottom: '12px' }}>
                <Link
                  href={link.href}
                  style={{
                    color: '#E5E7EB',
                    textDecoration: 'none',
                    fontSize: '16px',
                    transition: 'color 0.3s ease-in-out'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#D4A017'}
                  onMouseLeave={(e) => e.target.style.color = '#E5E7EB'}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3
            style={{
              fontSize: '22px',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#D4A017'
            }}
          >
            Contact Us
          </h3>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.7',
              color: '#E5E7EB',
              marginBottom: '16px'
            }}
          >
            Lagos Campus<br />
            123 Sanni Road, Victoria Island, Lagos<br />
            Phone: +234 123 456 7890<br />
            Email: lagos@sannivilleacademy.edu.ng
          </p>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.7',
              color: '#E5E7EB'
            }}
          >
            Abuja Campus<br />
            456 Unity Avenue, Garki, Abuja<br />
            Phone: +234 987 654 3210<br />
            Email: abuja@sannivilleacademy.edu.ng
          </p>
        </div>
        <div>
          <h3
            style={{
              fontSize: '22px',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#D4A017'
            }}
          >
            Stay Connected
          </h3>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '24px'
            }}
          >
            {[
              { href: 'https://facebook.com/sanniville', icon: 'fab fa-facebook-f' },
              { href: 'https://twitter.com/sanniville', icon: 'fab fa-twitter' },
              { href: 'https://instagram.com/sanniville', icon: 'fab fa-instagram' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                style={{
                  color: '#E5E7EB',
                  fontSize: '28px',
                  transition: 'all 0.3s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#D4A017';
                  e.target.style.transform = 'scale(1.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#E5E7EB';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
            className="subscribe-form"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: '14px',
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
                fontSize: '16px',
                width: '100%',
                maxWidth: '220px',
                fontFamily: "'Merriweather', serif",
                backgroundColor: '#FFFFFF',
                color: '#1F2937',
                transition: 'border-color 0.3s ease-in-out'
              }}
              onFocus={(e) => e.target.style.borderColor = '#D4A017'}
              onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
            />
            <button
              onClick={handleSubscribe}
              style={{
                backgroundColor: '#D4A017',
                color: '#1F2937',
                padding: '14px 24px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                width: '100%',
                maxWidth: '220px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#b58900';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#D4A017';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          marginTop: '40px',
          fontSize: '14px',
          color: '#E5E7EB'
        }}
      >
        &copy; {new Date().getFullYear()} Sanniville Academy. All rights reserved.
      </div>

      <style jsx>{`
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .subscribe-form {
            flex-direction: row;
          }
          .subscribe-form input,
          .subscribe-form button {
            max-width: 180px;
          }
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .subscribe-form input,
          .subscribe-form button {
            max-width: 220px;
          }
        }
        @media (max-width: 639px) {
          .subscribe-form {
            flex-direction: column;
          }
          .subscribe-form input,
          .subscribe-form button {
            max-width: 100%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;