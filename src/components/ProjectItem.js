import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  height: -webkit-fill-available;
  :hover {
    box-shadow: 0px 0px 5px var(--white);
  }
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    // border: 2px solid var(--white);
    img {
      height: 100%;
    }
    // :hover {
    //   box-shadow: 0px 0px 5px var(--gray-1);
    // }
  }
  .projectItem__info {
    margin-top: 1rem;
    // background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  // .projectItem__info:hover {
  //   box-shadow: 0px 0px 5px var(--gray-1);
  // }
  .projectItem__title {
    font-size: 2.5rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  link = '#',
}) {
  return (
    <a target="_blank" rel="noreferrer" href={link}>
      <ProjectItemStyles>
        <Link to="/projects" className="projectItem__img">
          <img src={img} alt="project img" />
        </Link>
        <div className="projectItem__info">
          <h3 className="projectItem__title">
            {/* <a target="_blank" rel="noreferrer" href={link}> */}
            {title}
            {/* </a> */}
          </h3>
          <p className="projectItem__desc">{desc}</p>
        </div>
      </ProjectItemStyles>
    </a>
  );
}
