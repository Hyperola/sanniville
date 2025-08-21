"use client";
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function Campuses() {
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
        {/* Hero Section */}
        <section style={{
          position: 'relative',
          height: '500px',
          marginBottom: '64px',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          backgroundImage: 'url(/images/campuses.jpg)',
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
              Our Vibrant Campuses
            </h1>
            <p style={{
              fontSize: '22px',
              maxWidth: '700px',
              marginBottom: '24px',
              lineHeight: '1.6'
            }}>
              Explore Sanniville Academy’s state-of-the-art campuses, designed to inspire learning and growth.
            </p>
          </div>
        </section>

        {/* Campuses */}
        <section style={{
          padding: '64px 0',
          textAlign: 'center',
          backgroundColor: '#F9FAFB',
          borderRadius: '12px',
          marginBottom: '64px'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: '16px'
          }}>
            Our Learning Environments
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 32px',
            lineHeight: '1.7'
          }}>
            With campuses in Lagos and Abuja, Sanniville offers world-class facilities, including modern labs, libraries, and sports fields, fostering an environment where students thrive.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {[
              { 
                name: 'Lagos Campus', 
                desc: 'Our flagship campus, featuring cutting-edge STEM labs, a 500-seat auditorium, and vibrant sports facilities.', 
                image: '/images/lagos-campus.jpeg' 
              },
              { 
                name: 'Abuja Campus', 
                desc: 'A hub of innovation with modern classrooms, a digital library, and eco-friendly design.', 
                image: '/images/abuja-campus.jpeg' 
              }
            ].map((campus, index) => (
              <div key={index} style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <img
                  src={campus.image}
                  alt={campus.name}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  padding: '24px',
                  backgroundColor: '#FFFFFF'
                }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#4B5320',
                    marginBottom: '12px'
                  }}>
                    {campus.name}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: '#6B7280',
                    lineHeight: '1.5'
                  }}>
                    {campus.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
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
            Visit Our Campuses
          </h2>
          <p style={{
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto 24px',
            lineHeight: '1.7'
          }}>
            Schedule a tour to experience our vibrant campuses firsthand.
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