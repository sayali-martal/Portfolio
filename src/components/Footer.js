import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1,
  .footer__col2,
  .footer__col3 {
    flex: 1;
    text-align: center;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
      max-width: none;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
            ]}
          />
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: 'sayalimartal95@yahoo.com',
                path: 'mailto:sayalimartal95@yahoo.com',
              },
              {
                title: 'Borivali, Mumbai, India',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/sayali-martal-57578a121/',
              },
              {
                title: 'Github',
                path: 'https://github.com/sayali-martal',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Sayali Martal | Designed By{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ashutosh-shinde-102905163/"
            >
              Ashutosh Shinde
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
