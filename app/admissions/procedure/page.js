"use client";
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function Procedure() {
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
          backgroundImage: 'url(/images/procedure-hero.jpg)',
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
              Admission Procedure
            </h1>
            <p style={{
              fontSize: '22px',
              maxWidth: '700px',
              marginBottom: '24px',
              lineHeight: '1.6'
            }}>
              A streamlined process to guide you from application to enrollment.
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
            How to Join Sanniville
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 32px',
            lineHeight: '1.7',
            textAlign: 'center'
          }}>
            Our admission process is designed to be clear and supportive, ensuring the best fit for our community.
          </p>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              { step: '1. Submit Application', desc: 'Complete the online application form with all required details.' },
              { step: '2. Provide Documents', desc: 'Submit academic records, recommendation letters, and other requirements.' },
              { step: '3. Entrance Examination', desc: 'Take our entrance exam to assess academic readiness.' },
              { step: '4. Attend Interview', desc: 'Shortlisted candidates meet with our admissions team.' },
              { step: '5. Receive Admission Decision', desc: 'We notify you of our decision within two weeks.' },
              { step: '6. Enroll', desc: 'Complete enrollment forms and payment to secure your spot.' }
            ].map((step, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                marginBottom: '16px',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#D4A017',
                  color: '#1F2937',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: '600',
                  marginRight: '16px'
                }}>
                  {index + 1}
                </div>
                <div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#4B5320',
                    marginBottom: '8px'
                  }}>
                    {step.step}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: '#6B7280',
                    lineHeight: '1.5'
                  }}>
                    {step.desc}
                  </p>
                </div>
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
            Start Your Application
          </h2>
          <p style={{
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto 24px',
            lineHeight: '1.7'
          }}>
            Begin your journey to Sanniville Academy today.
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