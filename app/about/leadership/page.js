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
        margin: '0 auto',
        padding: '32px 16px',
        fontFamily: "'Merriweather', serif",
        color: '#1F2937'
      }}>
        {/* Hero Section */}
        <section style={{
          position: 'relative',
          height: '600px',
          marginBottom: '64px',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
          backgroundImage: 'url(/images/leaders-hero.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
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
            padding: '32px'
          }}>
            <h1 style={{
              fontSize: '52px',
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '1.5px'
            }}>
              Our Visionary Leaders
            </h1>
            <p style={{
              fontSize: '24px',
              maxWidth: '800px',
              marginBottom: '32px',
              lineHeight: '1.6'
            }}>
              Meet the dedicated leaders of Sanniville Academy, driving excellence and innovation across our Lagos and Abuja campuses.
            </p>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: '#D4A017',
                color: '#1F2937',
                padding: '16px 36px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '20px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
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
          padding: '64px 0',
          backgroundColor: '#F9FAFB',
          borderRadius: '12px',
          marginBottom: '64px'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            Our Leadership Team
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: '1.8',
            textAlign: 'center'
          }}>
            Our leaders bring decades of experience and a shared commitment to fostering academic excellence and personal growth.
          </p>

          {/* Tab Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '48px',
            borderBottom: '1px solid #E5E7EB'
          }}>
            {['lagos', 'abuja'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '16px 32px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: activeTab === tab ? '3px solid #D4A017' : '3px solid transparent',
                  fontWeight: '600',
                  fontSize: '18px',
                  color: activeTab === tab ? '#4B5320' : '#6B7280',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px'
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
                <div key={index} style={{
                  backgroundColor: '#FFFFFF',
                  padding: '24px',
                  borderRadius: '8px',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    style={{
                      width: '150px',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      margin: '0 auto 16px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                  />
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#4B5320',
                    marginBottom: '8px'
                  }}>
                    {leader.name}
                  </h3>
                  <p style={{
                    fontSize: '18px',
                    color: '#D4A017',
                    marginBottom: '12px'
                  }}>
                    {leader.role}
                  </p>
                  <p style={{
                    fontSize: '16px',
                    color: '#6B7280',
                    lineHeight: '1.7',
                    marginBottom: '12px'
                  }}>
                    {leader.bio}
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: '#6B7280',
                    fontStyle: 'italic'
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px'
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
                <div key={index} style={{
                  backgroundColor: '#FFFFFF',
                  padding: '24px',
                  borderRadius: '8px',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    style={{
                      width: '150px',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      margin: '0 auto 16px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                  />
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#4B5320',
                    marginBottom: '8px'
                  }}>
                    {leader.name}
                  </h3>
                  <p style={{
                    fontSize: '18px',
                    color: '#D4A017',
                    marginBottom: '12px'
                  }}>
                    {leader.role}
                  </p>
                  <p style={{
                    fontSize: '16px',
                    color: '#6B7280',
                    lineHeight: '1.7',
                    marginBottom: '12px'
                  }}>
                    {leader.bio}
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: '#6B7280',
                    fontStyle: 'italic'
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
          padding: '64px 0',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          marginBottom: '64px'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            From Our Leaders
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: '1.8',
            textAlign: 'center'
          }}>
            Hear from our leadership team about their commitment to Sanniville’s mission.
          </p>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '32px',
            backgroundColor: '#F9FAFB',
            borderRadius: '8px',
            boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              flexDirection: 'row'
            }}
            sx={{ '@media (maxWidth: 768px)': { flexDirection: 'column' } }}
            >
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}
              />
              <div>
                <p style={{
                  fontSize: '18px',
                  color: '#1F2937',
                  lineHeight: '1.8',
                  marginBottom: '16px',
                  fontStyle: 'italic'
                }}>
                  {testimonials[currentTestimonial].quote}
                </p>
                <p style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#4B5320'
                }}>
                  {testimonials[currentTestimonial].name}
                </p>
                <p style={{
                  fontSize: '16px',
                  color: '#6B7280'
                }}>
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              marginTop: '24px'
            }}>
              <button
                onClick={prevTestimonial}
                style={{
                  backgroundColor: '#D4A017',
                  color: '#1F2937',
                  padding: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#b58900'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#D4A017'}
              >
                <FiChevronLeft style={{ fontSize: '20px' }} />
              </button>
              <button
                onClick={nextTestimonial}
                style={{
                  backgroundColor: '#D4A017',
                  color: '#1F2937',
                  padding: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#b58900'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#D4A017'}
              >
                <FiChevronRight style={{ fontSize: '20px' }} />
              </button>
            </div>
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
            marginBottom: '20px'
          }}>
            Connect with Our Leaders
          </h2>
          <p style={{
            fontSize: '18px',
            maxWidth: '800px',
            margin: '0 auto 32px',
            lineHeight: '1.8'
          }}>
            Reach out to learn more about our leadership team and their vision for Sanniville Academy.
          </p>
          <Link
            href="/contact-us"
            style={{
              backgroundColor: '#1F2937',
              color: '#FFFFFF',
              padding: '16px 36px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '600',
              transition: 'all 0.3s ease'
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