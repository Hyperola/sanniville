"use client";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Academics() {
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
          boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          backgroundImage: 'url(/images/academics-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
            padding: 'clamp(12px, 4vw, 24px)',
          }}>
            <h1 style={{
              fontSize: 'clamp(28px, 6vw, 48px)',
              fontWeight: '700',
              marginBottom: 'clamp(8px, 2vw, 16px)',
              letterSpacing: 'clamp(0.8px, 0.2vw, 1.2px)',
            }}>
              Academic Excellence
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 4vw, 22px)',
              maxWidth: 'min(90%, 700px)',
              marginBottom: 'clamp(12px, 3vw, 24px)',
              lineHeight: '1.6',
            }}>
              Discover a curriculum that inspires curiosity, fosters critical thinking, and prepares students for global success.
            </p>
            <Link
              href="/admissions/apply"
              style={{
                backgroundColor: '#D4A017',
                color: '#1F2937',
                padding: 'clamp(10px, 2.5vw, 14px) clamp(20px, 5vw, 32px)',
                borderRadius: 'clamp(6px, 1.5vw, 8px)',
                textDecoration: 'none',
                fontSize: 'clamp(14px, 3.5vw, 18px)',
                fontWeight: '600',
                transition: 'background-color 0.3s, transform 0.2s',
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
              Apply Now
            </Link>
          </div>
        </section>

        {/* Curriculum Section */}
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
            marginBottom: 'clamp(8px, 2vw, 16px)',
            textAlign: 'center',
          }}>
            Our Curriculum
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            color: '#6B7280',
            maxWidth: 'min(90%, 800px)',
            margin: '0 auto clamp(16px, 4vw, 32px)',
            lineHeight: '1.7',
            textAlign: 'center',
          }}>
            Sanniville Academy blends Nigerian and Cambridge curricula, offering a robust education that balances academic rigor with practical skills.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(240px, 30vw, 300px), 1fr))',
            gap: 'clamp(12px, 3vw, 24px)',
          }}>
            {[
              { title: 'Junior Secondary', desc: 'Core subjects include Mathematics, English, Sciences, and Social Studies, with electives in Arts and Technology.', image: '/images/junior-secondary.jpg' },
              { title: 'Senior Secondary', desc: 'Specialized tracks in Sciences, Arts, and Commercial studies, preparing students for WAEC and A-Levels.', image: '/images/senior-secondary.jpg' },
              { title: 'Extracurricular Programs', desc: 'Over 20 clubs, including Robotics, Debate, and Music, foster creativity and leadership.', image: '/images/extracurricular.jpg' }
            ].map((program, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: 'clamp(16px, 4vw, 24px)',
                  borderRadius: 'clamp(6px, 1.5vw, 8px)',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  style={{
                    width: '100%',
                    height: 'clamp(150px, 25vw, 200px)',
                    objectFit: 'cover',
                    borderRadius: 'clamp(6px, 1.5vw, 8px)',
                    marginBottom: 'clamp(8px, 2vw, 16px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  }}
                />
                <h3 style={{
                  fontSize: 'clamp(16px, 4vw, 20px)',
                  fontWeight: '600',
                  color: '#4B5320',
                  marginBottom: 'clamp(8px, 2vw, 12px)',
                }}>
                  {program.title}
                </h3>
                <p style={{
                  fontSize: 'clamp(12px, 3vw, 16px)',
                  color: '#6B7280',
                  lineHeight: '1.5',
                }}>
                  {program.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
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
            marginBottom: 'clamp(8px, 2vw, 16px)',
          }}>
            Shape Your Future
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            maxWidth: 'min(90%, 700px)',
            margin: '0 auto clamp(12px, 3vw, 24px)',
            lineHeight: '1.7',
          }}>
            Join our academic community and unlock your potential with world-class education.
          </p>
          <Link
            href="/admissions/apply"
            style={{
              backgroundColor: '#1F2937',
              color: '#FFFFFF',
              padding: 'clamp(10px, 2.5vw, 14px) clamp(20px, 5vw, 32px)',
              borderRadius: 'clamp(6px, 1.5vw, 8px)',
              textDecoration: 'none',
              fontSize: 'clamp(14px, 3.5vw, 18px)',
              fontWeight: '600',
              transition: 'background-color 0.3s, transform 0.2s',
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
            Apply Now
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}