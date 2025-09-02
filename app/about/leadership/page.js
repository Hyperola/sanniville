"use client";
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Leaders() {
  const [activeTab, setActiveTab] = useState('lagos');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Dr. Olufemi Aina',
      role: 'Principal, Lagos Campus',
      quote: 'Leading Sanniville’s Lagos campus is a privilege. Our focus on holistic education empowers students to excel globally.',
      image: '/images/leader-aina.jpg'
    },
    {
      name: 'Mrs. Grace Okon',
      role: 'Head of Academics, Lagos Campus',
      quote: 'Our curriculum blends rigor and creativity, preparing students for a dynamic world.',
      image: '/images/leader-okon.jpg'
    },
    {
      name: 'Dr. Halima Ibrahim',
      role: 'Principal, Abuja Campus',
      quote: 'At Sanniville Abuja, we foster innovation and leadership in a supportive environment.',
      image: '/images/leader-ibrahim.jpg'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      <Navbar />
      <main style={{
        maxWidth: '1280px',
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(16px, 5vw, 32px) clamp(8px, 3vw, 16px)',
        fontFamily: "'Merriweather', serif",
        color: '#1F2937',
        boxSizing: 'border-box',
      }}>
        {/* Hero Section */}
        <section style={{
          position: 'relative',
          height: 'clamp(400px, 60vw, 600px)',
          marginBottom: 'clamp(32px, 8vw, 64px)',
          borderRadius: 'clamp(8px, 2vw, 12px)',
          overflow: 'hidden',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
          backgroundImage: 'url(/images/leaders-hero.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(75, 83, 32, 0.65)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFFFFF',
            textAlign: 'center',
            padding: 'clamp(16px, 5vw, 32px)',
          }}>
            <h1 style={{
              fontSize: 'clamp(28px, 6vw, 52px)',
              fontWeight: '700',
              marginBottom: 'clamp(10px, 2.5vw, 20px)',
              letterSpacing: 'clamp(0.8px, 0.2vw, 1.5px)',
            }}>
              Our Visionary Leaders
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 4vw, 24px)',
              maxWidth: 'min(90%, 800px)',
              marginBottom: 'clamp(16px, 4vw, 32px)',
              lineHeight: '1.6',
            }}>
              Meet the dedicated leaders of Sanniville Academy, driving excellence and innovation across our Lagos and Abuja campuses.
            </p>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: '#D4A017',
                color: '#1F2937',
                padding: 'clamp(12px, 3vw, 16px) clamp(24px, 6vw, 36px)',
                borderRadius: 'clamp(6px, 1.5vw, 8px)',
                textDecoration: 'none',
                fontSize: 'clamp(16px, 4vw, 20px)',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                display: 'inline-block',
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
              Connect with Us
            </Link>
          </div>
        </section>

        {/* Leadership Team */}
        <section style={{
          padding: 'clamp(32px, 8vw, 64px) 0',
          backgroundColor: '#F9FAFB',
          borderRadius: 'clamp(8px, 2vw, 12px)',
          marginBottom: 'clamp(32px, 8vw, 64px)',
        }}>
          <h2 style={{
            fontSize: 'clamp(24px, 5vw, 36px)',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: 'clamp(10px, 2.5vw, 20px)',
            textAlign: 'center',
          }}>
            Our Leadership Team
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            color: '#6B7280',
            maxWidth: 'min(90%, 800px)',
            margin: '0 auto clamp(20px, 5vw, 40px)',
            lineHeight: '1.8',
            textAlign: 'center',
          }}>
            Our leaders bring decades of experience and a shared commitment to fostering academic excellence and personal growth.
          </p>

          {/* Tab Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 'clamp(24px, 6vw, 48px)',
            borderBottom: '1px solid #E5E7EB',
            gap: 'clamp(8px, 2vw, 16px)',
            flexWrap: 'wrap',
          }}>
            {['lagos', 'abuja'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: 'clamp(10px, 2.5vw, 16px) clamp(20px, 5vw, 32px)',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: activeTab === tab ? '3px solid #D4A017' : '3px solid transparent',
                  fontFamily: "'Merriweather', serif",
                  fontWeight: '600',
                  fontSize: 'clamp(14px, 3.5vw, 18px)',
                  color: activeTab === tab ? '#4B5320' : '#6B7280',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab) e.target.style.color = '#4B5320';
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab) e.target.style.color = '#6B7280';
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Campus
              </button>
            ))}
          </div>

          {/* Lagos Leaders */}
          {activeTab === 'lagos' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fit, minmax(clamp(240px, 30vw, 320px), 1fr))`,
              gap: 'clamp(16px, 4vw, 32px)',
            }}>
              {[
                {
                  name: 'Dr. Olufemi Aina',
                  role: 'Principal',
                  bio: 'With a PhD in Education and 20 years of experience, Dr. Aina leads our Lagos campus with a focus on academic excellence and innovation.',
                  image: '/images/leader-aina.jpg',
                  qualifications: 'PhD Education, University of Lagos'
                },
                {
                  name: 'Mrs. Grace Okon',
                  role: 'Head of Academics',
                  bio: 'Mrs. Okon oversees curriculum development, ensuring a blend of IGCSE and WAEC standards with innovative teaching methods.',
                  image: '/images/leader-okon.jpg',
                  qualifications: 'MEd Curriculum Studies, University of Ibadan'
                },
                {
                  name: 'Mr. Tunde Adebayo',
                  role: 'Director of Student Affairs',
                  bio: 'Mr. Adebayo fosters a supportive environment, guiding students in leadership and personal development initiatives.',
                  image: '/images/leader-adebayo.jpg',
                  qualifications: 'MA Counseling, University of Lagos'
                }
              ].map((leader, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: 'clamp(16px, 4vw, 24px)',
                    borderRadius: 'clamp(6px, 1.5vw, 8px)',
                    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease',
                    textAlign: 'center',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    style={{
                      width: 'clamp(120px, 20vw, 150px)',
                      height: 'clamp(120px, 20vw, 150px)',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      margin: '0 auto clamp(8px, 2vw, 16px)',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    }}
                  />
                  <h3 style={{
                    fontSize: 'clamp(18px, 4vw, 22px)',
                    fontWeight: '600',
                    color: '#4B5320',
                    marginBottom: 'clamp(6px, 1.5vw, 8px)',
                  }}>
                    {leader.name}
                  </h3>
                  <p style={{
                    fontSize: 'clamp(14px, 3.5vw, 18px)',
                    color: '#D4A017',
                    marginBottom: 'clamp(8px, 2vw, 12px)',
                  }}>
                    {leader.role}
                  </p>
                  <p style={{
                    fontSize: 'clamp(12px, 3vw, 16px)',
                    color: '#6B7280',
                    lineHeight: '1.7',
                    marginBottom: 'clamp(8px, 2vw, 12px)',
                  }}>
                    {leader.bio}
                  </p>
                  <p style={{
                    fontSize: 'clamp(12px, 3vw, 14px)',
                    color: '#6B7280',
                    fontStyle: 'italic',
                  }}>
                    {leader.qualifications}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Abuja Leaders */}
          {activeTab === 'abuja' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fit, minmax(clamp(240px, 30vw, 320px), 1fr))`,
              gap: 'clamp(16px, 4vw, 32px)',
            }}>
              {[
                {
                  name: 'Dr. Halima Ibrahim',
                  role: 'Principal',
                  bio: 'Dr. Ibrahim leads the Abuja campus with a vision for innovation, fostering a dynamic learning environment.',
                  image: '/images/leader-ibrahim.jpg',
                  qualifications: 'EdD Educational Leadership, Ahmadu Bello University'
                },
                {
                  name: 'Ms. Chika Uzo',
                  role: 'Head of STEM Programs',
                  bio: 'Ms. Uzo drives our STEM initiatives, integrating technology and hands-on learning for student success.',
                  image: '/images/leader-uzo.jpg',
                  qualifications: 'MSc Computer Science, University of Abuja'
                },
                {
                  name: 'Mrs. Funke Ogunsola',
                  role: 'Director of Operations',
                  bio: 'Mrs. Ogunsola ensures seamless campus operations, from facilities to student services, with a focus on sustainability.',
                  image: '/images/leader-ogunsola.jpg',
                  qualifications: 'MBA, University of Nigeria'
                }
              ].map((leader, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: 'clamp(16px, 4vw, 24px)',
                    borderRadius: 'clamp(6px, 1.5vw, 8px)',
                    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease',
                    textAlign: 'center',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    style={{
                      width: 'clamp(120px, 20vw, 150px)',
                      height: 'clamp(120px, 20vw, 150px)',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      margin: '0 auto clamp(8px, 2vw, 16px)',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    }}
                  />
                  <h3 style={{
                    fontSize: 'clamp(18px, 4vw, 22px)',
                    fontWeight: '600',
                    color: '#4B5320',
                    marginBottom: 'clamp(6px, 1.5vw, 8px)',
                  }}>
                    {leader.name}
                  </h3>
                  <p style={{
                    fontSize: 'clamp(14px, 3.5vw, 18px)',
                    color: '#D4A017',
                    marginBottom: 'clamp(8px, 2vw, 12px)',
                  }}>
                    {leader.role}
                  </p>
                  <p style={{
                    fontSize: 'clamp(12px, 3vw, 16px)',
                    color: '#6B7280',
                    lineHeight: '1.7',
                    marginBottom: 'clamp(8px, 2vw, 12px)',
                  }}>
                    {leader.bio}
                  </p>
                  <p style={{
                    fontSize: 'clamp(12px, 3vw, 14px)',
                    color: '#6B7280',
                    fontStyle: 'italic',
                  }}>
                    {leader.qualifications}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Testimonial Carousel */}
        <section style={{
          padding: 'clamp(32px, 8vw, 64px) 0',
          backgroundColor: '#FFFFFF',
          borderRadius: 'clamp(8px, 2vw, 12px)',
          marginBottom: 'clamp(32px, 8vw, 64px)',
        }}>
          <h2 style={{
            fontSize: 'clamp(24px, 5vw, 36px)',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: 'clamp(10px, 2.5vw, 20px)',
            textAlign: 'center',
          }}>
            From Our Leaders
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            color: '#6B7280',
            maxWidth: 'min(90%, 800px)',
            margin: '0 auto clamp(20px, 5vw, 40px)',
            lineHeight: '1.8',
            textAlign: 'center',
          }}>
            Hear from our leadership team about their commitment to Sanniville’s mission.
          </p>
          <div style={{
            maxWidth: 'min(90%, 800px)',
            margin: '0 auto',
            padding: 'clamp(16px, 4vw, 32px)',
            backgroundColor: '#F9FAFB',
            borderRadius: 'clamp(6px, 1.5vw, 8px)',
            boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(12px, 3vw, 24px)',
              flexDirection: window.innerWidth > 768 ? 'row' : 'column',
            }}>
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                style={{
                  width: 'clamp(100px, 20vw, 150px)',
                  height: 'clamp(100px, 20vw, 150px)',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                }}
              />
              <div>
                <p style={{
                  fontSize: 'clamp(14px, 3.5vw, 18px)',
                  color: '#1F2937',
                  lineHeight: '1.8',
                  marginBottom: 'clamp(8px, 2vw, 16px)',
                  fontStyle: 'italic',
                }}>
                  {testimonials[currentTestimonial].quote}
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 4vw, 20px)',
                  fontWeight: '600',
                  color: '#4B5320',
                }}>
                  {testimonials[currentTestimonial].name}
                </p>
                <p style={{
                  fontSize: 'clamp(12px, 3vw, 16px)',
                  color: '#6B7280',
                }}>
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'clamp(8px, 2vw, 16px)',
              marginTop: 'clamp(12px, 3vw, 24px)',
            }}>
              <button
                onClick={prevTestimonial}
                style={{
                  backgroundColor: '#D4A017',
                  color: '#1F2937',
                  padding: 'clamp(8px, 2vw, 12px)',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#b58900'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#D4A017'}
              >
                <FiChevronLeft style={{ fontSize: 'clamp(16px, 4vw, 20px)' }} />
              </button>
              <button
                onClick={nextTestimonial}
                style={{
                  backgroundColor: '#D4A017',
                  color: '#1F2937',
                  padding: 'clamp(8px, 2vw, 12px)',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#b58900'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#D4A017'}
              >
                <FiChevronRight style={{ fontSize: 'clamp(16px, 4vw, 20px)' }} />
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{
          textAlign: 'center',
          padding: 'clamp(32px, 8vw, 64px)',
          backgroundColor: '#D4A017',
          borderRadius: 'clamp(8px, 2vw, 12px)',
          color: '#1F2937',
          marginBottom: 'clamp(32px, 8vw, 64px)',
        }}>
          <h2 style={{
            fontSize: 'clamp(24px, 5vw, 36px)',
            fontWeight: '700',
            marginBottom: 'clamp(10px, 2.5vw, 20px)',
          }}>
            Connect with Our Leaders
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            maxWidth: 'min(90%, 800px)',
            margin: '0 auto clamp(16px, 4vw, 32px)',
            lineHeight: '1.8',
          }}>
            Reach out to learn more about our leadership team and their vision for Sanniville Academy.
          </p>
          <Link
            href="/contact-us"
            style={{
              backgroundColor: '#1F2937',
              color: '#FFFFFF',
              padding: 'clamp(12px, 3vw, 16px) clamp(24px, 6vw, 36px)',
              borderRadius: 'clamp(6px, 1.5vw, 8px)',
              textDecoration: 'none',
              fontSize: 'clamp(14px, 3.5vw, 18px)',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              display: 'inline-block',
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