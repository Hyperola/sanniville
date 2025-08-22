"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiAward, FiBookOpen, FiUsers, FiStar } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const images = [
  '/images/campus1.jpeg',
  '/images/campus2.jpeg',
  '/images/campus3.png'
];

const testimonials = [
  { 
    name: 'Mrs. Ada Okeke', 
    profession: 'Lawyer', 
    quote: 'Sanniville Academy has transformed my daughter’s future with its exceptional education, nurturing environment, and focus on character development.' 
  },
  { 
    name: 'Mr. Emeka Nwosu', 
    profession: 'Engineer', 
    quote: 'The dedicated faculty and cutting-edge facilities at Sanniville have given my son the tools to excel academically and personally.' 
  },
  { 
    name: 'Dr. Funmi Adeyemi', 
    profession: 'Doctor', 
    quote: 'My son’s confidence and leadership skills have soared, thanks to Sanniville’s holistic approach and supportive community.' 
  }
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Hero Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Testimonial Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

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
        {/* Hero Section with Video/Slider */}
        <section style={{
          position: 'relative',
          height: '600px',
          marginBottom: '64px',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
          <video
            autoPlay
            loop
            muted
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              display: images.length === 0 ? 'block' : 'none'
            }}
          >
            <source src="/videos/sanniville-promo.mp4" type="video/mp4" />
          </video>
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Sanniville Academy ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: index === currentImage ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                display: images.length > 0 ? 'block' : 'none'
              }}
            />
          ))}
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
              Empowering Tomorrow’s Leaders
            </h1>
            <p style={{
              fontSize: '22px',
              maxWidth: '700px',
              marginBottom: '24px',
              lineHeight: '1.6'
            }}>
              Sanniville Academy blends academic rigor, innovative thinking, and moral values to shape students into global trailblazers ready to lead with impact.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Link
                href="/admissions/apply"
                style={{
                  backgroundColor: '#D4A017',
                  color: '#1F2937',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: '600',
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
                Apply Now
              </Link>
              <a
                href="http://localhost:3000/login"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#4B5320',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: '600',
                  transition: 'background-color 0.3s, transform 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f0f0f0';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#FFFFFF';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                E-Portal
              </a>
            </div>
          </div>
          <button
            onClick={prevImage}
            style={{
              position: 'absolute',
              top: '50%',
              left: '16px',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              cursor: 'pointer',
              display: images.length > 0 ? 'flex' : 'none',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.7)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.5)'}
          >
            <FiChevronLeft size={28} />
          </button>
          <button
            onClick={nextImage}
            style={{
              position: 'absolute',
              top: '50%',
              right: '16px',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              cursor: 'pointer',
              display: images.length > 0 ? 'flex' : 'none',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.7)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.5)'}
          >
            <FiChevronRight size={28} />
          </button>
        </section>

        {/* Proprietor's Speech */}
        <section style={{
          padding: '64px 0',
          backgroundColor: '#F9FAFB',
          borderRadius: '12px',
          marginBottom: '64px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '32px',
            alignItems: 'center',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <img
              src="/images/proprietor.jpg"
              alt="Proprietor"
              style={{
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
            <div>
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#4B5320',
                marginBottom: '16px'
              }}>
                A Vision for Excellence
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#6B7280',
                lineHeight: '1.7',
                maxWidth: '600px'
              }}>
                Since 2005, Sanniville Academy has been a cornerstone of transformative education, fostering intellectual curiosity, ethical leadership, and global awareness. Our commitment to excellence empowers students to shape a brighter future through innovation and integrity.
              </p>
              <p style={{
                fontSize: '16px',
                fontStyle: 'italic',
                color: '#4B5320',
                marginTop: '16px'
              }}>
                — Dr. John Sanni, Proprietor
              </p>
            </div>
          </div>
        </section>

        {/* Why Study at Sanniville */}
        <section style={{
          padding: '64px 0',
          marginBottom: '64px',
          backgroundColor: '#FFFFFF'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '32px',
            alignItems: 'center',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{ flex: 1 }}>
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#4B5320',
                marginBottom: '16px'
              }}>
                Why Choose Sanniville Academy?
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#6B7280',
                lineHeight: '1.7',
                marginBottom: '24px'
              }}>
                At Sanniville, we offer a world-class education that transcends traditional learning. With a 95% WAEC pass rate, state-of-the-art facilities, and over 20 extracurricular clubs, our students excel in STEM, arts, and leadership. Our distinguished faculty fosters critical thinking, creativity, and ethical values, preparing students for global success.
              </p>
              <Link
                href="/admissions/why-choose-us"
                style={{
                  backgroundColor: '#D4A017',
                  color: '#1F2937',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: '600',
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
                Discover More
              </Link>
            </div>
            <img
              src="/images/why-study.jpeg"
              alt="Why Study at Sanniville"
              style={{
                flex: 1,
                maxWidth: '500px',
                height: '350px',
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
          </div>
        </section>

        {/* What We Do */}
        <section style={{
          padding: '64px 0',
          textAlign: 'center',
          marginBottom: '64px'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: '16px'
          }}>
            Our Educational Approach
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '700px',
            margin: '0 auto 32px',
            lineHeight: '1.6'
          }}>
            We deliver a transformative education that blends academic rigor, creative exploration, and community engagement, equipping students to thrive in a dynamic world.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {[
              { 
                icon: FiBookOpen, 
                title: 'Academic Excellence', 
                desc: 'Our comprehensive curriculum, spanning STEM, arts, and humanities, is led by expert educators to ensure outstanding academic outcomes.' 
              },
              { 
                icon: FiUsers, 
                title: 'Community Engagement', 
                desc: 'Through clubs, service projects, and leadership programs, we foster collaboration and civic responsibility.' 
              },
              { 
                icon: FiAward, 
                title: 'Holistic Development', 
                desc: 'We nurture character, ethics, and global awareness, shaping well-rounded individuals ready to lead.' 
              }
            ].map((item, index) => (
              <div key={index} style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '8px',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)';
              }}
              >
                <item.icon size={56} style={{ color: '#D4A017', marginBottom: '16px' }} />
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#4B5320',
                  marginBottom: '12px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#6B7280',
                  lineHeight: '1.5'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section style={{
          padding: '64px 0',
          backgroundColor: '#F9FAFB',
          marginBottom: '64px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: '16px'
          }}>
            Our Guiding Principles
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '700px',
            margin: '0 auto 32px',
            lineHeight: '1.6'
          }}>
            Our core values shape our educational mission, fostering a community of excellence, integrity, and innovation.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px'
          }}>
            {[
              { 
                value: 'Excellence', 
                desc: 'We pursue unparalleled standards in education, fostering a culture of achievement and growth.', 
                icon: FiStar 
              },
              { 
                value: 'Integrity', 
                desc: 'Honesty and ethical conduct guide our actions, building trust and accountability.', 
                icon: FiAward 
              },
              { 
                value: 'Innovation', 
                desc: 'We embrace creativity and forward-thinking, empowering students to solve future challenges.', 
                icon: FiBookOpen 
              },
              { 
                value: 'Community', 
                desc: 'Our inclusive environment nurtures collaboration, respect, and a sense of belonging.', 
                icon: FiUsers 
              }
            ].map((value, index) => (
              <div key={index} style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)';
              }}
              >
                <value.icon size={64} style={{ color: '#D4A017', marginBottom: '16px' }} />
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#4B5320',
                  marginBottom: '12px'
                }}>
                  {value.value}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#6B7280',
                  lineHeight: '1.5'
                }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Images */}
        <section style={{
          padding: '64px 0',
          textAlign: 'center',
          marginBottom: '64px'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: '16px'
          }}>
            Our Esteemed Faculty
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '700px',
            margin: '0 auto 32px',
            lineHeight: '1.6'
          }}>
            Meet the dedicated educators and leaders who inspire and guide our students toward excellence and innovation.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px'
          }}>
            {[
              { name: 'Dr. Jane Okoro', role: 'Principal', image: '/images/team1.jpeg' },
              { name: 'Mr. Tunde Afolabi', role: 'Head of Academics', image: '/images/team2.jpeg' },
              { name: 'Ms. Ngozi Uche', role: 'Student Counselor', image: '/images/team3.jpeg' }
            ].map((member, index) => (
              <div key={index} style={{
                backgroundColor: '#FFFFFF',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)';
              }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 16px',
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#4B5320',
                  marginBottom: '8px'
                }}>
                  {member.name}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#6B7280'
                }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section style={{
          padding: '64px 0',
          backgroundColor: '#F9FAFB',
          borderRadius: '12px',
          marginBottom: '64px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: '16px'
          }}>
            World-Class Facilities
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '700px',
            margin: '0 auto 32px',
            lineHeight: '1.6'
          }}>
            Our state-of-the-art facilities, from cutting-edge labs to vibrant sports fields, create an environment where students thrive academically and socially.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {[
              { title: 'Science Laboratory', image: '/images/lab.jpg' },
              { title: 'Modern Hostel', image: '/images/hostel.jpg' },
              { title: 'Interactive Classroom', image: '/images/classroom.jpg' },
              { title: 'Spacious Dining Hall', image: '/images/dining.jpeg' },
              { title: 'Football Pitch', image: '/images/football.jpeg' }
            ].map((facility, index) => (
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
                  src={facility.image}
                  alt={facility.title}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  backgroundColor: 'rgba(75, 83, 32, 0.7)',
                  color: '#FFFFFF',
                  padding: '12px',
                  textAlign: 'center'
                }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    margin: 0
                  }}>
                    {facility.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* News/Events */}
        <section style={{
          padding: '64px 0',
          marginBottom: '64px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: '16px'
          }}>
            Vibrant News & Events
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '700px',
            margin: '0 auto 32px',
            lineHeight: '1.6'
          }}>
            Stay connected with our community’s achievements and upcoming events that inspire and unite us.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            marginBottom: '32px'
          }}>
            {[
              { 
                title: 'Annual Science Fair', 
                date: 'Sept 15, 2025', 
                desc: 'Our students showcase groundbreaking projects, igniting curiosity and innovation.', 
                image: '/images/event1.jpeg' 
              },
              { 
                title: 'Graduation Ceremony', 
                date: 'June 20, 2025', 
                desc: 'Honoring the achievements of our Class of 2025 with pride and celebration.', 
                image: '/images/event2.jpg' 
              },
              { 
                title: 'Parent-Teacher Conference', 
                date: 'Oct 10, 2025', 
                desc: 'Collaborating with parents to support student growth and success.', 
                image: '/images/event3.jpg' 
              }
            ].map((event, index) => (
              <div key={index} style={{
                backgroundColor: '#FFFFFF',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)';
              }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '6px',
                    marginBottom: '16px'
                  }}
                />
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#4B5320',
                  marginBottom: '8px'
                }}>
                  {event.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#D4A017',
                  marginBottom: '8px'
                }}>
                  {event.date}
                </p>
                <p style={{
                  fontSize: '16px',
                  color: '#6B7280',
                  lineHeight: '1.5'
                }}>
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/news-events"
            style={{
              backgroundColor: '#D4A017',
              color: '#1F2937',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '600',
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
            Explore All Events
          </Link>
        </section>

        {/* What Our Parents Say */}
        <section style={{
          padding: '64px 0',
          backgroundColor: '#F9FAFB',
          borderRadius: '12px',
          marginBottom: '64px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: '16px'
          }}>
            Voices of Our Parents
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '700px',
            margin: '0 auto 32px',
            lineHeight: '1.6'
          }}>
            Hear from parents who trust Sanniville to shape their children’s futures with excellence and care.
          </p>
          <div style={{
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{
                opacity: index === currentTestimonial ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                position: index === currentTestimonial ? 'relative' : 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                padding: '32px',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)'
              }}>
                <p style={{
                  fontSize: '18px',
                  color: '#6B7280',
                  lineHeight: '1.7',
                  marginBottom: '16px'
                }}>
                  {testimonial.quote}
                </p>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#4B5320',
                  marginBottom: '8px'
                }}>
                  {testimonial.name}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#D4A017'
                }}>
                  {testimonial.profession}
                </p>
              </div>
            ))}
            <button
              onClick={prevTestimonial}
              style={{
                position: 'absolute',
                top: '50%',
                left: '-60px',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.7)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.5)'}
            >
              <FiChevronLeft size={28} />
            </button>
            <button
              onClick={nextTestimonial}
              style={{
                position: 'absolute',
                top: '50%',
                right: '-60px',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.7)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.5)'}
            >
              <FiChevronRight size={28} />
            </button>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section style={{
          padding: '64px 0',
          textAlign: 'center',
          marginBottom: '64px'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: '16px'
          }}>
            Stay Informed with Sanniville
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '700px',
            margin: '0 auto 32px',
            lineHeight: '1.6'
          }}>
            Join our newsletter to receive the latest updates on admissions, events, academic achievements, and exclusive opportunities at Sanniville Academy.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #6B7280',
                fontSize: '16px',
                width: '300px',
                fontFamily: "'Merriweather', serif",
                transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#D4A017'}
              onBlur={(e) => e.target.style.borderColor = '#6B7280'}
            />
            <button
              style={{
                backgroundColor: '#D4A017',
                color: '#1F2937',
                padding: '12px 32px',
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
              Subscribe Now
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          textAlign: 'center',
          padding: '80px 32px',
          backgroundImage: 'url(/images/cta-bg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '12px',
          color: '#FFFFFF',
          position: 'relative',
          marginBottom: '64px'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(75, 83, 32, 0.7)'
          }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: '40px',
              fontWeight: '700',
              marginBottom: '16px'
            }}>
              Begin Your Journey Today
            </h2>
            <p style={{
              fontSize: '20px',
              maxWidth: '700px',
              margin: '0 auto 24px',
              lineHeight: '1.6'
            }}>
              Unlock a world of possibilities at Sanniville Academy, where exceptional education and a supportive community empower students to shape the future.
            </p>
            <Link
              href="/admissions/apply"
              style={{
                backgroundColor: '#D4A017',
                color: '#1F2937',
                padding: '14px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '600',
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
              Start Your Journey
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}