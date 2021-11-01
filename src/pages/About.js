import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
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

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Sayali Martal</span>
              </p>
              <h2 className="about__heading">A fullstack Web developer</h2>
              <div className="about__info">
                <PText>
                  Performance-driven and motivated Full Stack Developer with 4+
                  years of extensive experience in participating in all phases
                  of software development.
                  <br /> <br />
                  Adept at managing and supervising other employees and
                  determined to achieve extraordinary results. Possess a strong
                  attention to detail, well-developed time management skills,
                  and ability to complete all projects within schedule and in a
                  timely manner.
                  <br /> <br />
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>

          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>
              <AboutInfoItem
                title="BackEnd"
                items={['Python( Flask )', 'GoLang', 'C / CPP']}
              />
              <AboutInfoItem
                title="FrontEnd"
                items={[
                  'Angular JS 1.0X',
                  'D3 JS',
                  'HTML',
                  'JavaScript',
                  'CSS',
                  'Bootstrap',
                  'JQuery',
                  'REACT',
                ]}
              />
              <AboutInfoItem title="Database" items={['SQL', 'MongoDB']} />
              <AboutInfoItem
                title="Version Ctrl"
                items={['Git', 'Bitbucket', 'Sourcetree', 'Gitlab']}
              />
              <AboutInfoItem
                title="Servers"
                items={['Apache', 'AWS', 'Netlify']}
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
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
                title="School"
                items={['Yojana Vidyalaya, Mumbai (90%)']}
              />
              <AboutInfoItem
                title="High School"
                items={[
                  'S. S. & L. S. Patkar College of Arts & Science, Mumbai (89%)',
                ]}
              />
              <AboutInfoItem
                title="Degree"
                items={[
                  'Rajiv Gandhi Institute of Technology, Mumbai (8.33 CGPA)',
                ]}
              />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
