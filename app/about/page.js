"use client";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function About() {
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
          backgroundImage: 'url(/images/about-hero.jpg)',
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
              About Sanniville Academy
            </h1>
            <p style={{
              fontSize: '22px',
              maxWidth: '700px',
              marginBottom: '24px',
              lineHeight: '1.6'
            }}>
              Discover our legacy of excellence, fostering intellectual growth and character development since 2005.
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
              Apply Now
            </Link>
          </div>
        </section>

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
            Who We Are
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 32px',
            lineHeight: '1.7'
          }}>
            Sanniville Academy is a beacon of academic excellence, blending Nigerian and international curricula to prepare students for a global future. Our vibrant community nurtures curiosity, leadership, and integrity.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {[
              { title: 'Our History', desc: 'Founded in 2005, we have grown into a leading institution with campuses in Lagos and Abuja.', link: '/about/history' },
              { title: 'Our Vision', desc: 'Empowering students to become global leaders through innovative education.', link: '/about/vision-mission' },
              { title: 'Our Community', desc: 'A supportive network of students, faculty, and parents committed to excellence.', link: '/about/campuses' }
            ].map((item, index) => (
              <div key={index} style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                textAlign: 'center'
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
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#4B5320',
                  marginBottom: '12px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#6B7280',
                  lineHeight: '1.5',
                  marginBottom: '16px'
                }}>
                  {item.desc}
                </p>
                <Link
                  href={item.link}
                  style={{
                    color: '#D4A017',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#b58900'}
                  onMouseLeave={(e) => e.target.style.color = '#D4A017'}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section style={{
          padding: '64px 0',
          marginBottom: '64px'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            Our Vibrant Community
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 32px',
            lineHeight: '1.7',
            textAlign: 'center'
          }}>
            At Sanniville, our community thrives on collaboration, diversity, and shared goals, creating a nurturing environment for all.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '32px',
            alignItems: 'center',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <img
              src="/images/community.jpg"
              alt="Community"
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
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#4B5320',
                marginBottom: '12px'
              }}>
                A Place to Belong
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6B7280',
                lineHeight: '1.5',
                marginBottom: '16px'
              }}>
                Our students, faculty, and parents form a tight-knit community dedicated to fostering growth, creativity, and success.
              </p>
              <Link
                href="/about/campuses"
                style={{
                  backgroundColor: '#D4A017',
                  color: '#1F2937',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '16px',
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
                Explore Our Campuses
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}