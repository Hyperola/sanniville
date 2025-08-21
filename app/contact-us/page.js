"use client";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will respond within 24 hours.');
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
          height: '600px',
          marginBottom: '64px',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          backgroundImage: 'url(/images/contact-hero.jpg)',
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
              Contact Us
            </h1>
            <p style={{
              fontSize: '22px',
              maxWidth: '700px',
              marginBottom: '24px',
              lineHeight: '1.6'
            }}>
              We’re here to answer your questions and guide you through your Sanniville journey.
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
            Get in Touch
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 32px',
            lineHeight: '1.7',
            textAlign: 'center'
          }}>
            Reach out to our admissions team or visit one of our campuses for more information.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '32px',
            maxWidth: '1000px',
            margin: '0 auto',
            '@media (maxWidth: 768px)': { flexDirection: 'column' }
          }}>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#4B5320',
                marginBottom: '16px'
              }}>
                Contact Form
              </h3>
              <form
                onSubmit={handleSubmit}
                style={{
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
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #D4A017',
                      borderRadius: '8px',
                      fontSize: '16px',
                      minHeight: '120px'
                    }}
                  />
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
                  Send Message
                </button>
              </form>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#4B5320',
                marginBottom: '16px'
              }}>
                Our Campuses
              </h3>
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                marginBottom: '24px'
              }}>
                <h4 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#4B5320',
                  marginBottom: '12px'
                }}>
                  Lagos Campus
                </h4>
                <p style={{
                  fontSize: '16px',
                  color: '#6B7280',
                  lineHeight: '1.5',
                  marginBottom: '12px'
                }}>
                  123 Sanni Road, Victoria Island, Lagos<br />
                  Phone: +234 123 456 7890<br />
                  Email: lagos@sannivilleacademy.edu.ng
                </p>
              </div>
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#4B5320',
                  marginBottom: '12px'
                }}>
                  Abuja Campus
                </h4>
                <p style={{
                  fontSize: '16px',
                  color: '#6B7280',
                  lineHeight: '1.5',
                  marginBottom: '12px'
                }}>
                  456 Unity Avenue, Garki, Abuja<br />
                  Phone: +234 987 654 3210<br />
                  Email: abuja@sannivilleacademy.edu.ng
                </p>
              </div>
            </div>
          </div>
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
            Visit Us
          </h2>
          <p style={{
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto 24px',
            lineHeight: '1.7'
          }}>
            Schedule a campus tour to experience Sanniville Academy firsthand.
          </p>
          <Link
            href="/admissions/tours"
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
            Book a Tour
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}