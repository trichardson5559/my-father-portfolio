import React from 'react';
import './Services.scss';

const Services = () => {
  const services = [
    'Bookkeeping',
    'Financial Accounting',
    'Financial Advisory',
    'Tax Preparation',
    'Business Consulting',
    'Real Estate',
    'Accounting',
    'Budget Planning',
    'Payroll Management',
    'Auditing',
  ]; // Add more services/skills from his LinkedIn profile

  return (
    <section className="services-page">
      <div className="services-container">
        <h1>Services</h1>
        <div className="services-list">
          {services.map((service, index) => (
            <span key={index} className="service-item">
              {service}
            </span>
          ))}
        </div>
        <div className="button-container">
          <a
            href="https://www.linkedin.com/in/dr-keith-richardson-cpa-us-army-vet-34923924/opportunities/services/request-proposal/?servicePageVanityName=a800a0319524926046"
            target="_blank"
            rel="noopener noreferrer"
            className="request-button"
          >
            Request a Service
          </a>
          <a
            href="https://6rbusiness.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="request-button"
          >
            Visit 6R Business Consulting
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
