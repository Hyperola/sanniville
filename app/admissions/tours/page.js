"use client";
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function Tours() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    campus: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Tour request submitted! We will confirm your visit soon.');
  };

  return (
    <div>
      <Navbar />
      <main style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '32px 16px',
        fontFamily: "'Merriweather', serif",
        color: '#1F2937'
      }}>
        <section style={{
          position: 'relative',
          height: '500px',
          marginBottom: '64px',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          backgroundImage: 'url(/images/tours-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(75, 83, 32, 0.6)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFFFFF',
            textAlign: 'center',
            padding: '24px'
          }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '16px',
              letterSpacing: '1.2px'
            }}>
              Visit Our Campuses
            </h1>
            <p style={{
              fontSize: '22px',
              maxWidth: '700px',
              marginBottom: '24px',
              lineHeight: '1.6'
            }}>
              Experience the vibrant learning environment at Sanniville Academy through a personalized campus tour.
            </p>
          </div>
        </section>

        <section style={{
          padding: '64px 0',
          backgroundColor: '#F9FAFB',
          borderRadius: '12px',
          marginBottom: '64px'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            Schedule a Tour
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 32px',
            lineHeight: '1.7',
            textAlign: 'center'
          }}>
            See our state-of-the-art facilities, meet our faculty, and discover what makes Sanniville unique.
          </p>
          <form
            onSubmit={handleSubmit}
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              backgroundColor: '#FFFFFF',
              padding: '24px',
              borderRadius: '8px',
              boxShadow: '0 6px 12px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#4B5320',
                display: 'block',
                marginBottom: '8px'
              }}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #D4A017',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#4B5320',
                display: 'block',
                marginBottom: '8px'
              }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #D4A017',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#4B5320',
                display: 'block',
                marginBottom: '8px'
              }}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #D4A017',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#4B5320',
                display: 'block',
                marginBottom: '8px'
              }}>
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #D4A017',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#4B5320',
                display: 'block',
                marginBottom: '8px'
              }}>
                Preferred Campus
              </label>
              <select
                name="campus"
                value={formData.campus}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #D4A017',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
              >
                <option value="">Select Campus</option>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
              </select>
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#D4A017',
                color: '#1F2937',
                padding: '14px 32px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.3s, transform 0.2s'
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
              Schedule Tour
            </button>
          </form>
        </section>

        <section style={{
          textAlign: 'center',
          padding: '64px',
          backgroundColor: '#D4A017',
          borderRadius: '12px',
          color: '#1F2937',
          marginBottom: '64px'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '16px'
          }}>
            Experience Sanniville
          </h2>
          <p style={{
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto 24px',
            lineHeight: '1.7'
          }}>
            Join us for a tour and see why Sanniville is the perfect place for your child’s education.
          </p>
          <Link
            href="/contact-us"
            style={{
              backgroundColor: '#1F2937',
              color: '#FFFFFF',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '600',
              transition: 'background-color 0.3s, transform 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#4B5320';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#1F2937';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Contact Us
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}