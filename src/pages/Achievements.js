import React from 'react';
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutInfoItem';

const AboutPageStyles = styled.div`
  padding: 0 0 10rem 0;
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
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

export default function Achievements() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Achievements</h1>
              <AboutInfoItem
                title="TMT All Hands Award"
                items={[
                  'Recognized for exceptional efforts in preparing and presenting a client demo, successfully delivering tasks within a tight turnaround time.',
                ]}
              />
              <AboutInfoItem
                title="Client and Organization-Wide Recognitions"
                items={[
                  'Received multiple client accolades and Fractal-wide recognitions during town hall meetings for contributions to project success.',
                ]}
              />
              <AboutInfoItem
                title="Star Performer Award (Jul – Sept 2022)"
                items={[
                  'Honored as the Star Performer at Fractal Analytics for outstanding performance and dedication.',
                ]}
              />
            </div>

            <div className="about__info__item">
              <h1 className="about__info__heading">Certifications</h1>
              <AboutInfoItem
                title="2021"
                items={[
                  'D3Js Basics, Cousera',
                  'Introduction to Big Data by University of California San Diego, Cousera',
                ]}
              />
              <AboutInfoItem
                title="2019"
                items={[
                  'Machine Learning A-Z™: Hands-On Python & R in Data Science, Udemy',
                ]}
              />
              <AboutInfoItem
                title="2018"
                items={["CS50's Introduction to Computer Science, EDX"]}
              />
              <AboutInfoItem
                title="2017"
                items={[
                  'Oracle Database 11g: Advanced PL/SQL,  Caliber Infotech Solution',
                ]}
              />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
