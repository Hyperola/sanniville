"use client";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function NewsEvents() {
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
          backgroundImage: 'url(/images/news-hero.jpeg)',
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
              News & Events
            </h1>
            <p style={{
              fontSize: '22px',
              maxWidth: '700px',
              marginBottom: '24px',
              lineHeight: '1.6'
            }}>
              Stay updated with the latest happenings at Sanniville Academy and join our vibrant community events.
            </p>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: '#D4A017',
                color: '#1F2937',
                padding: '14px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '600',
                transition: 'all 0.3s ease-in-out'
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
              Get Involved
            </Link>
          </div>
        </section>

        <section id="latest-news" style={{
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
            Latest News
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 32px',
            lineHeight: '1.7',
            textAlign: 'center'
          }}>
            Discover the latest achievements, updates, and milestones from Sanniville Academy.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {[
              { 
                title: 'Sanniville Students Excel in National Science Olympiad', 
                desc: 'Our students secured top positions in the 2025 National Science Olympiad, showcasing academic excellence.', 
                image: '/images/news-article1.jpeg',
                date: 'August 10, 2025'
              },
              { 
                title: 'New STEM Lab Unveiled at Lagos Campus', 
                desc: 'A state-of-the-art STEM lab was launched to enhance hands-on learning for our students.', 
                image: '/images/news-article2.jpeg',
                date: 'July 15, 2025'
              }
            ].map((article, index) => (
              <div key={index} style={{
                backgroundColor: '#FFFFFF',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease-in-out',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <img
                  src={article.image}
                  alt={article.title}
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
                  marginBottom: '8px'
                }}>
                  {article.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#6B7280',
                  marginBottom: '12px'
                }}>
                  {article.date}
                </p>
                <p style={{
                  fontSize: '16px',
                  color: '#6B7280',
                  lineHeight: '1.5',
                  marginBottom: '16px'
                }}>
                  {article.desc}
                </p>
                <Link
                  href="/news-events"
                  style={{
                    color: '#D4A017',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'color 0.3s ease-in-out'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#b58900'}
                  onMouseLeave={(e) => e.target.style.color = '#D4A017'}
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="upcoming-events" style={{
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
            Upcoming Events
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 32px',
            lineHeight: '1.7',
            textAlign: 'center'
          }}>
            Join us for exciting events that bring our community together.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {[
              { 
                title: 'Annual Cultural Festival', 
                desc: 'Celebrate diversity with performances, food, and art on October 25, 2025.', 
                date: 'October 25, 2025',
                link: '/contact-us'
              },
              { 
                title: 'Career Day 2025', 
                desc: 'Connect with professionals and explore career paths on November 15, 2025.', 
                date: 'November 15, 2025',
                link: '/contact-us'
              }
            ].map((event, index) => (
              <div key={index} style={{
                backgroundColor: '#FFFFFF',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease-in-out'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#4B5320',
                  marginBottom: '8px'
                }}>
                  {event.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#6B7280',
                  marginBottom: '12px'
                }}>
                  {event.date}
                </p>
                <p style={{
                  fontSize: '16px',
                  color: '#6B7280',
                  lineHeight: '1.5',
                  marginBottom: '16px'
                }}>
                  {event.desc}
                </p>
                <Link
                  href={event.link}
                  style={{
                    color: '#D4A017',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'color 0.3s ease-in-out'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#b58900'}
                  onMouseLeave={(e) => e.target.style.color = '#D4A017'}
                >
                  Register Now
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="event-gallery" style={{
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
            Event Gallery
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 32px',
            lineHeight: '1.7',
            textAlign: 'center'
          }}>
            Relive the moments from our past events and celebrations.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {[
              { image: '/images/football.jpeg', alt: 'Annual Sports Day 2024' },
              { image: '/images/event2.jpg', alt: 'Science Fair 2024' }
            ].map((item, index) => (
              <div key={index} style={{
                transition: 'transform 0.3s ease-in-out'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0 6px 12px rgba(0,0,0,0.1)'
                  }}
                />
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
            Stay connected and participate in Sanniville’s exciting events.
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
              transition: 'all 0.3s ease-in-out'
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
            Get Involved
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}