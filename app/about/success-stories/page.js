"use client";
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function SuccessStories() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Ada Obi',
      quote: 'Sanniville’s STEM program gave me the confidence to pursue AI research at MIT. The mentorship was unparalleled.',
      image: '/images/leader-aina.jpg',
      year: '2018'
    },
    {
      name: 'Chidi Eze',
      quote: 'The robotics club at Sanniville sparked my entrepreneurial journey. I owe my startup’s success to those early lessons.',
      image: '/images/student2.jpg',
      year: '2019'
    },
    {
      name: 'Funmi Ade',
      quote: 'As a Rhodes Scholar, I carry Sanniville’s values of leadership and service into my work at Oxford.',
      image: '/images/leader-ogunsola.jpg',
      year: '2020'
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
          backgroundImage: 'url(/images/success.jpg)',
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
              Inspiring Success Stories
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 4vw, 24px)',
              maxWidth: 'min(90%, 800px)',
              marginBottom: 'clamp(16px, 4vw, 32px)',
              lineHeight: '1.6',
            }}>
              Discover how Sanniville Academy’s alumni are transforming the world through leadership, innovation, and impact.
            </p>
            <Link
              href="/admissions/apply"
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
              Become Our Next Success
            </Link>
          </div>
        </section>

        {/* Alumni Achievements */}
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
            Our Alumni Achievements
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            color: '#6B7280',
            maxWidth: 'min(90%, 900px)',
            margin: '0 auto clamp(20px, 5vw, 40px)',
            lineHeight: '1.8',
            textAlign: 'center',
          }}>
            Sanniville Academy’s alumni are global leaders, innovators, and change-makers. From securing scholarships at top universities to founding impactful ventures, their stories reflect our commitment to excellence.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(clamp(240px, 30vw, 320px), 1fr))`,
            gap: 'clamp(16px, 4vw, 32px)',
          }}>
            {[
              { 
                name: 'Ada Obi', 
                year: '2018', 
                story: 'Graduated with top honors and earned a full scholarship to MIT. Now a leading AI researcher developing healthcare solutions.', 
                image: '/images/student1.jpg', 
                caption: 'Ada at MIT’s AI Lab'
              },
              { 
                name: 'Chidi Eze', 
                year: '2019', 
                story: 'Founded TechTrend Innovations in Lagos, a startup revolutionizing fintech, inspired by Sanniville’s robotics club.', 
                image: '/images/student2.jpg', 
                caption: 'Chidi at his startup launch'
              },
              { 
                name: 'Funmi Ade', 
                year: '2020', 
                story: 'Rhodes Scholar at Oxford, advocating for sustainable environmental policies on a global stage.', 
                image: '/images/student3.jpg', 
                caption: 'Funmi at Oxford University'
              },
              { 
                name: 'Tolu Akins', 
                year: '2017', 
                story: 'Medical doctor leading a nonprofit providing healthcare to underserved communities in Africa.', 
                image: '/images/leader-aina.jpg', 
                caption: 'Tolu on a medical mission'
              }
            ].map((alumnus, index) => (
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
                  src={alumnus.image}
                  alt={alumnus.name}
                  style={{
                    width: '100%',
                    height: 'clamp(150px, 35vw, 220px)',
                    objectFit: 'cover',
                    borderRadius: 'clamp(6px, 1.5vw, 8px)',
                    marginBottom: 'clamp(8px, 2vw, 16px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  }}
                />
                <h3 style={{
                  fontSize: 'clamp(18px, 4vw, 22px)',
                  fontWeight: '600',
                  color: '#4B5320',
                  marginBottom: 'clamp(6px, 1.5vw, 8px)',
                }}>
                  {alumnus.name} <span style={{
                    fontSize: 'clamp(12px, 3vw, 16px)',
                    fontWeight: '400',
                    color: '#6B7280',
                  }}>({alumnus.year})</span>
                </h3>
                <p style={{
                  fontSize: 'clamp(12px, 3vw, 16px)',
                  color: '#6B7280',
                  lineHeight: '1.7',
                  marginBottom: 'clamp(8px, 2vw, 12px)',
                }}>
                  {alumnus.story}
                </p>
                <p style={{
                  fontSize: 'clamp(12px, 3vw, 14px)',
                  color: '#6B7280',
                  fontStyle: 'italic',
                }}>
                  {alumnus.caption}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section style={{
          padding: 'clamp(32px, 8vw, 64px) 0',
          backgroundColor: '#FFFFFF',
          borderRadius: 'clamp(8px, 2vw, 12px)',
          marginBottom: 'clamp(32px, 8vw, 64px)',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: 'clamp(24px, 5vw, 36px)',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: 'clamp(10px, 2.5vw, 20px)',
          }}>
            Impact by the Numbers
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            color: '#6B7280',
            maxWidth: 'min(90%, 800px)',
            margin: '0 auto clamp(20px, 5vw, 40px)',
            lineHeight: '1.8',
          }}>
            Our alumni’s achievements reflect Sanniville’s transformative education.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(clamp(160px, 25vw, 200px), 1fr))`,
            gap: 'clamp(12px, 3vw, 24px)',
            maxWidth: 'min(90%, 1000px)',
            margin: '0 auto',
          }}>
            {[
              { stat: '500+', description: 'Alumni in Top Global Universities' },
              { stat: '95%', description: 'WAEC Pass Rate Since 2013' },
              { stat: '30+', description: 'Startups Founded by Alumni' },
              { stat: '10+', description: 'Rhodes & Fulbright Scholars' }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: 'clamp(16px, 4vw, 24px)',
                  backgroundColor: '#F9FAFB',
                  borderRadius: 'clamp(6px, 1.5vw, 8px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <h3 style={{
                  fontSize: 'clamp(20px, 5vw, 28px)',
                  fontWeight: '700',
                  color: '#D4A017',
                  marginBottom: 'clamp(6px, 1.5vw, 8px)',
                }}>
                  {item.stat}
                </h3>
                <p style={{
                  fontSize: 'clamp(12px, 3vw, 16px)',
                  color: '#6B7280',
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Carousel */}
        <section style={{
          padding: 'clamp(32px, 8vw, 64px) 0',
          backgroundImage: 'url(/images/testimonial-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 'clamp(8px, 2vw, 12px)',
          marginBottom: 'clamp(32px, 8vw, 64px)',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(75, 83, 32, 0.7)',
          }}></div>
          <div style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
          }}>
            <h2 style={{
              fontSize: 'clamp(24px, 5vw, 36px)',
              fontWeight: '700',
              color: '#FFFFFF',
              marginBottom: 'clamp(10px, 2.5vw, 20px)',
            }}>
              Voices of Our Alumni
            </h2>
            <div style={{
              maxWidth: 'min(90%, 800px)',
              margin: '0 auto',
              padding: 'clamp(16px, 4vw, 32px)',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
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
                    {testimonials[currentTestimonial].name} <span style={{
                      fontSize: 'clamp(12px, 3vw, 16px)',
                      fontWeight: '400',
                      color: '#6B7280',
                    }}>({testimonials[currentTestimonial].year})</span>
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
          </div>
        </section>

        {/* Photo Gallery */}
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
            Moments of Triumph
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            color: '#6B7280',
            maxWidth: 'min(90%, 800px)',
            margin: '0 auto clamp(20px, 5vw, 40px)',
            lineHeight: '1.8',
            textAlign: 'center',
          }}>
            Celebrate the achievements of our alumni through these defining moments.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(clamp(200px, 30vw, 280px), 1fr))`,
            gap: 'clamp(12px, 3vw, 24px)',
          }}>
            {[
              { image: '/images/student1.jpg', alt: 'Ada’s MIT scholarship ceremony', caption: 'Ada Obi’s MIT scholarship award, 2018' },
              { image: '/images/student2.jpg', alt: 'Chidi’s startup launch', caption: 'Chidi Eze’s TechTrend launch, 2021' },
              { image: '/images/student3.jpg', alt: 'Funmi’s Rhodes Scholar event', caption: 'Funmi Ade at Oxford, 2020' },
              { image: '/images/leader-uzo.jpg', alt: 'Tolu’s medical mission', caption: 'Tolu Akins’ medical outreach, 2023' }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: 'clamp(150px, 25vw, 200px)',
                    objectFit: 'cover',
                    borderRadius: 'clamp(6px, 1.5vw, 8px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  }}
                />
                <p style={{
                  fontSize: 'clamp(12px, 3vw, 14px)',
                  color: '#6B7280',
                  textAlign: 'center',
                  marginTop: 'clamp(6px, 1.5vw, 8px)',
                  fontStyle: 'italic',
                }}>
                  {item.caption}
                </p>
              </div>
            ))}
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
            Be Our Next Success Story
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            maxWidth: 'min(90%, 800px)',
            margin: '0 auto clamp(16px, 4vw, 32px)',
            lineHeight: '1.8',
          }}>
            Join Sanniville Academy and unlock your potential to become a global leader, innovator, or change-maker.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: window.innerWidth > 768 ? 'row' : 'column',
            gap: 'clamp(12px, 3vw, 20px)',
            justifyContent: 'center',
            alignItems: window.innerWidth > 768 ? 'center' : 'stretch',
          }}>
            <Link
              href="/admissions/apply"
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
                textAlign: 'center',
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
              Apply Now
            </Link>
            <Link
              href="/alumni-network"
              style={{
                backgroundColor: 'transparent',
                color: '#1F2937',
                padding: 'clamp(12px, 3vw, 16px) clamp(24px, 6vw, 36px)',
                border: '2px solid #1F2937',
                borderRadius: 'clamp(6px, 1.5vw, 8px)',
                textDecoration: 'none',
                fontSize: 'clamp(14px, 3.5vw, 18px)',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1F2937';
                e.target.style.color = '#FFFFFF';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#1F2937';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Join Alumni Network
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}