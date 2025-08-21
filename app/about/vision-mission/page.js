"use client";
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { FiStar, FiAward, FiBookOpen, FiUsers } from 'react-icons/fi';

export default function VisionMission() {
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
          height: '500px',
          marginBottom: '64px',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          backgroundImage: 'url(/images/vision-mission.jpeg)',
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
              Our Guiding Vision
            </h1>
            <p style={{
              fontSize: '22px',
              maxWidth: '700px',
              marginBottom: '24px',
              lineHeight: '1.6'
            }}>
              Our mission, vision, and values drive Sanniville Academy to shape compassionate, innovative leaders for a global future.
            </p>
          </div>
        </section>

        {/* Mission */}
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
              src="/images/mission.jpeg"
              alt="Our Mission"
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
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#4B5320',
                marginBottom: '16px'
              }}>
                Our Mission
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#6B7280',
                lineHeight: '1.7',
                marginBottom: '24px'
              }}>
                To empower students with a transformative education that fosters intellectual curiosity, ethical leadership, and global citizenship, preparing them to excel in an ever-evolving world.
              </p>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section style={{
          padding: '64px 0',
          marginBottom: '64px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            gap: '32px',
            alignItems: 'center',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <img
              src="/images/vision.jpeg"
              alt="Our Vision"
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
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#4B5320',
                marginBottom: '16px'
              }}>
                Our Vision
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#6B7280',
                lineHeight: '1.7',
                marginBottom: '24px'
              }}>
                To be a global leader in education, shaping compassionate, innovative, and responsible citizens who drive positive change in their communities and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section style={{
          padding: '64px 0',
          backgroundColor: '#F9FAFB',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '64px'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: '16px'
          }}>
            Our Core Values
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 32px',
            lineHeight: '1.7'
          }}>
            Our values are the foundation of our community, guiding every decision and inspiring our students to lead with purpose.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {[
              { value: 'Excellence', desc: 'We pursue unparalleled standards in education, fostering a culture of achievement and growth.', icon: FiStar },
              { value: 'Integrity', desc: 'Honesty and ethical conduct guide our actions, building trust and accountability.', icon: FiAward },
              { value: 'Innovation', desc: 'We embrace creativity and forward-thinking to prepare students for future challenges.', icon: FiBookOpen },
              { value: 'Community', desc: 'Our inclusive environment nurtures collaboration, respect, and a sense of belonging.', icon: FiUsers }
            ].map((value, index) => (
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
            marginBottom: '16px'
          }}>
            Join Our Vision
          </h2>
          <p style={{
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto 24px',
            lineHeight: '1.7'
          }}>
            Become part of a community driven by excellence, integrity, and innovation.
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