"use client";
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function WhyChooseUs() {
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
          height: '500px',
          marginBottom: '64px',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          backgroundImage: 'url(/images/why-choose-us-hero.jpg)',
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
              Why Choose Sanniville?
            </h1>
            <p style={{
              fontSize: '22px',
              maxWidth: '700px',
              marginBottom: '24px',
              lineHeight: '1.6'
            }}>
              Discover what sets Sanniville Academy apart as a leader in education.
            </p>
          </div>
        </section>

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
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            Our Unique Strengths
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 32px',
            lineHeight: '1.7',
            textAlign: 'center'
          }}>
            Sanniville offers a transformative educational experience through academic rigor, modern facilities, and a supportive community.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {[
              { title: 'Academic Excellence', desc: 'Our Nigerian and Cambridge curricula prepare students for global success.', image: '/images/academic.jpg' },
              { title: 'State-of-the-Art Facilities', desc: 'Modern labs, libraries, and sports facilities enhance learning.', image: '/images/facilities.jpg' },
              { title: 'Holistic Development', desc: 'Over 20 clubs and activities foster leadership and creativity.', image: '/images/club.jpg' },
              { title: 'Dedicated Faculty', desc: 'Experienced educators provide personalized guidance.', image: '/images/student3.jpg' }
            ].map((reason, index) => (
              <div key={index} style={{
                backgroundColor: '#FFFFFF',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <img
                  src={reason.image}
                  alt={reason.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '16px'
                  }}
                />
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#4B5320',
                  marginBottom: '12px'
                }}>
                  {reason.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#6B7280',
                  lineHeight: '1.5'
                }}>
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

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
            Join Our Community
          </h2>
          <p style={{
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto 24px',
            lineHeight: '1.7'
          }}>
            Start your journey with Sanniville today and experience education that inspires.
          </p>
          <Link
            href="/admissions/apply"
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
            Apply Now
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}