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
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }

    .prev:hover,
    .next:hover {
      box-shadow: 0px 0px 5px var(--gray-1);
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
