'use client';

import React, { useState } from 'react';
import {
  ClipboardList,
  AlertTriangle,
  FileText,
  Layers,
  Search,
  CheckSquare,
  Warehouse,
  HardHat,
  Settings,
  ChevronDown,
  Box,
  Info,
  Check,
  X,
  Menu,
  X as CloseIcon
} from 'lucide-react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [openFooter, setOpenFooter] = useState(null);

  // Mock UI State
  const [mockChecklist, setMockChecklist] = useState([
    { id: 1, label: 'Forks and mast', checked: true, status: 'pass' },
    { id: 2, label: 'Tires and wheels', checked: true, status: 'pass' },
    { id: 3, label: 'Brakes', checked: true, status: 'pass' },
    { id: 4, label: 'Steering', checked: true, status: 'pass' },
    { id: 5, label: 'Warning devices', checked: true, status: 'warn' },
    { id: 6, label: 'Lights', checked: true, status: 'pass' },
  ]);

  const toggleMockCheck = (id) => {
    setMockChecklist(prev => prev.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const setMockStatus = (id, status) => {
    setMockChecklist(prev => prev.map(item => 
      item.id === id ? { ...item, status } : item
    ));
  };

  const completedCount = mockChecklist.filter(i => i.checked).length;

  const faqs = [
    { question: 'What should be checked during a forklift inspection?', answer: 'Checklists should be created during a forklift inspection and often include inspecting the breaks, steering, tires, warning devices, and lights.' },
    { question: 'How often should a forklift be inspected?', answer: 'Forklifts should generally be inspected daily before each shift.' },
    { question: 'Can this checklist be used for daily inspections?', answer: 'Yes, this checklist is designed specifically for daily and pre-shift inspections.' },
    { question: 'What should I do if I find a defect?', answer: 'Report the defect immediately and tag the equipment out of service until repaired.' },
    { question: 'Can I customize the checklist?', answer: 'Yes, InspectPro allows you to customize the fields to match your specific equipment.' },
  ];

  return (
    <div className="page-wrapper">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <Box color="#0055d2" size={26} strokeWidth={2.5} />
            InspectPro
          </div>
          <nav className="nav-desktop">
            <a href="#" className="nav-link" style={{color: 'var(--primary-blue)'}}>Products</a>
            <a href="#" className="nav-link">Solutions</a>
            <a href="#" className="nav-link" style={{display: 'flex', alignItems: 'center', gap: '4px'}}>Resources <ChevronDown size={14}/></a>
            <a href="#" className="nav-link">Pricing</a>
          </nav>
          <div className="header-actions">
            <a href="#" className="nav-link">Login</a>
            <button className="btn-primary">Get Started</button>
          </div>
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <CloseIcon size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Nav Dropdown */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#" className="nav-link">Products</a>
          <a href="#" className="nav-link">Solutions</a>
          <a href="#" className="nav-link">Resources</a>
          <a href="#" className="nav-link">Pricing</a>
          <a href="#" className="nav-link">Login</a>
          <button className="btn-primary" style={{marginTop: '0.5rem'}}>Get Started</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-tag">Forklift Safety</div>
            <h1>Forklift Inspection Checklist</h1>
            <p>This checklist helps your teams perform consistent inspections and identify issues before their equipment is used.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Get the Checklist</button>
              <button className="btn-secondary">See What's Included</button>
            </div>
            <div className="hero-subtext">Ready-to-use checklist for daily forklift inspections</div>
          </div>
          <div className="hero-visual">
            <div className="mock-ui">
              <h3>Inspection Checklist</h3>
              
              {mockChecklist.map((item) => (
                <div className="mock-row" key={item.id}>
                  <div className="mock-label" onClick={() => toggleMockCheck(item.id)}>
                    <div className={`mock-checkbox ${item.checked ? 'checked' : ''}`}>
                      {item.checked && <Check size={12} strokeWidth={3} />}
                    </div>
                    {item.label}
                  </div>
                  <div className="mock-status">
                    <div 
                      className={`mock-circle pass ${item.status === 'pass' ? 'active' : ''}`}
                      onClick={() => setMockStatus(item.id, 'pass')}
                    >{item.status === 'pass' ? <Check size={14} strokeWidth={3} /> : <Check size={14} strokeWidth={2} />}</div>
                    <div 
                      className={`mock-circle warn ${item.status === 'warn' ? 'active' : ''}`}
                      onClick={() => setMockStatus(item.id, 'warn')}
                    >!</div>
                    <div 
                      className={`mock-circle na ${item.status === 'na' ? 'active' : ''}`}
                      onClick={() => setMockStatus(item.id, 'na')}
                    >NA</div>
                  </div>
                </div>
              ))}
              
              <div className="mock-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: `${(completedCount / mockChecklist.length) * 100}%`}}></div>
                </div>
                <div className="progress-text">{completedCount}/{mockChecklist.length} completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="logos">
        <div className="container">
          <h3>Trusted by teams that need consistent inspections</h3>
          <div className="logos-flex">
            <div className="logo-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 3.5l7.5 15h-15L12 5.5z"/></svg> Apex Logistics
            </div>
            <div className="logo-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg> Sterling Mfg
            </div>
            <div className="logo-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M4 10h3v10H4zM10 4h3v16h-3zM16 14h3v6h-3z"/></svg> BuildRight
            </div>
            <div className="logo-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg> Global Warehousing
            </div>
            <div className="logo-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Prime Distribution
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container">
          <div className="info-text">
            <h2>What is a Forklift Inspection Checklist?</h2>
            <p>Forklift inspection checklists helps teams perform consistent safety and maintenance inspection for safety and compliance.</p>
            <p>Forklift inspection can benefit correct equipment safety and compliance with regulatory requirements.</p>
          </div>
          <div className="info-callout">
            <Info size={24} color="var(--primary-blue)" style={{flexShrink: 0, marginTop: '2px'}} />
            <p>Key importance are outcomes of compliance being regulatory requirements are met to <strong>regulatory requirements.</strong></p>
          </div>
        </div>
      </section>

      {/* Checklist Details Section */}
      <section className="checklist-details">
        <div className="container">
          <h2>What's included in the checklist?</h2>
          <div className="checklist-table">
            <div className="checklist-row">
              <div className="checklist-item-info">
                <input type="checkbox" defaultChecked />
                <div>
                  <h4>Forks and mast</h4>
                  <p>Description or sensor of Forks and mast.</p>
                </div>
              </div>
              <div className="checklist-item-status">
                <button className="status-btn active pass"><Check size={14} strokeWidth={3} /> Pass</button>
                <button className="status-btn"><X size={14} strokeWidth={2} /> Fail</button>
                <button className="status-btn">NA <ChevronDown size={14} /></button>
              </div>
              <div className="checklist-item-note">
                <div style={{fontSize: '0.8rem', marginBottom: '0.25rem', fontWeight: 600, color: 'var(--text-main)'}}>Note</div>
                <input type="text" className="note-input" placeholder="Add an open note (optional)" />
              </div>
            </div>
            
            <div className="checklist-row">
              <div className="checklist-item-info">
                <input type="checkbox" defaultChecked />
                <div>
                  <h4>Tires and wheels</h4>
                  <p>Description or inspection of Tires and wheels.</p>
                </div>
              </div>
              <div className="checklist-item-status">
                <button className="status-btn"><Check size={14} strokeWidth={2} /> Pass</button>
                <button className="status-btn active warn"><AlertTriangle size={14} strokeWidth={3} /> Fail</button>
                <button className="status-btn">NA <ChevronDown size={14} /></button>
              </div>
              <div className="checklist-item-note">
                <div style={{fontSize: '0.8rem', marginBottom: '0.25rem', fontWeight: 600, color: 'var(--text-main)'}}>Note</div>
                <input type="text" className="note-input" placeholder="Use note here..." />
              </div>
            </div>

            <div className="checklist-row">
              <div className="checklist-item-info">
                <input type="checkbox" defaultChecked />
                <div>
                  <h4>Brakes</h4>
                  <p>Description or inspections and areas brakes.</p>
                </div>
              </div>
              <div className="checklist-item-status">
                <button className="status-btn active pass"><Check size={14} strokeWidth={3} /> Pass</button>
                <button className="status-btn"><X size={14} strokeWidth={2} /> Fail</button>
                <button className="status-btn">NA <ChevronDown size={14} /></button>
              </div>
              <div className="checklist-item-note">
                <div style={{fontSize: '0.8rem', marginBottom: '0.25rem', fontWeight: 600, color: 'var(--text-main)'}}>Note (optional)</div>
                <div className="note-alert"><AlertTriangle size={14} /> Need maintenance</div>
              </div>
            </div>
            
            <div className="checklist-row">
              <div className="checklist-item-info">
                <input type="checkbox" defaultChecked />
                <div>
                  <h4>Steering</h4>
                  <p>Description or steering mechanics are steering.</p>
                </div>
              </div>
              <div className="checklist-item-status">
                <button className="status-btn active pass"><Check size={14} strokeWidth={3} /> Pass</button>
                <button className="status-btn"><X size={14} strokeWidth={2} /> Fail</button>
                <button className="status-btn">NA <ChevronDown size={14} /></button>
              </div>
              <div className="checklist-item-note">
                <div style={{fontSize: '0.8rem', marginBottom: '0.25rem', fontWeight: 600, color: 'var(--text-main)'}}>Note</div>
                 <input type="text" className="note-input" placeholder="Use note here..." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Make every forklift inspection consistent</h2>
          <p>Make sure forklift assessment consistent and<br/>inspections procedures for the equipment operators.</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <ClipboardList size={24} color="var(--primary-blue)" />
              </div>
              <h3>Standardize inspections</h3>
              <p>Standardize inspections consistent. Inspections, operations, and equipment.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <AlertTriangle size={24} color="var(--primary-blue)" />
              </div>
              <h3>Identify issues early</h3>
              <p>Identify issues early to measure and consistent, operators expecting standards.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FileText size={24} color="var(--primary-blue)" />
              </div>
              <h3>Keep inspection records organized</h3>
              <p>Keep inspection records organized, and inspection records organized.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Layers size={24} color="var(--primary-blue)" />
              </div>
              <h3>Give teams a simple process to follow</h3>
              <p>Give teams a simple process to follow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <FileText size={40} className="step-icon" />
              <h3>01 —</h3>
              <h4>Choose your checklist</h4>
              <p>Choose your checklist to start 01 — Choose your checklist.</p>
            </div>
            <div className="step-card">
              <Search size={40} className="step-icon" />
              <h3>02 —</h3>
              <h4>Complete the inspection</h4>
              <p>Complete the inspection the inspector and complete the inspection.</p>
            </div>
            <div className="step-card">
              <CheckSquare size={40} className="step-icon" />
              <h3>03 —</h3>
              <h4>Record and act on findings</h4>
              <p>Record the process and consent and asset — record and act on findings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Built For Teams */}
      <section className="built-for">
        <div className="container">
          <h2>Built for teams that inspect equipment every day</h2>
          <div className="teams-grid">
            <div className="team-card">
              <div className="team-icon-wrapper">
                <Warehouse size={24} color="var(--primary-blue)" />
              </div>
              <h3>Warehouse operations</h3>
              <p>Warehouse operations in warehouse operations and low-attention operations in warehouse operations.</p>
            </div>
            <div className="team-card">
              <div className="team-icon-wrapper">
                <HardHat size={24} color="var(--primary-blue)" />
              </div>
              <h3>Construction sites</h3>
              <p>Construction sites equipment and construction sites in a manufacturing facilities.</p>
            </div>
            <div className="team-card">
              <div className="team-icon-wrapper">
                <Settings size={24} color="var(--primary-blue)" />
              </div>
              <h3>Manufacturing facilities</h3>
              <p>Manufacturing facilities are commercial facilities and solutions for manufacturing facilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container" style={{maxWidth: '800px'}}>
          <h2>FAQ</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={index}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                  {faq.question}
                  <ChevronDown className="faq-icon" size={18} />
                </button>
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to simplify your forklift inspections?</h2>
          <p>Start with a structured checklist your team can use consistently.</p>
          <div className="cta-buttons">
            <button className="btn-white">Get the Checklist</button>
            <button className="btn-outline-white">Talk to our team</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col" style={{flex: 2}}>
              <div className="footer-logo">
                <Box color="var(--primary-blue)" size={24} strokeWidth={2.5} />
                InspectPro
              </div>
              <p className="footer-desc">InspectPro is a frequent company specialized in equipment inspections and National SaaS company.</p>
            </div>
            
            {/* Desktop & Mobile Dropdown Columns */}
            <div className={`footer-col links-col ${openFooter === 'product' ? 'open' : ''}`}>
              <button className="footer-mobile-toggle" onClick={() => setOpenFooter(openFooter === 'product' ? null : 'product')}>
                Product <ChevronDown size={16} />
              </button>
              <h4 className="desktop-only">Product</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Templates</a></li>
                <li><a href="#">Integrations</a></li>
              </ul>
            </div>
            
            <div className={`footer-col links-col ${openFooter === 'solutions' ? 'open' : ''}`}>
              <button className="footer-mobile-toggle" onClick={() => setOpenFooter(openFooter === 'solutions' ? null : 'solutions')}>
                Solutions <ChevronDown size={16} />
              </button>
              <h4 className="desktop-only">Solutions</h4>
              <ul>
                <li><a href="#">By Industry</a></li>
                <li><a href="#">By Function</a></li>
              </ul>
            </div>
            
            <div className={`footer-col links-col ${openFooter === 'resources' ? 'open' : ''}`}>
              <button className="footer-mobile-toggle" onClick={() => setOpenFooter(openFooter === 'resources' ? null : 'resources')}>
                Resources <ChevronDown size={16} />
              </button>
              <h4 className="desktop-only">Resources</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">API</a></li>
              </ul>
            </div>
            
            <div className={`footer-col links-col ${openFooter === 'company' ? 'open' : ''}`}>
              <button className="footer-mobile-toggle" onClick={() => setOpenFooter(openFooter === 'company' ? null : 'company')}>
                Company <ChevronDown size={16} />
              </button>
              <h4 className="desktop-only">Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            
          </div>
          <div className="footer-bottom">
            <div>InspectPro • Solutions • Templates</div>
            <div>© Copyright 2023</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
