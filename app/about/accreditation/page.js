"use client";
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { FiChevronDown, FiExternalLink, FiAward, FiUsers, FiGlobe, FiBookOpen } from 'react-icons/fi';

export default function Accreditation() {
  const [activeTab, setActiveTab] = useState('accreditations');
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div style={{ fontFamily: "'Merriweather', serif", color: '#1F2937' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '500px',
        marginBottom: '64px',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(/images/accreditation-hero.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        padding: '0 20px'
      }}>
        <div style={{ maxWidth: '900px' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            letterSpacing: '1.2px'
          }}>
            Accreditation & Affiliations
          </h1>
          <p style={{
            fontSize: '1.5rem',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            Sanniville Academys commitment to excellence is validated by recognition from the worlds most respected educational bodies
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            {[
              { icon: <FiAward size={32} />, text: '5 International Accreditations' },
              { icon: <FiUsers size={32} />, text: '12+ Global Partnerships' },
              { icon: <FiGlobe size={32} />, text: 'World-Class Curriculum' }
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(212, 160, 23, 0.2)',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px'
              }}>
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 16px 64px'
      }}>
        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '3rem',
          borderBottom: '1px solid #E5E7EB'
        }}>
          {['accreditations', 'affiliations', 'quality-assurance', 'benefits'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '1rem 2rem',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: activeTab === tab ? '3px solid #D4A017' : '3px solid transparent',
                fontWeight: '600',
                fontSize: '1.1rem',
                color: activeTab === tab ? '#4B5320' : '#6B7280',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>

        {/* Accreditations Section */}
        {activeTab === 'accreditations' && (
          <section>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#4B5320',
                marginBottom: '1rem'
              }}>
                Our Recognitions & Accreditations
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#6B7280',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.7'
              }}>
                Sanniville Academy undergoes rigorous evaluation processes to maintain our accredited status, ensuring we meet the highest standards of educational excellence.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {[
                { 
                  name: 'West African Examinations Council (WAEC)', 
                  desc: 'Fully accredited to deliver the WAEC curriculum with consistently outstanding results. Our students have maintained a 95% pass rate over the last five years, with 40% achieving distinctions in core subjects.',
                  logo: '/images/waec-logo.png',
                  since: '2005',
                  status: 'Fully Accredited',
                  link: '#',
                  details: 'Our WAEC accreditation allows our graduates to gain direct entry into universities across West Africa and beyond. We undergo annual reviews to maintain our status as a WAEC examination center.'
                },
                { 
                  name: 'Nigerian Ministry of Education', 
                  desc: 'Recognized for excellence in secondary education and compliance with national educational standards. We are registered as a Model Secondary School under the Federal Ministry of Education.',
                  logo: '/images/ministry-logo.jpeg',
                  since: '1998',
                  status: 'Registered & Approved',
                  link: '#',
                  details: 'This recognition confirms that our facilities, curriculum, and teaching staff meet all requirements set by the Nigerian educational authorities. We participate in national educational initiatives and teacher training programs.'
                },
                { 
                  name: 'Cambridge Assessment International Education', 
                  desc: 'Authorized to offer Cambridge IGCSE and A-Level programs, providing our students with internationally recognized qualifications that open doors to global universities.',
                  logo: '/images/cambridge-logo.png',
                  since: '2012',
                  status: 'Cambridge International School',
                  link: '#',
                  details: 'As a Cambridge International School, we follow a globally recognized curriculum that develops learners who are confident, responsible, reflective, innovative and engaged. Our teachers receive specialized training from Cambridge experts.'
                },
                { 
                  name: 'International Baccalaureate Organization', 
                  desc: 'Candidate school for the IB Diploma Programme, working toward authorization to offer this prestigious curriculum that develops inquiring, knowledgeable and caring young people.',
                  logo: '/images/ib-logo.jpeg',
                  since: '2021',
                  status: 'Candidate School',
                  link: '#',
                  details: 'We are currently in the candidacy phase for the IB Diploma Programme, with expected authorization in 2024. This will make us one of the few schools in the region to offer both Cambridge and IB programs.'
                },
                { 
                  name: 'National Board for Technical Education (NBTE)', 
                  desc: 'Accredited to offer vocational and technical education programs that equip students with practical skills for both higher education and direct entry into the workforce.',
                  logo: '/images/nbte-logo.jpeg',
                  since: '2015',
                  status: 'Fully Accredited',
                  link: '#',
                  details: 'Our technical education programs include Computer Science, Business Studies, and Engineering Technology. Students receive both theoretical knowledge and hands-on experience in well-equipped workshops and labs.'
                }
              ].map((accreditation, index) => (
                <div key={index} style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                }}
                >
                  <div style={{
                    padding: '2rem',
                    borderBottom: '1px solid #F3F4F6'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '1.5rem'
                    }}>
                      <img
                        src={accreditation.logo}
                        alt={accreditation.name}
                        style={{
                          width: '80px',
                          height: '80px',
                          objectFit: 'contain',
                          marginRight: '1rem'
                        }}
                      />
                      <div>
                        <h3 style={{
                          fontSize: '1.35rem',
                          fontWeight: '600',
                          color: '#4B5320',
                          marginBottom: '0.5rem'
                        }}>
                          {accreditation.name}
                        </h3>
                        <div style={{
                          display: 'flex',
                          gap: '1rem',
                          fontSize: '0.9rem'
                        }}>
                          <span style={{
                            backgroundColor: '#ECFDF5',
                            color: '#065F46',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '50px',
                            fontWeight: '500'
                          }}>
                            {accreditation.status}
                          </span>
                          <span style={{
                            color: '#6B7280'
                          }}>
                            Since {accreditation.since}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p style={{
                      color: '#6B7280',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem'
                    }}>
                      {accreditation.desc}
                    </p>
                    
                    <button 
                      onClick={() => toggleExpand(index)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#D4A017',
                        fontWeight: '600',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      {expandedCard === index ? 'Show Less' : 'Read More'} 
                      <FiChevronDown style={{
                        transform: expandedCard === index ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease'
                      }} />
                    </button>
                  </div>
                  
                  {expandedCard === index && (
                    <div style={{
                      padding: '0 2rem 2rem',
                      backgroundColor: '#F9FAFB'
                    }}>
                      <p style={{
                        color: '#6B7280',
                        lineHeight: '1.6',
                        marginBottom: '1.5rem'
                      }}>
                        {accreditation.details}
                      </p>
                      <a
                        href={accreditation.link}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: '#4B5320',
                          fontWeight: '600',
                          textDecoration: 'none'
                        }}
                      >
                        Verify accreditation status <FiExternalLink size={16} />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Affiliations Section */}
        {activeTab === 'affiliations' && (
          <section>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#4B5320',
                marginBottom: '1rem'
              }}>
                Global Partnerships & Affiliations
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#6B7280',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.7'
              }}>
                Our strategic partnerships with leading educational organizations worldwide enhance our curriculum, provide professional development for our staff, and create unique opportunities for our students.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { 
                  name: 'UNESCO Associated Schools Network', 
                  desc: 'As a member of UNESCO ASPnet, we promote international understanding, peace, intercultural dialogue, sustainable development, and quality education in practice.',
                  logo: '/images/unesco-logo.png',
                  focus: 'Global Citizenship Education',
                  benefits: ['Student exchange programs', 'Participation in international projects', 'Access to UNESCO educational materials']
                },
                { 
                  name: 'Microsoft Showcase School', 
                  desc: 'Recognized for our innovative use of technology in education, we are part of a global community of schools transforming education through technology.',
                  logo: '/images/microsoft-logo.png',
                  focus: 'Technology Integration',
                  benefits: ['Early access to new technologies', 'Professional development for staff', 'Digital skills certification for students']
                },
                { 
                  name: 'Global Schools Alliance', 
                  desc: 'We collaborate with top schools across 5 continents to share best practices, participate in global conferences, and engage in joint research projects.',
                  logo: '/images/gsa-logo.png',
                  focus: 'International Collaboration',
                  benefits: ['Joint curriculum development', 'International student conferences', 'Teacher exchange programs']
                },
                { 
                  name: 'African Leadership Academy Network', 
                  desc: 'Partnering with this prestigious institution to identify and develop the next generation of African leaders through specialized programs and mentorship.',
                  logo: '/images/ala-logo.png',
                  focus: 'Leadership Development',
                  benefits: ['Leadership workshops', 'University preparation programs', 'Mentorship by African leaders']
                },
                { 
                  name: 'British Council', 
                  desc: 'Working with the British Council to enhance English language teaching, provide international qualifications, and facilitate cultural exchange programs.',
                  logo: '/images/british-council-logo.png',
                  focus: 'Language and Cultural Education',
                  benefits: ['IELTS testing center', 'Teacher training programs', 'UK university partnerships']
                },
                { 
                  name: 'Junior Achievement Nigeria', 
                  desc: 'Collaborating to provide entrepreneurship education that prepares students for the world of work and fosters innovative thinking.',
                  logo: '/images/ja-logo.png',
                  focus: 'Entrepreneurship Education',
                  benefits: ['Business competitions', 'Startup incubation programs', 'Industry mentorship']
                }
              ].map((affiliation, index) => (
                <div key={index} style={{
                  backgroundColor: '#FFFFFF',
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s, box-shadow 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <img
                      src={affiliation.logo}
                      alt={affiliation.name}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'contain',
                        marginRight: '1rem'
                      }}
                    />
                    <div>
                      <h3 style={{
                        fontSize: '1.35rem',
                        fontWeight: '600',
                        color: '#4B5320',
                        marginBottom: '0.5rem'
                      }}>
                        {affiliation.name}
                      </h3>
                      <div style={{
                        backgroundColor: '#FEF3C7',
                        color: '#92400E',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '50px',
                        fontWeight: '500',
                        fontSize: '0.9rem',
                        display: 'inline-block'
                      }}>
                        {affiliation.focus}
                      </div>
                    </div>
                  </div>
                  
                  <p style={{
                    color: '#6B7280',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}>
                    {affiliation.desc}
                  </p>
                  
                  <div>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#4B5320',
                      marginBottom: '1rem'
                    }}>
                      Key Benefits:
                    </h4>
                    <ul style={{
                      paddingLeft: '1.5rem',
                      color: '#6B7280'
                    }}>
                      {affiliation.benefits.map((benefit, i) => (
                        <li key={i} style={{ marginBottom: '0.5rem' }}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Quality Assurance Section */}
        {activeTab === 'quality-assurance' && (
          <section>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#4B5320',
                marginBottom: '1rem'
              }}>
                Our Quality Assurance Process
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#6B7280',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.7'
              }}>
                Maintaining our accredited status requires ongoing commitment to excellence through a rigorous quality assurance framework.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {[
                {
                  title: 'Regular External Reviews',
                  description: 'We undergo comprehensive evaluations every 3-5 years by each accrediting body, with interim reports and visits to ensure continuous compliance.',
                  icon: <FiBookOpen size={32} color="#D4A017" />
                },
                {
                  title: 'Internal Quality Audits',
                  description: 'Our internal quality team conducts biannual audits of all academic departments, facilities, and administrative processes.',
                  icon: <FiAward size={32} color="#D4A017" />
                },
                {
                  title: 'Stakeholder Feedback',
                  description: 'We systematically collect and analyze feedback from students, parents, staff, and alumni to identify areas for improvement.',
                  icon: <FiUsers size={32} color="#D4A017" />
                },
                {
                  title: 'Continuous Improvement',
                  description: 'Findings from audits and feedback are incorporated into our strategic planning and development processes.',
                  icon: <FiGlobe size={32} color="#D4A017" />
                }
              ].map((item, index) => (
                <div key={index} style={{
                  backgroundColor: '#FFFFFF',
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  textAlign: 'center'
                }}>
                  <div style={{
                    marginBottom: '1.5rem',
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.35rem',
                    fontWeight: '600',
                    color: '#4B5320',
                    marginBottom: '1rem'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: '#6B7280',
                    lineHeight: '1.6'
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              backgroundColor: '#F9FAFB',
              padding: '3rem',
              borderRadius: '12px',
              marginBottom: '3rem'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                color: '#4B5320',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                Accreditation Timeline & Process
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                position: 'relative',
                marginLeft: '100px'
              }}>
                <div style={{
                  position: 'absolute',
                  left: '30px',
                  top: '0',
                  bottom: '0',
                  width: '4px',
                  backgroundColor: '#D4A017',
                  borderRadius: '2px'
                }}></div>
                
                {[
                  { step: 'Self-Study', duration: '6-12 months', description: 'Comprehensive internal review against accreditation standards' },
                  { step: 'Documentation', duration: '3-6 months', description: 'Preparation of evidence and supporting documents' },
                  { step: 'Site Visit', duration: '2-5 days', description: 'Evaluation team visit for interviews, observations, and verification' },
                  { step: 'Evaluation Report', duration: '1-3 months', description: 'Review team prepares report with findings and recommendations' },
                  { step: 'Accreditation Decision', duration: '1-2 months', description: 'Accrediting body makes final decision on status' },
                  { step: 'Continuous Improvement', duration: 'Ongoing', description: 'Implementation of recommendations and preparation for next review' }
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: '#4B5320',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      position: 'absolute',
                      left: '-100px'
                    }}>
                      {index + 1}
                    </div>
                    <div style={{
                      backgroundColor: 'white',
                      padding: '1.5rem',
                      borderRadius: '8px',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                      flex: 1
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.5rem'
                      }}>
                        <h4 style={{
                          fontSize: '1.2rem',
                          fontWeight: '600',
                          color: '#4B5320'
                        }}>
                          {item.step}
                        </h4>
                        <span style={{
                          backgroundColor: '#ECFDF5',
                          color: '#065F46',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '50px',
                          fontWeight: '500',
                          fontSize: '0.9rem'
                        }}>
                          {item.duration}
                        </span>
                      </div>
                      <p style={{ color: '#6B7280', margin: 0 }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        {activeTab === 'benefits' && (
          <section>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#4B5320',
                marginBottom: '1rem'
              }}>
                Benefits of Our Accredited Status
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#6B7280',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.7'
              }}>
                Our accredited status provides tangible benefits that enhance the educational experience and future opportunities for our students.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {[
                {
                  title: 'Global Recognition',
                  description: 'Our qualifications are recognized by universities and employers worldwide, providing students with international mobility.'
                },
                {
                  title: 'Quality Assurance',
                  description: 'Regular external validation ensures we maintain the highest standards in curriculum, teaching, and facilities.'
                },
                {
                  title: 'Enhanced Opportunities',
                  description: 'Students benefit from exchange programs, international competitions, and unique learning experiences.'
                },
                {
                  title: 'University Admissions',
                  description: 'Graduates receive preferred admission consideration at partner universities worldwide.'
                },
                {
                  title: 'Professional Development',
                  description: 'Our teachers receive ongoing training from international experts, enhancing classroom instruction.'
                },
                {
                  title: 'Resource Access',
                  description: 'We gain access to cutting-edge educational resources, research, and best practices from global networks.'
                }
              ].map((item, index) => (
                <div key={index} style={{
                  backgroundColor: '#FFFFFF',
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  borderLeft: '4px solid #D4A017'
                }}>
                  <h3 style={{
                    fontSize: '1.35rem',
                    fontWeight: '600',
                    color: '#4B5320',
                    marginBottom: '1rem'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: '#6B7280',
                    lineHeight: '1.6'
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              backgroundColor: '#4B5320',
              color: 'white',
              padding: '3rem',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '600',
                marginBottom: '1.5rem'
              }}>
                Verify Our Accreditation Status
              </h3>
              <p style={{
                fontSize: '1.2rem',
                maxWidth: '800px',
                margin: '0 auto 2rem',
                lineHeight: '1.7'
              }}>
                Parents and students can directly verify our accreditation status with the respective organizations through the links below.
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                {[
                  { name: 'WAEC Verification', url: '#' },
                  { name: 'Ministry of Education', url: '#' },
                  { name: 'Cambridge International', url: '#' },
                  { name: 'IB World Schools', url: '#' }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: '#D4A017',
                      color: '#1F2937',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#b58900';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#D4A017';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {item.name} <FiExternalLink size={16} />
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          backgroundColor: '#D4A017',
          borderRadius: '12px',
          color: '#1F2937',
          marginTop: '4rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            Join Our Accredited Learning Community
          </h2>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            lineHeight: '1.7'
          }}>
            Experience education validated by the worlds leading accreditation bodies and prepare for global success.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <Link
              href="/admissions/apply"
              style={{
                backgroundColor: '#1F2937',
                color: '#FFFFFF',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease'
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
              Apply for Admission
            </Link>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: 'transparent',
                color: '#1F2937',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                border: '2px solid #1F2937',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1F2937';
                e.target.style.color = '#FFFFFF';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#1F2937';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Schedule a Tour
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}