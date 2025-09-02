"use client";
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function History() {
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
          backgroundImage: 'url(/images/history-hero.jpeg)',
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
              Our Storied Legacy
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 4vw, 24px)',
              maxWidth: 'min(90%, 800px)',
              marginBottom: 'clamp(16px, 4vw, 32px)',
              lineHeight: '1.6',
            }}>
              Since 2005, Sanniville Academy has been a beacon of educational excellence, shaping leaders and innovators across Nigeria.
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
              Join Our Legacy
            </Link>
          </div>
        </section>

        {/* History Overview */}
        <section style={{
          padding: 'clamp(32px, 8vw, 64px) 0',
          backgroundColor: '#F9FAFB',
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
            A Vision Rooted in Excellence
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            color: '#6B7280',
            maxWidth: 'min(90%, 900px)',
            margin: '0 auto clamp(16px, 4vw, 32px)',
            lineHeight: '1.8',
          }}>
            Founded in 2005 by Dr. John Sanni, a renowned educator and philanthropist, Sanniville Academy was established to redefine education in Nigeria. Starting with a single campus in Lagos and 50 pioneering students, the academy has grown to serve over 1,200 students across Lagos and Abuja, earning accolades such as the 2015 National Education Excellence Award and a consistent 95%+ WAEC pass rate since 2013. Our commitment to holistic education—blending academic rigor, leadership, and community service—has made us a cornerstone of Nigerian education.
          </p>
        </section>

        {/* Founder Section */}
        <section style={{
          padding: 'clamp(32px, 8vw, 64px) 0',
          marginBottom: 'clamp(32px, 8vw, 64px)',
          display: 'flex',
          flexDirection: window.innerWidth > 768 ? 'row' : 'column',
          gap: 'clamp(16px, 4vw, 32px)',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          borderRadius: 'clamp(8px, 2vw, 12px)',
          boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
        }}>
          <img
            src="/images/founder.jpg"
            alt="Dr. John Sanni"
            style={{
              width: window.innerWidth > 768 ? 'clamp(200px, 25vw, 300px)' : '100%',
              height: window.innerWidth > 768 ? 'clamp(200px, 25vw, 300px)' : 'clamp(180px, 45vw, 250px)',
              objectFit: 'cover',
              borderRadius: 'clamp(8px, 2vw, 12px)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
          <div>
            <h2 style={{
              fontSize: 'clamp(24px, 5vw, 36px)',
              fontWeight: '700',
              color: '#4B5320',
              marginBottom: 'clamp(8px, 2vw, 16px)',
            }}>
              Our Founder’s Vision
            </h2>
            <p style={{
              fontSize: 'clamp(14px, 3.5vw, 18px)',
              color: '#6B7280',
              lineHeight: '1.8',
              marginBottom: 'clamp(8px, 2vw, 16px)',
            }}>
              Dr. John Sanni, a visionary educator with a Ph.D. in Educational Leadership from the University of Ibadan, founded Sanniville Academy to empower young minds. Inspired by his own journey through Nigeria’s education system, he sought to create an institution that nurtures critical thinking, ethical leadership, and global citizenship. His legacy continues to guide our mission.
            </p>
            <p style={{
              fontSize: 'clamp(12px, 3vw, 16px)',
              color: '#6B7280',
              fontStyle: 'italic',
            }}>
              “Education is not just about knowledge; it’s about building character and inspiring change.” — Dr. John Sanni
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section style={{
          padding: 'clamp(32px, 8vw, 64px) 0',
          marginBottom: 'clamp(32px, 8vw, 64px)',
          backgroundColor: '#F9FAFB',
          borderRadius: 'clamp(8px, 2vw, 12px)',
        }}>
          <h2 style={{
            fontSize: 'clamp(24px, 5vw, 36px)',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: 'clamp(10px, 2.5vw, 20px)',
            textAlign: 'center',
          }}>
            Milestones Through Time
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            color: '#6B7280',
            maxWidth: 'min(90%, 800px)',
            margin: '0 auto clamp(20px, 5vw, 40px)',
            lineHeight: '1.8',
            textAlign: 'center',
          }}>
            From our humble beginnings to becoming a leader in Nigerian education, explore the key moments that define Sanniville Academy’s journey.
          </p>
          <div style={{
            display: 'grid',
            gap: 'clamp(16px, 4vw, 32px)',
            maxWidth: 'min(90%, 1000px)',
            margin: '0 auto',
          }}>
            {[
              { 
                year: '2005', 
                event: 'Sanniville Academy founded with 50 students in Lagos, introducing a curriculum focused on STEM and leadership.', 
                image: '/images/history-2005.jpeg', 
                caption: 'Opening ceremony of Lagos campus'
              },
              { 
                year: '2010', 
                event: 'Expanded to Abuja with a second campus, launching advanced STEM labs and arts programs.', 
                image: '/images/history-2010.jpeg', 
                caption: 'Abuja campus inauguration'
              },
              { 
                year: '2015', 
                event: 'Achieved a 95% WAEC pass rate, earning the National Education Excellence Award.', 
                image: '/images/history-2015.png', 
                caption: 'Award ceremony in Abuja'
              },
              { 
                year: '2020', 
                event: 'Launched a virtual learning platform, ensuring uninterrupted education during the global pandemic.', 
                image: '/images/history-2020.jpeg', 
                caption: 'Students engaging in virtual classes'
              },
              { 
                year: '2025', 
                event: 'Celebrated 20 years with the opening of a state-of-the-art innovation lab.', 
                image: '/images/history-2025.jpeg', 
                caption: 'Innovation lab ribbon-cutting'
              }
            ].map((milestone, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: window.innerWidth > 768 ? (index % 2 === 0 ? 'row' : 'row-reverse') : 'column',
                  gap: 'clamp(16px, 4vw, 32px)',
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  padding: 'clamp(12px, 3vw, 24px)',
                  borderRadius: 'clamp(6px, 1.5vw, 8px)',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <div style={{
                  flex: window.innerWidth > 768 ? '0 0 clamp(200px, 25vw, 250px)' : '0 0 auto',
                  width: window.innerWidth > 768 ? 'clamp(200px, 25vw, 250px)' : '100%',
                }}>
                  <img
                    src={milestone.image}
                    alt={`Milestone ${milestone.year}`}
                    style={{
                      width: '100%',
                      height: 'clamp(120px, 30vw, 180px)',
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
                    {milestone.caption}
                  </p>
                </div>
                <div>
                  <h3 style={{
                    fontSize: 'clamp(20px, 5vw, 26px)',
                    fontWeight: '600',
                    color: '#4B5320',
                    marginBottom: 'clamp(8px, 2vw, 12px)',
                  }}>
                    {milestone.year}
                  </h3>
                  <p style={{
                    fontSize: 'clamp(12px, 3vw, 16px)',
                    color: '#6B7280',
                    lineHeight: '1.7',
                  }}>
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Gallery */}
        <section style={{
          padding: 'clamp(32px, 8vw, 64px) 0',
          marginBottom: 'clamp(32px, 8vw, 64px)',
          backgroundColor: '#FFFFFF',
          borderRadius: 'clamp(8px, 2vw, 12px)',
        }}>
          <h2 style={{
            fontSize: 'clamp(24px, 5vw, 36px)',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: 'clamp(10px, 2.5vw, 20px)',
            textAlign: 'center',
          }}>
            Historical Moments
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            color: '#6B7280',
            maxWidth: 'min(90%, 800px)',
            margin: '0 auto clamp(20px, 5vw, 40px)',
            lineHeight: '1.8',
            textAlign: 'center',
          }}>
            Relive the defining moments of Sanniville Academy through our curated photo gallery.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(clamp(200px, 30vw, 280px), 1fr))`,
            gap: 'clamp(16px, 4vw, 24px)',
          }}>
            {[
              { image: '/images/gallery-1.jpeg', alt: 'Early classroom, 2005', caption: 'First classroom setup in Lagos' },
              { image: '/images/gallery-2.jpeg', alt: 'First graduation, 2008', caption: 'First graduating class of 2008' },
              { image: '/images/gallery-3.jpeg', alt: 'Community outreach, 2012', caption: 'Community service in Lagos' },
              { image: '/images/gallery-4.jpeg', alt: 'Campus expansion, 2018', caption: 'New library opening' }
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
            Become Part of Our Legacy
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            maxWidth: 'min(90%, 800px)',
            margin: '0 auto clamp(16px, 4vw, 32px)',
            lineHeight: '1.8',
          }}>
            Join Sanniville Academy and contribute to a legacy of excellence, leadership, and community impact. Apply today to start your journey with us.
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
              href="/admissions/tours"
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
              Book a Campus Tour
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}