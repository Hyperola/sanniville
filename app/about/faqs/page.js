"use client";
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { 
      question: 'What is the admission process?', 
      answer: 'Our admission process involves an online application, entrance examination, and interview. Visit our Admissions page for details.' 
    },
    { 
      question: 'What curricula do you offer?', 
      answer: 'We offer the Nigerian National Curriculum and Cambridge IGCSE, ensuring a robust and globally recognized education.' 
    },
    { 
      question: 'Are scholarships available?', 
      answer: 'Yes, we offer merit-based and need-based scholarships. Check our Scholarships page for eligibility and application details.' 
    },
    { 
      question: 'What extracurricular activities are available?', 
      answer: 'We provide over 20 clubs, including robotics, debate, music, and sports, fostering holistic development.' 
    },
    { 
      question: 'How can parents stay involved?', 
      answer: 'Parents can participate through our Parent-Teacher Association, events, and regular conferences.' 
    }
  ];

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
        <section style={{
          position: 'relative',
          height: 'clamp(300px, 60vw, 500px)',
          marginBottom: 'clamp(32px, 8vw, 64px)',
          borderRadius: 'clamp(8px, 2vw, 12px)',
          overflow: 'hidden',
          boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          backgroundImage: 'url(/images/faqs.jpg)',
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
            padding: 'clamp(16px, 5vw, 24px)'
          }}>
            <h1 style={{
              fontSize: 'clamp(24px, 6vw, 48px)',
              fontWeight: '700',
              marginBottom: 'clamp(8px, 3vw, 16px)',
              letterSpacing: 'clamp(0.8px, 0.2vw, 1.2px)'
            }}>
              Frequently Asked Questions
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 4vw, 22px)',
              maxWidth: 'min(90%, 700px)',
              marginBottom: 'clamp(16px, 4vw, 24px)',
              lineHeight: '1.6'
            }}>
              Find answers to common questions about Sanniville Academy’s programs, admissions, and community.
            </p>
          </div>
        </section>

        <section style={{
          padding: 'clamp(32px, 8vw, 64px) 0',
          backgroundColor: '#F9FAFB',
          borderRadius: 'clamp(8px, 2vw, 12px)',
          marginBottom: 'clamp(32px, 8vw, 64px)'
        }}>
          <h2 style={{
            fontSize: 'clamp(24px, 5vw, 36px)',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: 'clamp(8px, 2vw, 16px)',
            textAlign: 'center'
          }}>
            Your Questions Answered
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            color: '#6B7280',
            maxWidth: 'min(90%, 800px)',
            margin: '0 auto clamp(16px, 4vw, 32px)',
            lineHeight: '1.7',
            textAlign: 'center'
          }}>
            Explore our most frequently asked questions to learn more about what makes Sanniville unique.
          </p>
          <div style={{
            maxWidth: 'min(90%, 800px)',
            margin: '0 auto'
          }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{
                backgroundColor: '#FFFFFF',
                padding: 'clamp(8px, 3vw, 16px)',
                borderRadius: 'clamp(6px, 1.5vw, 8px)',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                marginBottom: 'clamp(8px, 2vw, 16px)',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    padding: 'clamp(6px, 2vw, 8px)'
                  }}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 style={{
                    fontSize: 'clamp(16px, 4vw, 20px)',
                    fontWeight: '600',
                    color: '#4B5320'
                  }}>
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <FiMinus size={clamp(18, 3, 24)} style={{ color: '#D4A017' }} />
                  ) : (
                    <FiPlus size={clamp(18, 3, 24)} style={{ color: '#D4A017' }} />
                  )}
                </div>
                {openIndex === index && (
                  <p style={{
                    fontSize: 'clamp(14px, 3.5vw, 16px)',
                    color: '#6B7280',
                    lineHeight: '1.5',
                    padding: 'clamp(8px, 3vw, 16px)'
                  }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section style={{
          textAlign: 'center',
          padding: 'clamp(32px, 8vw, 64px)',
          backgroundColor: '#D4A017',
          borderRadius: 'clamp(8px, 2vw, 12px)',
          color: '#1F2937',
          marginBottom: 'clamp(32px, 8vw, 64px)'
        }}>
          <h2 style={{
            fontSize: 'clamp(24px, 5vw, 36px)',
            fontWeight: '700',
            marginBottom: 'clamp(8px, 2vw, 16px)'
          }}>
            Still Have Questions?
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            maxWidth: 'min(90%, 700px)',
            margin: '0 auto clamp(16px, 4vw, 24px)',
            lineHeight: '1.7'
          }}>
            Contact us for personalized assistance or more information.
          </p>
          <Link
            href="/contact-us"
            style={{
              backgroundColor: '#1F2937',
              color: '#FFFFFF',
              padding: 'clamp(10px, 2.5vw, 14px) clamp(20px, 4vw, 32px)',
              borderRadius: 'clamp(6px, 1.5vw, 8px)',
              textDecoration: 'none',
              fontSize: 'clamp(14px, 3.5vw, 18px)',
              fontWeight: '600',
              transition: 'background-color 0.3s, transform 0.2s',
              display: 'inline-block'
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
            Contact Us
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Helper function to emulate CSS clamp for icon sizes
function clamp(min, val, max) {
  return Math.min(Math.max(val * window.innerWidth / 100, min), max);
}