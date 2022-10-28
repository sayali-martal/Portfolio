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

export default function Skills() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>
              <AboutInfoItem
                title="BackEnd"
                items={[
                  'Python',
                  'Sequelize',
                  'Express JS',
                  'C / CPP',
                  'GoLang',
                ]}
              />
              <AboutInfoItem
                title="FrontEnd"
                items={[
                  'React JS',
                  'Angular JS 1.0X',
                  'D3 JS',
                  'HTML',
                  'TypeScript',
                  'JavaScript',
                  'CSS',
                  'Bootstrap',
                  'JQuery',
                ]}
              />
              <AboutInfoItem
                title="Frameworks"
                items={['Flask', 'NPM', 'Node']}
              />
              <AboutInfoItem
                title="Servers"
                items={['Apache', 'AWS', 'Netlify', 'PM2']}
              />
              <AboutInfoItem
                title="Servers"
                items={['Apache', 'AWS', 'Netlify', 'PM2']}
              />
              <AboutInfoItem
                title="Version Ctrl"
                items={['Github', 'Bitbucket', 'Sourcetree', 'Gitlab']}
              />
              <AboutInfoItem
                title="Data Analysis"
                items={['Tableau', 'Python Machine Learning', 'Rasa']}
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

            <div className="about__info__item">
              <h1 className="about__info__heading">Familier Technologies</h1>
              <AboutInfoItem
                title="Machine Learning"
                items={[
                  'Implemented basic algorithms using python libraries like pandas, numpy, sklearn, etc.',
                ]}
              />
              <AboutInfoItem
                title="Web 3.0"
                items={[
                  'Written smart contracts in solidy as well as python to perform transactions on the ethereum blockchain using metamask.',
                ]}
              />
              <AboutInfoItem
                title="Quantum Computing"
                items={[
                  'Studied basic concept of quantum computing like qubits, quantum states, gates, etc. ',
                ]}
              />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
