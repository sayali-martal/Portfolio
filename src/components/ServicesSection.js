import React from 'react';
import styled from 'styled-components';
import { LiaNetworkWiredSolid, LiaMixcloud } from 'react-icons/lia';
import { SiAltiumdesigner, SiSpringsecurity } from 'react-icons/si';
import { GiChart } from 'react-icons/gi';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 5rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle
          subheading="What I bring to the table"
          heading="Expertise"
        />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<SiAltiumdesigner style={{ fill: 'var(--white)' }} />}
            title="Frontend Architecture"
            desc="Design and build scalable, high-performance frontend applications using React and modern UI frameworks with a strong focus on UX and maintainability."
          />

          <ServicesSectionItem
            icon={<LiaNetworkWiredSolid style={{ fill: 'var(--white)' }} />}
            title="Backend Engineering & Automation"
            desc="Develop reliable Python backends and automation workflows to streamline processes, reduce manual effort, and improve system stability."
          />

          <ServicesSectionItem
            icon={<GiChart style={{ fill: 'var(--white)' }} />}
            title="Data Visualization & Analytics"
            desc="Create insightful dashboards using D3.js and Recharts that translate complex data into clear, actionable business insights."
          />

          <ServicesSectionItem
            icon={<SiSpringsecurity style={{ fill: 'var(--white)' }} />}
            title="API Design, Security & CI/CD"
            desc="Architect secure, scalable REST APIs and implement CI/CD pipelines to ensure reliable deployments and production-grade systems."
          />

          <ServicesSectionItem
            icon={<LiaMixcloud style={{ fill: 'var(--white)' }} />}
            title="Databases & Cloud Infrastructure"
            desc="Optimize databases and lead server migrations across cloud and on-prem environments, ensuring performance, security, and minimal downtime."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
