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
          height: 'clamp(350px, 50vw, 500px)',
          marginBottom: 'clamp(32px, 8vw, 64px)',
          borderRadius: 'clamp(8px, 2vw, 12px)',
          overflow: 'hidden',
          boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          backgroundImage: 'url(/images/song-prayers.jpeg)',
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
              Our Song & Prayers
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 4vw, 22px)',
              maxWidth: 'min(90%, 700px)',
              marginBottom: 'clamp(12px, 3vw, 24px)',
              lineHeight: '1.6',
            }}>
              Celebrate the spirit of Sanniville through our cherished school song and unifying prayers.
            </p>
          </div>
        </section>

        {/* School Song */}
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
            Sanniville Academy Anthem
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            color: '#6B7280',
            maxWidth: 'min(90%, 800px)',
            margin: '0 auto clamp(16px, 4vw, 32px)',
            lineHeight: '1.7',
            textAlign: 'center',
          }}>
            Our anthem reflects our commitment to excellence, unity, and progress, sung with pride by our community.
          </p>
          <div style={{
            maxWidth: 'min(90%, 600px)',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            padding: 'clamp(16px, 4vw, 24px)',
            borderRadius: 'clamp(6px, 1.5vw, 8px)',
            boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
            textAlign: 'center',
          }}>
            <audio controls style={{
              width: '100%',
              marginBottom: 'clamp(8px, 2vw, 16px)',
              maxWidth: '100%',
            }}>
              <source src="/audio/sanniville-anthem.mp3" type="audio/mp3" />
            </audio>
            <p style={{
              fontSize: 'clamp(12px, 3vw, 16px)',
              color: '#6B7280',
              lineHeight: '1.5',
              fontStyle: 'italic',
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
          padding: 'clamp(32px, 8vw, 64px) 0',
          marginBottom: 'clamp(32px, 8vw, 64px)',
        }}>
          <h2 style={{
            fontSize: 'clamp(24px, 5vw, 36px)',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: 'clamp(8px, 2vw, 16px)',
            textAlign: 'center',
          }}>
            Our Prayers
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            color: '#6B7280',
            maxWidth: 'min(90%, 800px)',
            margin: '0 auto clamp(16px, 4vw, 32px)',
            lineHeight: '1.7',
            textAlign: 'center',
          }}>
            Our prayers unite our community, fostering hope, gratitude, and a shared vision for a brighter future.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(clamp(240px, 35vw, 300px), 1fr))`,
            gap: 'clamp(12px, 3vw, 24px)',
            maxWidth: 'min(90%, 1000px)',
            margin: '0 auto',
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
                <h3 style={{
                  fontSize: 'clamp(16px, 4vw, 20px)',
                  fontWeight: '600',
                  color: '#4B5320',
                  marginBottom: 'clamp(8px, 2vw, 12px)',
                }}>
                  {prayer.title}
                </h3>
                <p style={{
                  fontSize: 'clamp(12px, 3vw, 16px)',
                  color: '#6B7280',
                  lineHeight: '1.5',
                  fontStyle: 'italic',
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
            Join Our Community
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            maxWidth: 'min(90%, 700px)',
            margin: '0 auto clamp(12px, 3vw, 24px)',
            lineHeight: '1.7',
          }}>
            Be part of a community united by song, prayer, and a shared vision for excellence.
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