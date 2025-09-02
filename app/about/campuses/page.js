"use client";
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Campuses() {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div style={{ fontFamily: "'Merriweather', serif", color: '#1F2937' }}>
      <Navbar />
      <main style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: isMobile ? '24px 16px' : '32px 16px'
      }}>
        {/* Hero Section */}
        <section style={{
          position: 'relative',
          height: isMobile ? '350px' : '500px',
          marginBottom: isMobile ? '48px' : '64px',
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
            padding: isMobile ? '16px' : '24px'
          }}>
            <h1 style={{
              fontSize: isMobile ? '2.2rem' : '3rem',
              fontWeight: '700',
              marginBottom: isMobile ? '12px' : '16px',
              letterSpacing: '1.2px',
              lineHeight: '1.2'
            }}>
              Our Vibrant Campuses
            </h1>
            <p style={{
              fontSize: isMobile ? '1.1rem' : '1.4rem',
              maxWidth: '700px',
              marginBottom: isMobile ? '20px' : '24px',
              lineHeight: '1.6'
            }}>
              Explore Sanniville Academys state-of-the-art campuses, designed to inspire learning and growth.
            </p>
          </div>
        </section>

        {/* Campuses */}
        <section style={{
          padding: isMobile ? '48px 24px' : '64px 48px',
          textAlign: 'center',
          backgroundColor: '#F9FAFB',
          borderRadius: '12px',
          marginBottom: isMobile ? '48px' : '64px'
        }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : '2.25rem',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: isMobile ? '12px' : '16px'
          }}>
            Our Learning Environments
          </h2>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.125rem',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto',
            marginBottom: isMobile ? '24px' : '32px',
            lineHeight: '1.7'
          }}>
            With campuses in Lagos and Abuja, Sanniville offers world-class facilities, including modern labs, libraries, and sports fields, fostering an environment where students thrive.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: isMobile ? '20px' : '24px'
          }}>
            {[
              { 
                name: 'Lagos Campus', 
                desc: 'Our flagship campus, featuring cutting-edge STEM labs, a 500-seat auditorium, and vibrant sports facilities.', 
                image: '/images/lagos-campus.jpeg',
                features: ['STEM Labs', '500-seat Auditorium', 'Sports Facilities', 'Library', 'Art Studios']
              },
              { 
                name: 'Abuja Campus', 
                desc: 'A hub of innovation with modern classrooms, a digital library, and eco-friendly design.', 
                image: '/images/abuja-campus.jpeg',
                features: ['Modern Classrooms', 'Digital Library', 'Eco-friendly Design', 'Innovation Hub', 'Science Center']
              }
            ].map((campus, index) => (
              <div key={index} style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                transition: !isMobile ? 'transform 0.3s' : 'none',
                backgroundColor: '#FFFFFF'
              }}
              onMouseEnter={!isMobile ? (e) => e.currentTarget.style.transform = 'scale(1.05)' : undefined}
              onMouseLeave={!isMobile ? (e) => e.currentTarget.style.transform = 'scale(1)' : undefined}
              >
                <div style={{
                  position: 'relative',
                  height: isMobile ? '200px' : '250px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={campus.image}
                    alt={campus.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: !isMobile ? 'transform 0.3s' : 'none'
                    }}
                    onMouseEnter={!isMobile ? (e) => e.target.style.transform = 'scale(1.1)' : undefined}
                    onMouseLeave={!isMobile ? (e) => e.target.style.transform = 'scale(1)' : undefined}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    padding: '16px',
                    color: 'white'
                  }}>
                    <h3 style={{
                      fontSize: isMobile ? '1.4rem' : '1.6rem',
                      fontWeight: '600',
                      margin: 0,
                      textAlign: 'left'
                    }}>
                      {campus.name}
                    </h3>
                  </div>
                </div>
                <div style={{
                  padding: isMobile ? '20px' : '24px'
                }}>
                  <p style={{
                    fontSize: isMobile ? '1rem' : '1.1rem',
                    color: '#6B7280',
                    lineHeight: '1.5',
                    marginBottom: '20px'
                  }}>
                    {campus.desc}
                  </p>
                  
                  <div style={{
                    textAlign: 'left'
                  }}>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#4B5320',
                      marginBottom: '12px'
                    }}>
                      Key Features:
                    </h4>
                    <ul style={{
                      paddingLeft: '20px',
                      color: '#6B7280',
                      margin: 0
                    }}>
                      {campus.features.map((feature, i) => (
                        <li key={i} style={{ marginBottom: '8px' }}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href={`/campuses/${campus.name.toLowerCase().replace(' ', '-')}`}
                    style={{
                      display: 'inline-block',
                      marginTop: '20px',
                      color: '#D4A017',
                      fontWeight: '600',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      border: '2px solid #D4A017',
                      padding: '10px 20px',
                      borderRadius: '6px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={!isMobile ? (e) => {
                      e.target.style.backgroundColor = '#D4A017';
                      e.target.style.color = '#FFFFFF';
                    } : undefined}
                    onMouseLeave={!isMobile ? (e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#D4A017';
                    } : undefined}
                  >
                    Explore Campus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities Section */}
        <section style={{
          padding: isMobile ? '40px 24px' : '64px 48px',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          marginBottom: isMobile ? '48px' : '64px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : '2.25rem',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: isMobile ? '24px' : '32px',
            textAlign: 'center'
          }}>
            World-Class Facilities
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: isMobile ? '24px' : '32px'
          }}>
            {[
              {
                title: 'Science & Technology',
                description: 'Advanced laboratories for physics, chemistry, biology, and computer science with cutting-edge equipment.',
                icon: '🔬'
              },
              {
                title: 'Sports Complex',
                description: 'Olympic-sized swimming pool, football field, basketball courts, and indoor sports facilities.',
                icon: '⚽'
              },
              {
                title: 'Performing Arts',
                description: 'Theater, music rooms, dance studios, and recording facilities for creative expression.',
                icon: '🎭'
              },
              {
                title: 'Learning Commons',
                description: 'Modern libraries with digital resources, study spaces, and collaborative learning areas.',
                icon: '📚'
              }
            ].map((facility, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: isMobile ? '20px' : '24px',
                borderRadius: '8px',
                backgroundColor: '#F9FAFB',
                transition: !isMobile ? 'transform 0.3s' : 'none'
              }}
              onMouseEnter={!isMobile ? (e) => e.currentTarget.style.transform = 'translateY(-5px)' : undefined}
              onMouseLeave={!isMobile ? (e) => e.currentTarget.style.transform = 'translateY(0)' : undefined}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '16px'
                }}>
                  {facility.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#4B5320',
                  marginBottom: '12px'
                }}>
                  {facility.title}
                </h3>
                <p style={{
                  color: '#6B7280',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{
          textAlign: 'center',
          padding: isMobile ? '40px 24px' : '64px 48px',
          backgroundColor: '#D4A017',
          borderRadius: '12px',
          color: '#1F2937',
          marginBottom: isMobile ? '48px' : '64px'
        }}>
          <h2 style={{
            fontSize: isMobile ? '1.8rem' : '2.25rem',
            fontWeight: '700',
            marginBottom: isMobile ? '16px' : '24px'
          }}>
            Visit Our Campuses
          </h2>
          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            marginBottom: isMobile ? '24px' : '32px',
            lineHeight: '1.7'
          }}>
            Schedule a tour to experience our vibrant campuses firsthand and discover the Sanniville difference.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: '#1F2937',
                color: '#FFFFFF',
                padding: isMobile ? '14px 24px' : '16px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: isMobile ? '1rem' : '1.1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                textAlign: 'center'
              }}
              onMouseEnter={!isMobile ? (e) => {
                e.target.style.backgroundColor = '#4B5320';
                e.target.style.transform = 'scale(1.05)';
              } : undefined}
              onMouseLeave={!isMobile ? (e) => {
                e.target.style.backgroundColor = '#1F2937';
                e.target.style.transform = 'scale(1)';
              } : undefined}
            >
              Schedule a Tour
            </Link>
            <Link
              href="/virtual-tour"
              style={{
                backgroundColor: 'transparent',
                color: '#1F2937',
                padding: isMobile ? '14px 24px' : '16px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: isMobile ? '1rem' : '1.1rem',
                fontWeight: '600',
                border: '2px solid #1F2937',
                transition: 'all 0.3s ease',
                textAlign: 'center'
              }}
              onMouseEnter={!isMobile ? (e) => {
                e.target.style.backgroundColor = '#1F2937';
                e.target.style.color = '#FFFFFF';
                e.target.style.transform = 'scale(1.05)';
              } : undefined}
              onMouseLeave={!isMobile ? (e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#1F2937';
                e.target.style.transform = 'scale(1)';
              } : undefined}
            >
              Take Virtual Tour
            </Link>
          </div>
        </section>

        {/* Location Map Section */}
        <section style={{
          padding: isMobile ? '40px 24px' : '64px 48px',
          backgroundColor: '#F9FAFB',
          borderRadius: '12px',
          marginBottom: isMobile ? '48px' : '64px'
        }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : '2.25rem',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: isMobile ? '24px' : '32px',
            textAlign: 'center'
          }}>
            Our Locations
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '32px' : '48px',
            alignItems: 'start'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '600',
                color: '#4B5320',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>📍</span> Lagos Campus
              </h3>
              <p style={{
                color: '#6B7280',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                123 Education Drive, Victoria Island<br />
                Lagos, Nigeria
              </p>
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
              }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#4B5320',
                  marginBottom: '12px'
                }}>
                  Campus Hours:
                </h4>
                <p style={{ color: '#6B7280', margin: '4px 0' }}>Monday - Friday: 7:30 AM - 5:00 PM</p>
                <p style={{ color: '#6B7280', margin: '4px 0' }}>Saturday: 9:00 AM - 2:00 PM</p>
                <p style={{ color: '#6B7280', margin: '4px 0' }}>Sunday: Closed</p>
              </div>
            </div>
            
            <div>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '600',
                color: '#4B5320',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>📍</span> Abuja Campus
              </h3>
              <p style={{
                color: '#6B7280',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                456 Knowledge Avenue, Garki District<br />
                Abuja, Nigeria
              </p>
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
              }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#4B5320',
                  marginBottom: '12px'
                }}>
                  Campus Hours:
                </h4>
                <p style={{ color: '#6B7280', margin: '4px 0' }}>Monday - Friday: 7:30 AM - 5:00 PM</p>
                <p style={{ color: '#6B7280', margin: '4px 0' }}>Saturday: 9:00 AM - 2:00 PM</p>
                <p style={{ color: '#6B7280', margin: '4px 0' }}>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div style={{
            marginTop: '40px',
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            overflow: 'hidden',
            height: isMobile ? '300px' : '400px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            {/* This would be your map component */}
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#E5E7EB',
              color: '#6B7280',
              fontWeight: '600'
            }}>
              Interactive Campus Map
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}