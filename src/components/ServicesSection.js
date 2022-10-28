import React from 'react';
import {
  MdDesktopMac,
  MdCode,
  MdShowChart,
  MdViewColumn,
  MdHttps,
} from 'react-icons/md';
import styled from 'styled-components';
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
        <SectionTitle subheading="What I will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="UI design"
            desc="I can develope any UI designed by UX team."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Python scripts"
            desc="I can create python scripts for automating tasks."
          />
          <ServicesSectionItem
            icon={<MdShowChart />}
            title="Charts"
            desc="Have extensive experience in using D3 JS and recharts."
          />
          <ServicesSectionItem
            icon={<MdHttps />}
            title="Python API"
            desc="Can design and develope rest APis using python."
          />
          <ServicesSectionItem
            icon={<MdViewColumn />}
            title="Database"
            desc="Optimise and create SQL queries"
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
