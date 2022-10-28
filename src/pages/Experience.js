import React from 'react';
import styled from 'styled-components';
import ExperiencesSection from '../components/ExperiencesSection';
import AboutInfoItem from '../components/AboutInfoItem';

const ExperiencePageStyles = styled.div`
  padding: 0 0 10rem 0;
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-top: 15rem;
    margin-bottom: 10rem;
    text-align: center;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function Experience() {
  return (
    <>
      <ExperiencePageStyles>
        <div className="container">
          <div className="about__info__items">
            <ExperiencesSection />
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
                title="Degree"
                items={[
                  'Rajiv Gandhi Institute of Technology, Mumbai (8.33 CGPA)',
                ]}
                alignItems="center"
              />
              <AboutInfoItem
                title="High School"
                items={[
                  'S. S. & L. S. Patkar College of Arts & Science, Mumbai (89%)',
                ]}
                alignItems="center"
              />
              <AboutInfoItem
                title="School"
                items={['Yojana Vidyalaya, Mumbai (90%)']}
                alignItems="center"
              />
            </div>
          </div>
        </div>
      </ExperiencePageStyles>
    </>
  );
}
