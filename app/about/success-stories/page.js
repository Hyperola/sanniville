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
          backgroundImage: 'url(/images/success.jpg)',
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
              Inspiring Success Stories
            </h1>
            <p style={{
              fontSize: '24px',
              maxWidth: '800px',
              marginBottom: '32px',
              lineHeight: '1.6'
            }}>
              Discover how Sanniville Academy’s alumni are transforming the world through leadership, innovation, and impact.
            </p>
            <Link
              href="/admissions/apply"
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
              Become Our Next Success
            </Link>
          </div>
        </section>

        {/* Alumni Achievements */}
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
            Our Alumni Achievements
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '900px',
            margin: '0 auto 40px',
            lineHeight: '1.8',
            textAlign: 'center'
          }}>
            Sanniville Academy’s alumni are global leaders, innovators, and change-makers. From securing scholarships at top universities to founding impactful ventures, their stories reflect our commitment to excellence.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
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
                  src={alumnus.image}
                  alt={alumnus.name}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '16px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  }}
                />
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#4B5320',
                  marginBottom: '8px'
                }}>
                  {alumnus.name} <span style={{ fontSize: '16px', fontWeight: '400', color: '#6B7280' }}>({alumnus.year})</span>
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#6B7280',
                  lineHeight: '1.7',
                  marginBottom: '12px'
                }}>
                  {alumnus.story}
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#6B7280',
                  fontStyle: 'italic'
                }}>
                  {alumnus.caption}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section style={{
          padding: '64px 0',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          marginBottom: '64px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: '20px'
          }}>
            Impact by the Numbers
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: '1.8'
          }}>
            Our alumni’s achievements reflect Sanniville’s transformative education.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              { stat: '500+', description: 'Alumni in Top Global Universities' },
              { stat: '95%', description: 'WAEC Pass Rate Since 2013' },
              { stat: '30+', description: 'Startups Founded by Alumni' },
              { stat: '10+', description: 'Rhodes & Fulbright Scholars' }
            ].map((item, index) => (
              <div key={index} style={{
                padding: '24px',
                backgroundColor: '#F9FAFB',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <h3 style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#D4A017',
                  marginBottom: '8px'
                }}>
                  {item.stat}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#6B7280'
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Carousel */}
        <section style={{
          padding: '64px 0',
          backgroundImage: 'url(/images/testimonial-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '12px',
          marginBottom: '64px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(75, 83, 32, 0.7)'
          }}></div>
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#FFFFFF',
              marginBottom: '20px'
            }}>
              Voices of Our Alumni
            </h2>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              padding: '32px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
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
                    {testimonials[currentTestimonial].name} <span style={{ fontSize: '16px', fontWeight: '400', color: '#6B7280' }}>({testimonials[currentTestimonial].year})</span>
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
          </div>
        </section>

        {/* Photo Gallery */}
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
            Moments of Triumph
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: '1.8',
            textAlign: 'center'
          }}>
            Celebrate the achievements of our alumni through these defining moments.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {[
              { image: '/images/student1.jpg', alt: 'Ada’s MIT scholarship ceremony', caption: 'Ada Obi’s MIT scholarship award, 2018' },
              { image: '/images/student2.jpg', alt: 'Chidi’s startup launch', caption: 'Chidi Eze’s TechTrend launch, 2021' },
              { image: '/images/student3.jpg', alt: 'Funmi’s Rhodes Scholar event', caption: 'Funmi Ade at Oxford, 2020' },
              { image: '/images/leader-uzo.jpg', alt: 'Tolu’s medical mission', caption: 'Tolu Akins’ medical outreach, 2023' }
            ].map((item, index) => (
              <div key={index} style={{
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  }}
                />
                <p style={{
                  fontSize: '14px',
                  color: '#6B7280',
                  textAlign: 'center',
                  marginTop: '8px',
                  fontStyle: 'italic'
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
            Be Our Next Success Story
          </h2>
          <p style={{
            fontSize: '18px',
            maxWidth: '800px',
            margin: '0 auto 32px',
            lineHeight: '1.8'
          }}>
            Join Sanniville Academy and unlock your potential to become a global leader, innovator, or change-maker.
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center'
          }}
          sx={{ '@media (maxWidth: 768px)': { flexDirection: 'column', alignItems: 'center' } }}
          >
            <Link
              href="/admissions/apply"
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
              Apply Now
            </Link>
            <Link
              href="/alumni-network"
              style={{
                backgroundColor: 'transparent',
                color: '#1F2937',
                padding: '16px 36px',
                border: '2px solid #1F2937',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
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