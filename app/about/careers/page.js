"use client";
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { FiChevronDown, FiBook, FiUsers, FiAward, FiDollarSign, FiHeart, FiClock, FiMapPin, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Careers() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    position: '', 
    coverLetter: '',
    resume: null 
  });
  const [activeTab, setActiveTab] = useState('teaching');
  const [expandedJob, setExpandedJob] = useState(null);
  const [applicationSuccess, setApplicationSuccess] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate backend submission
    setApplicationSuccess(true);
    setFormData({ name: '', email: '', phone: '', position: '', coverLetter: '', resume: null });
    setTimeout(() => setApplicationSuccess(false), 5000);
  };

  const toggleJobExpand = (index) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  const testimonials = [
    {
      name: 'Mrs. Aisha Bello',
      role: 'Senior Mathematics Teacher',
      quote: 'Teaching at Sanniville has been a rewarding journey. The support and resources here allow me to inspire students daily.',
      image: '/images/staff-1.jpeg'
    },
    {
      name: 'Mr. David Okon',
      role: 'School Counselor',
      quote: 'The collaborative culture at Sanniville makes it a joy to support student growth and well-being.',
      image: '/images/staff-2.jpeg'
    },
    {
      name: 'Ms. Chioma Adebayo',
      role: 'IT Support Specialist',
      quote: 'Sanniville invests in its staff, offering growth opportunities that have advanced my career significantly.',
      image: '/images/staff-3.jpeg'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div style={{ fontFamily: "'Merriweather', serif", color: '#1F2937' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '600px',
        marginBottom: '64px',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(rgba(75, 83, 32, 0.65), rgba(75, 83, 32, 0.65)), url(/images/career-hero.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        padding: '0 20px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
      }}>
        <div style={{ maxWidth: '900px' }}>
          <h1 style={{
            fontSize: '52px',
            fontWeight: '700',
            marginBottom: '20px',
            letterSpacing: '1.5px'
          }}>
            Shape Futures at Sanniville Academy
          </h1>
          <p style={{
            fontSize: '24px',
            marginBottom: '32px',
            lineHeight: '1.6'
          }}>
            Join our mission to provide transformative education and inspire the next generation of leaders.
          </p>
          <Link
            href="#application-form"
            style={{
              backgroundColor: '#D4A017',
              color: '#1F2937',
              padding: '16px 36px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '20px',
              fontWeight: '600',
              transition: 'all 0.3s ease'
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

      <main style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 16px 64px'
      }}>
        {/* Why Work With Us Section */}
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
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            Why Work at Sanniville Academy
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: '1.8',
            textAlign: 'center'
          }}>
            We invest in our educators and staff to create exceptional learning experiences for our students.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                icon: <FiDollarSign size={48} color="#D4A017" />,
                title: 'Competitive Compensation',
                description: 'Competitive salaries with performance-based increments and regular reviews.'
              },
              {
                icon: <FiHeart size={48} color="#D4A017" />,
                title: 'Health & Wellness',
                description: 'Comprehensive health insurance and access to on-campus fitness facilities.'
              },
              {
                icon: <FiAward size={48} color="#D4A017" />,
                title: 'Professional Development',
                description: 'Annual stipends for conferences, in-house workshops, and degree support.'
              },
              {
                icon: <FiClock size={48} color="#D4A017" />,
                title: 'Work-Life Balance',
                description: 'Generous vacation, flexible schedules, and family-friendly policies.'
              },
              {
                icon: <FiBook size={48} color="#D4A017" />,
                title: 'Resources & Support',
                description: 'State-of-the-art facilities, teaching assistants, and dedicated planning time.'
              },
              {
                icon: <FiUsers size={48} color="#D4A017" />,
                title: 'Collaborative Community',
                description: 'Supportive environment with passionate colleagues valuing every contribution.'
              }
            ].map((benefit, index) => (
              <div key={index} style={{
                backgroundColor: '#FFFFFF',
                padding: '32px 24px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                textAlign: 'center',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ marginBottom: '20px' }}>{benefit.icon}</div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#4B5320',
                  marginBottom: '16px'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#6B7280',
                  lineHeight: '1.6'
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Culture Section */}
        <section style={{
          padding: '64px 0',
          marginBottom: '64px',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            Our Culture
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: '1.8',
            textAlign: 'center'
          }}>
            At Sanniville, we foster a culture of collaboration, innovation, and passion for education, creating a vibrant community for our staff and students.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {[
              { image: '/images/culture-1.jpeg', alt: 'Staff collaboration', caption: 'Team planning session' },
              { image: '/images/culture-2.jpeg', alt: 'Professional development', caption: 'Annual teacher training workshop' },
              { image: '/images/culture-3.jpeg', alt: 'Community event', caption: 'Staff at annual cultural day' }
            ].map((item, index) => (
              <div key={index} style={{
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  }}
                />
                <p style={{
                  fontSize: '14px',
                  color: '#6B7280',
                  textAlign: 'center',
                  marginTop: '8px',
                  fontStyle: 'italic'
                }}>
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Carousel */}
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
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            Voices from Our Team
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: '1.8',
            textAlign: 'center'
          }}>
            Hear from our staff about what makes working at Sanniville Academy so special.
          </p>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '32px',
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              flexDirection: 'row'
            }}
            sx={{ '@media (maxWidth: 768px)': { flexDirection: 'column' } }}
            >
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}
              />
              <div>
                <p style={{
                  fontSize: '18px',
                  color: '#1F2937',
                  lineHeight: '1.8',
                  marginBottom: '16px',
                  fontStyle: 'italic'
                }}>
                  {testimonials[currentTestimonial].quote}
                </p>
                <p style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#4B5320'
                }}>
                  {testimonials[currentTestimonial].name}
                </p>
                <p style={{
                  fontSize: '16px',
                  color: '#6B7280'
                }}>
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              marginTop: '24px'
            }}>
              <button
                onClick={prevTestimonial}
                style={{
                  backgroundColor: '#D4A017',
                  color: '#1F2937',
                  padding: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#b58900'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#D4A017'}
              >
                <FiChevronLeft style={{ fontSize: '20px' }} />
              </button>
              <button
                onClick={nextTestimonial}
                style={{
                  backgroundColor: '#D4A017',
                  color: '#1F2937',
                  padding: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#b58900'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#D4A017'}
              >
                <FiChevronRight style={{ fontSize: '20px' }} />
              </button>
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section style={{
          padding: '64px 0',
          marginBottom: '64px'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            Current Opportunities
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: '1.8',
            textAlign: 'center'
          }}>
            Explore opportunities to join our dynamic team of educators and administrators.
          </p>

          {/* Tab Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '48px',
            borderBottom: '1px solid #E5E7EB'
          }}>
            {['teaching', 'administration', 'support'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '16px 32px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: activeTab === tab ? '3px solid #D4A017' : '3px solid transparent',
                  fontWeight: '600',
                  fontSize: '18px',
                  color: activeTab === tab ? '#4B5320' : '#6B7280',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Positions
              </button>
            ))}
          </div>

          {/* Teaching Positions */}
          {activeTab === 'teaching' && (
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              {[
                { 
                  title: 'Mathematics Teacher - Senior Secondary', 
                  department: 'Mathematics Department',
                  location: 'Main Campus, Lagos',
                  type: 'Full-time',
                  image: '/images/job-math-teacher.jpeg',
                  description: 'Inspire senior secondary students with engaging lessons in IGCSE and WAEC mathematics curricula, fostering critical thinking and problem-solving skills.',
                  requirements: [
                    'Bachelor’s degree in Mathematics or related field (Master’s preferred)',
                    'Teaching certification and 3+ years of classroom experience',
                    'Expertise in IGCSE/WAEC curriculum standards',
                    'Strong classroom management and communication skills'
                  ],
                  responsibilities: [
                    'Develop and deliver engaging lesson plans',
                    'Assess and monitor student progress',
                    'Participate in department meetings and professional development',
                    'Provide individualized student support'
                  ]
                },
                { 
                  title: 'Science Teacher - Physics Specialist', 
                  department: 'Science Department',
                  location: 'Main Campus, Lagos',
                  type: 'Full-time',
                  image: '/images/job-physics-teacher.jpeg',
                  description: 'Deliver hands-on, inquiry-based physics lessons to prepare students for advanced studies in science and engineering.',
                  requirements: [
                    'Degree in Physics or related field',
                    'Teaching certification with 2+ years of experience',
                    'Experience with laboratory instruction and safety protocols',
                    'Passion for innovative teaching methods'
                  ],
                  responsibilities: [
                    'Teach physics to junior and senior secondary students',
                    'Manage laboratory activities and equipment',
                    'Develop project-based learning experiences',
                    'Collaborate with science department colleagues'
                  ]
                },
                { 
                  title: 'Primary School Classroom Teacher', 
                  department: 'Primary Division',
                  location: 'Junior Campus, Abuja',
                  type: 'Full-time',
                  image: '/images/job-primary-teacher.jpeg',
                  description: 'Create a nurturing environment for young learners, implementing a holistic curriculum for academic and emotional growth.',
                  requirements: [
                    'Bachelor’s degree in Education or related field',
                    'Primary teaching certification',
                    'Experience with inquiry-based learning approaches',
                    'Strong understanding of child development'
                  ],
                  responsibilities: [
                    'Foster a positive classroom community',
                    'Differentiate instruction for diverse learners',
                    'Communicate regularly with parents',
                    'Participate in school-wide events'
                  ]
                }
              ].map((job, index) => (
                <div key={index} style={{
                  backgroundColor: '#FFFFFF',
                  padding: '32px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  marginBottom: '24px',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                onClick={() => toggleJobExpand(index)}
                sx={{ '@media (maxWidth: 768px)': { flexDirection: 'column' } }}
                >
                  <img
                    src={job.image}
                    alt={job.title}
                    style={{
                      width: '200px',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '16px'
                    }}>
                      <div>
                        <h3 style={{
                          fontSize: '20px',
                          fontWeight: '600',
                          color: '#4B5320',
                          marginBottom: '8px'
                        }}>
                          {job.title}
                        </h3>
                        <div style={{
                          display: 'flex',
                          gap: '16px',
                          marginBottom: '12px',
                          flexWrap: 'wrap'
                        }}>
                          <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            backgroundColor: '#ECFDF5',
                            color: '#065F46',
                            padding: '4px 12px',
                            borderRadius: '50px',
                            fontSize: '14px',
                            fontWeight: '500'
                          }}>
                            <FiMapPin size={14} /> {job.location}
                          </span>
                          <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            backgroundColor: '#FEF3C7',
                            color: '#92400E',
                            padding: '4px 12px',
                            borderRadius: '50px',
                            fontSize: '14px',
                            fontWeight: '500'
                          }}>
                            <FiClock size={14} /> {job.type}
                          </span>
                          <span style={{
                            backgroundColor: '#EFF6FF',
                            color: '#1E40AF',
                            padding: '4px 12px',
                            borderRadius: '50px',
                            fontSize: '14px',
                            fontWeight: '500'
                          }}>
                            {job.department}
                          </span>
                        </div>
                      </div>
                      <FiChevronDown style={{
                        transform: expandedJob === index ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease',
                        color: '#4B5320'
                      }} />
                    </div>
                    <p style={{
                      color: '#6B7280',
                      lineHeight: '1.6',
                      marginBottom: '16px'
                    }}>
                      {job.description}
                    </p>
                    {expandedJob === index && (
                      <div>
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                          gap: '24px',
                          marginBottom: '24px'
                        }}>
                          <div>
                            <h4 style={{
                              fontSize: '18px',
                              fontWeight: '600',
                              color: '#4B5320',
                              marginBottom: '12px',
                              paddingBottom: '8px',
                              borderBottom: '2px solid #D4A017'
                            }}>
                              Requirements
                            </h4>
                            <ul style={{
                              color: '#6B7280',
                              paddingLeft: '20px'
                            }}>
                              {job.requirements.map((req, i) => (
                                <li key={i} style={{ marginBottom: '8px' }}>{req}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 style={{
                              fontSize: '18px',
                              fontWeight: '600',
                              color: '#4B5320',
                              marginBottom: '12px',
                              paddingBottom: '8px',
                              borderBottom: '2px solid #D4A017'
                            }}>
                              Key Responsibilities
                            </h4>
                            <ul style={{
                              color: '#6B7280',
                              paddingLeft: '20px'
                            }}>
                              {job.responsibilities.map((resp, i) => (
                                <li key={i} style={{ marginBottom: '8px' }}>{resp}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setFormData({...formData, position: job.title});
                            document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
                          }}
                          style={{
                            backgroundColor: '#D4A017',
                            color: '#1F2937',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            border: 'none',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
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
                          Apply for This Position
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Administration Positions */}
          {activeTab === 'administration' && (
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              {[
                { 
                  title: 'School Counselor', 
                  department: 'Student Services',
                  location: 'Main Campus, Lagos',
                  type: 'Full-time',
                  image: '/images/job-counselor.jpeg',
                  description: 'Support student well-being and academic success through individual and group counseling, collaborating with teachers and parents.',
                  requirements: [
                    'Master’s degree in Counseling or related field',
                    'Counseling certification and 2+ years of experience',
                    'Knowledge of child development and learning styles',
                    'Excellent interpersonal and communication skills'
                  ],
                  responsibilities: [
                    'Provide individual and group counseling',
                    'Develop guidance programs',
                    'Collaborate with teachers and parents',
                    'Maintain confidential student records'
                  ]
                },
                { 
                  title: 'Admissions Officer', 
                  department: 'Administration',
                  location: 'Main Campus, Lagos',
                  type: 'Full-time',
                  image: '/images/job-admissions.jpeg',
                  description: 'Guide prospective families through the enrollment process, serving as the first point of contact for our school community.',
                  requirements: [
                    'Bachelor’s degree in any field',
                    '2+ years in admissions or customer service',
                    'Excellent communication and presentation skills',
                    'Familiarity with school management systems'
                  ],
                  responsibilities: [
                    'Manage inquiries and admissions process',
                    'Conduct school tours and information sessions',
                    'Maintain applicant records',
                    'Participate in recruitment events'
                  ]
                }
              ].map((job, index) => (
                <div key={index} style={{
                  backgroundColor: '#FFFFFF',
                  padding: '32px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  marginBottom: '24px',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                onClick={() => toggleJobExpand(index)}
                sx={{ '@media (maxWidth: 768px)': { flexDirection: 'column' } }}
                >
                  <img
                    src={job.image}
                    alt={job.title}
                    style={{
                      width: '200px',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '16px'
                    }}>
                      <div>
                        <h3 style={{
                          fontSize: '20px',
                          fontWeight: '600',
                          color: '#4B5320',
                          marginBottom: '8px'
                        }}>
                          {job.title}
                        </h3>
                        <div style={{
                          display: 'flex',
                          gap: '16px',
                          marginBottom: '12px',
                          flexWrap: 'wrap'
                        }}>
                          <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            backgroundColor: '#ECFDF5',
                            color: '#065F46',
                            padding: '4px 12px',
                            borderRadius: '50px',
                            fontSize: '14px',
                            fontWeight: '500'
                          }}>
                            <FiMapPin size={14} /> {job.location}
                          </span>
                          <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            backgroundColor: '#FEF3C7',
                            color: '#92400E',
                            padding: '4px 12px',
                            borderRadius: '50px',
                            fontSize: '14px',
                            fontWeight: '500'
                          }}>
                            <FiClock size={14} /> {job.type}
                          </span>
                          <span style={{
                            backgroundColor: '#EFF6FF',
                            color: '#1E40AF',
                            padding: '4px 12px',
                            borderRadius: '50px',
                            fontSize: '14px',
                            fontWeight: '500'
                          }}>
                            {job.department}
                          </span>
                        </div>
                      </div>
                      <FiChevronDown style={{
                        transform: expandedJob === index ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease',
                        color: '#4B5320'
                      }} />
                    </div>
                    <p style={{
                      color: '#6B7280',
                      lineHeight: '1.6',
                      marginBottom: '16px'
                    }}>
                      {job.description}
                    </p>
                    {expandedJob === index && (
                      <div>
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                          gap: '24px',
                          marginBottom: '24px'
                        }}>
                          <div>
                            <h4 style={{
                              fontSize: '18px',
                              fontWeight: '600',
                              color: '#4B5320',
                              marginBottom: '12px',
                              paddingBottom: '8px',
                              borderBottom: '2px solid #D4A017'
                            }}>
                              Requirements
                            </h4>
                            <ul style={{
                              color: '#6B7280',
                              paddingLeft: '20px'
                            }}>
                              {job.requirements.map((req, i) => (
                                <li key={i} style={{ marginBottom: '8px' }}>{req}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 style={{
                              fontSize: '18px',
                              fontWeight: '600',
                              color: '#4B5320',
                              marginBottom: '12px',
                              paddingBottom: '8px',
                              borderBottom: '2px solid #D4A017'
                            }}>
                              Key Responsibilities
                            </h4>
                            <ul style={{
                              color: '#6B7280',
                              paddingLeft: '20px'
                            }}>
                              {job.responsibilities.map((resp, i) => (
                                <li key={i} style={{ marginBottom: '8px' }}>{resp}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setFormData({...formData, position: job.title});
                            document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
                          }}
                          style={{
                            backgroundColor: '#D4A017',
                            color: '#1F2937',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            border: 'none',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
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
                          Apply for This Position
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Support Positions */}
          {activeTab === 'support' && (
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              {[
                { 
                  title: 'Science Lab Technician', 
                  department: 'Science Department',
                  location: 'Main Campus, Lagos',
                  type: 'Full-time',
                  image: '/images/job-lab-tech.jpeg',
                  description: 'Manage and maintain state-of-the-art science laboratories, supporting teachers and ensuring a safe learning environment.',
                  requirements: [
                    'Degree in Science or related field',
                    'Experience in laboratory management',
                    'Knowledge of safety protocols and equipment maintenance',
                    'Strong organizational skills'
                  ],
                  responsibilities: [
                    'Prepare materials and equipment for experiments',
                    'Maintain inventory and order supplies',
                    'Ensure compliance with safety regulations',
                    'Assist teachers during lab sessions'
                  ]
                },
                { 
                  title: 'IT Support Specialist', 
                  department: 'Information Technology',
                  location: 'Main Campus, Lagos',
                  type: 'Full-time',
                  image: '/images/job-it-support.jpeg',
                  description: 'Provide technical support to staff and students, maintaining our technology infrastructure for seamless operations.',
                  requirements: [
                    'Degree in IT or equivalent experience',
                    '2+ years in technical support',
                    'Knowledge of network administration and hardware',
                    'Excellent problem-solving skills'
                  ],
                  responsibilities: [
                    'Provide technical support to staff and students',
                    'Maintain computer systems and networks',
                    'Install and configure software and hardware',
                    'Train staff on technology use'
                  ]
                }
              ].map((job, index) => (
                <div key={index} style={{
                  backgroundColor: '#FFFFFF',
                  padding: '32px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  marginBottom: '24px',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                onClick={() => toggleJobExpand(index)}
                sx={{ '@media (maxWidth: 768px)': { flexDirection: 'column' } }}
                >
                  <img
                    src={job.image}
                    alt={job.title}
                    style={{
                      width: '200px',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '16px'
                    }}>
                      <div>
                        <h3 style={{
                          fontSize: '20px',
                          fontWeight: '600',
                          color: '#4B5320',
                          marginBottom: '8px'
                        }}>
                          {job.title}
                        </h3>
                        <div style={{
                          display: 'flex',
                          gap: '16px',
                          marginBottom: '12px',
                          flexWrap: 'wrap'
                        }}>
                          <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            backgroundColor: '#ECFDF5',
                            color: '#065F46',
                            padding: '4px 12px',
                            borderRadius: '50px',
                            fontSize: '14px',
                            fontWeight: '500'
                          }}>
                            <FiMapPin size={14} /> {job.location}
                          </span>
                          <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            backgroundColor: '#FEF3C7',
                            color: '#92400E',
                            padding: '4px 12px',
                            borderRadius: '50px',
                            fontSize: '14px',
                            fontWeight: '500'
                          }}>
                            <FiClock size={14} /> {job.type}
                          </span>
                          <span style={{
                            backgroundColor: '#EFF6FF',
                            color: '#1E40AF',
                            padding: '4px 12px',
                            borderRadius: '50px',
                            fontSize: '14px',
                            fontWeight: '500'
                          }}>
                            {job.department}
                          </span>
                        </div>
                      </div>
                      <FiChevronDown style={{
                        transform: expandedJob === index ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease',
                        color: '#4B5320'
                      }} />
                    </div>
                    <p style={{
                      color: '#6B7280',
                      lineHeight: '1.6',
                      marginBottom: '16px'
                    }}>
                      {job.description}
                    </p>
                    {expandedJob === index && (
                      <div>
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                          gap: '24px',
                          marginBottom: '24px'
                        }}>
                          <div>
                            <h4 style={{
                              fontSize: '18px',
                              fontWeight: '600',
                              color: '#4B5320',
                              marginBottom: '12px',
                              paddingBottom: '8px',
                              borderBottom: '2px solid #D4A017'
                            }}>
                              Requirements
                            </h4>
                            <ul style={{
                              color: '#6B7280',
                              paddingLeft: '20px'
                            }}>
                              {job.requirements.map((req, i) => (
                                <li key={i} style={{ marginBottom: '8px' }}>{req}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 style={{
                              fontSize: '18px',
                              fontWeight: '600',
                              color: '#4B5320',
                              marginBottom: '12px',
                              paddingBottom: '8px',
                              borderBottom: '2px solid #D4A017'
                            }}>
                              Key Responsibilities
                            </h4>
                            <ul style={{
                              color: '#6B7280',
                              paddingLeft: '20px'
                            }}>
                              {job.responsibilities.map((resp, i) => (
                                <li key={i} style={{ marginBottom: '8px' }}>{resp}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setFormData({...formData, position: job.title});
                            document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
                          }}
                          style={{
                            backgroundColor: '#D4A017',
                            color: '#1F2937',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            border: 'none',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
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
                          Apply for This Position
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Application Form Section */}
        <section id="application-form" style={{
          padding: '64px 0',
          marginBottom: '64px',
          backgroundColor: '#F9FAFB',
          borderRadius: '12px'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#4B5320',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            Apply Now
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: '1.8',
            textAlign: 'center'
          }}>
            Ready to join our team? Submit your application, and we’ll contact you soon.
          </p>
          
          {applicationSuccess && (
            <div style={{
              backgroundColor: '#ECFDF5',
              color: '#065F46',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '24px',
              textAlign: 'center',
              fontWeight: '500'
            }}>
              Thank you for your application! We will review your materials and contact you soon.
            </div>
          )}
          
          <form
            onSubmit={handleSubmit}
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              backgroundColor: '#FFFFFF',
              padding: '32px',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              marginBottom: '24px'
            }}>
              <div>
                <label style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#4B5320',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    fontSize: '16px',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#D4A017'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>
              <div>
                <label style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#4B5320',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    fontSize: '16px',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#D4A017'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              marginBottom: '24px'
            }}>
              <div>
                <label style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#4B5320',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    fontSize: '16px',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#D4A017'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>
              <div>
                <label style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#4B5320',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  Position Applied For *
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    fontSize: '16px',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#D4A017'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#4B5320',
                display: 'block',
                marginBottom: '8px'
              }}>
                Cover Letter
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows="5"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #D1D5DB',
                  borderRadius: '8px',
                  fontSize: '16px',
                  resize: 'vertical',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#D4A017'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#4B5320',
                display: 'block',
                marginBottom: '8px'
              }}>
                Resume/CV * (PDF only)
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf"
                onChange={handleFileChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #D1D5DB',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#D4A017',
                color: '#1F2937',
                padding: '14px 32px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                width: '100%',
                transition: 'all 0.3s ease'
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
              Submit Application
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
