import React from 'react';
import styled from 'styled-components';
import ResumeFile from '../assets/resume/Sayali_Martal_Resume.pdf';

const ResumeStyle = styled.div`
  padding: 10rem 0 0 0;
  iframe {
    width: 100%;
    height: 1000px;
  }
`;

export default function Resume() {
  return (
    <>
      <ResumeStyle>
        <iframe
          src={ResumeFile}
          title="Sayali Martal Resume"
          frameBorder="0"
          scrolling="auto"
        />
      </ResumeStyle>
    </>
  );
}
