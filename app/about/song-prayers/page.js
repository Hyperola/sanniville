"use client";
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function SongPrayers() {
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
          backgroundImage: 'url(/images/song-prayers.jpeg)',
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
              Our Song & Prayers
            </h1>
            <p style={{
              fontSize: '22px',
              maxWidth: '700px',
              marginBottom: '24px',
              lineHeight: '1.6'
            }}>
              Celebrate the spirit of Sanniville through our cherished school song and unifying prayers.
            </p>
          </div>
        </section>

        {/* School Song */}
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
            Sanniville Academy Anthem
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 32px',
            lineHeight: '1.7',
            textAlign: 'center'
          }}>
            Our anthem reflects our commitment to excellence, unity, and progress, sung with pride by our community.
          </p>
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <audio controls style={{ width: '100%', marginBottom: '16px' }}>
              <source src="/audio/sanniville-anthem.mp3" type="audio/mp3" />
            </audio>
            <p style={{
              fontSize: '16px',
              color: '#6B7280',
              lineHeight: '1.5',
              fontStyle: 'italic'
            }}>
              Sanniville, our pride, we stand as one,<br />
              With hearts of courage, our journey begun.<br />
              Through knowledge and truth, we rise to the call,<br />
              For excellence, unity, we give our all.
            </p>
          </div>
        </section>

        {/* Prayers */}
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
            Our Prayers
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 32px',
            lineHeight: '1.7',
            textAlign: 'center'
          }}>
            Our prayers unite our community, fostering hope, gratitude, and a shared vision for a brighter future.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              { 
                title: 'Morning Prayer', 
                text: 'May wisdom guide our minds, and compassion fill our hearts as we learn and grow together.' 
              },
              { 
                title: 'Closing Prayer', 
                text: 'We give thanks for the knowledge gained today and seek strength to lead with integrity.' 
              }
            ].map((prayer, index) => (
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
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#4B5320',
                  marginBottom: '12px'
                }}>
                  {prayer.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#6B7280',
                  lineHeight: '1.5',
                  fontStyle: 'italic'
                }}>
                  {prayer.text}
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
            Join Our Community
          </h2>
          <p style={{
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto 24px',
            lineHeight: '1.7'
          }}>
            Be part of a community united by song, prayer, and a shared vision for excellence.
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