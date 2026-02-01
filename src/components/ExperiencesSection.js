import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import PText from './PText';
import SectionTitle from './SectionTitle';
import experiences from '../assets/data/experiences';

const ExperienceSectionStyles = styled.div`
  overflow-x: hidden;
  text-align: center;
  .experience__wrapper {
    position: relative;
  }
  .experience__info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
  .experience__desc {
    .para {
      text-align: left;
      margin-top: 1rem;
      display: list-item;
      list-style-type: disc;
      list-style-position: outside;
      margin-left: 1rem;
    }
  }
  .experience__name {
    font-family: 'Montserrat Bold';
    font-size: 2.2rem;
  }
  .experience__title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
    margin-bottom: 3rem;
  }
  .arrows {
    margin-top: 2rem;
    margin-bottom: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      // background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: rgba(255, 255, 255, 0.5) 4px 4px 6px 0px,
        rgba(116, 125, 136, 0.2) -4px -4px 6px 0px,
        rgba(255, 255, 255, 0.5) -4px -4px 6px 0px inset,
        rgba(116, 125, 136, 0.3) 4px 4px 6px 0px inset;
    }
    .prev:hover,
    .next:hover {
      // box-shadow: 0px 0px 5px var(--gray-1);
      box-shadow: 0 0 12px rgba(95, 158, 160, 0.6),
        0 0 32px rgba(127, 179, 200, 0.4);
    }
    .prev:hover:after,
    .next:hover:after {
      // box-shadow: 0px 0px 5px var(--gray-1);
      -webkit-transform: scale(2) rotate(180deg);
      transform: scale(2) rotate(180deg);
      box-shadow: 0 0 12px rgba(95, 158, 160, 0.6),
        0 0 32px rgba(127, 179, 200, 0.4);
    }
  }
  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
    z-index: 1;
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: transform, opacity;
    z-index: 1;
  }
  .fade-exit {
    transform: scale(1);
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 200ms ease-in;
    transition-property: transform, opacity;
  }
`;

export default function ExperiencesSection() {
  const [activeIndex, setActiveIndex] = useState(experiences.length - 1);
  const activeSlide = experiences[activeIndex];

  function handleNext() {
    if (activeIndex === 0) {
      setActiveIndex(experiences.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }
  function handlePrev() {
    if (activeIndex >= experiences.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }

  return (
    <ExperienceSectionStyles>
      <div className="container">
        <SectionTitle
          subheading="Take a look at companies and client's I've worked for"
          heading="Experiences"
        />
        <div className="experience__wrapper">
          <SwitchTransition component={null}>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="experience__info">
                <h2 className="experience__name">{activeSlide.company}</h2>
                <p className="experience__title">
                  {activeSlide.period} | {activeSlide.designation} <br />{' '}
                  Clients: {activeSlide.client}
                </p>
                <div className="experience__desc">
                  {activeSlide.desc.map((item, index) => (
                    <div className="experience__desc__item" key={index}>
                      <PText>{item}</PText>
                    </div>
                  ))}
                </div>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>

        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </div>
        </div>
      </div>
    </ExperienceSectionStyles>
  );
}
