"use client";
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function Tuition() {
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
          backgroundImage: 'url(/images/tuition-hero.jpeg)',
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
              Tuition & Payment
            </h1>
            <p style={{
              fontSize: '22px',
              maxWidth: '700px',
              marginBottom: '24px',
              lineHeight: '1.6'
            }}>
              Transparent tuition information and flexible payment options to support your family.
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
            Tuition Fees
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 32px',
            lineHeight: '1.7',
            textAlign: 'center'
          }}>
            Our tuition structure is designed to provide value for a world-class education. Fees vary by grade and campus.
          </p>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            overflowX: 'auto'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
              borderRadius: '8px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#4B5320', color: '#FFFFFF' }}>
                  <th style={{ padding: '16px', fontSize: '16px', fontWeight: '600', textAlign: 'left' }}>Grade</th>
                  <th style={{ padding: '16px', fontSize: '16px', fontWeight: '600', textAlign: 'left' }}>Annual Tuition (NGN)</th>
                  <th style={{ padding: '16px', fontSize: '16px', fontWeight: '600', textAlign: 'left' }}>Campus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { grade: 'JSS1 - JSS3', tuition: '1,500,000', campus: 'Lagos' },
                  { grade: 'JSS1 - JSS3', tuition: '1,400,000', campus: 'Abuja' },
                  { grade: 'SS1 - SS3', tuition: '1,800,000', campus: 'Lagos' },
                  { grade: 'SS1 - SS3', tuition: '1,700,000', campus: 'Abuja' }
                ].map((row, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{ padding: '16px', fontSize: '16px', color: '#1F2937' }}>{row.grade}</td>
                    <td style={{ padding: '16px', fontSize: '16px', color: '#1F2937' }}>{row.tuition}</td>
                    <td style={{ padding: '16px', fontSize: '16px', color: '#1F2937' }}>{row.campus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{
            fontSize: '14px',
            color: '#6B7280',
            textAlign: 'center',
            marginTop: '16px'
          }}>
            *Tuition includes textbooks, uniforms, and extracurricular fees. Additional fees may apply for boarding or special programs.
          </p>
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
            Payment Options
          </h2>
          <p style={{
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto 24px',
            lineHeight: '1.7'
          }}>
            We offer flexible payment plans, including annual, termly, and monthly options. Contact our admissions office for details.
          </p>
          <Link
            href="/contact-us"
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
            Contact Admissions
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}