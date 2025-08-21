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
            padding: '24px'
          }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '16px',
              letterSpacing: '1.2px'
            }}>
              Frequently Asked Questions
            </h1>
            <p style={{
              fontSize: '22px',
              maxWidth: '700px',
              marginBottom: '24px',
              lineHeight: '1.6'
            }}>
              Find answers to common questions about Sanniville Academy’s programs, admissions, and community.
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
            Your Questions Answered
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 32px',
            lineHeight: '1.7',
            textAlign: 'center'
          }}>
            Explore our most frequently asked questions to learn more about what makes Sanniville unique.
          </p>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{
                backgroundColor: '#FFFFFF',
                padding: '16px',
                borderRadius: '8px',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                marginBottom: '16px',
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
                    padding: '8px'
                  }}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#4B5320'
                  }}>
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <FiMinus size={24} style={{ color: '#D4A017' }} />
                  ) : (
                    <FiPlus size={24} style={{ color: '#D4A017' }} />
                  )}
                </div>
                {openIndex === index && (
                  <p style={{
                    fontSize: '16px',
                    color: '#6B7280',
                    lineHeight: '1.5',
                    padding: '16px'
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
            Still Have Questions?
          </h2>
          <p style={{
            fontSize: '18px',
            maxWidth: '700px',
            margin: '0 auto 24px',
            lineHeight: '1.7'
          }}>
            Contact us for personalized assistance or more information.
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
            Contact Us
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}