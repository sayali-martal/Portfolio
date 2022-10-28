import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const AboutItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  justify-content: flex-start;
  position: relative;
  margin-top: 3rem;
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    flex-flow: wrap;
    gap: 0.5rem 1.5rem;
    position: initial;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
    .para {
      max-width: inherit;
    }
  }
  @media only screen and (max-width: 768px) {
    gap: 1rem;
    .items {
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem({
  title = 'Title',
  items = ['HTML', 'CSS'],
  alignItems = 'flex-start',
}) {
  return (
    <AboutItemStyles alignItems={alignItems}>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
