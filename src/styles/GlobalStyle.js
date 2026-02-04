import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    // --white: #6B7B4E;
    // --gray-1: #4A4A4A;
    // --gray-2: #2B2B2B;
    // --dark-bg: #E2DED9;
    // --deep-dark: #B8B1AA;
    // --black: #141414;
        --white: cadetblue;
    --gray-1: #4A4A4A;
    --gray-2: #2B2B2B;
    --dark-bg: aliceblue;
    --deep-dark: powderblue;
    --black: #141414;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  body{
  background: linear-gradient(135deg, #f0f8ff 0%, #dceaf4 35%, #b3d3df 55%, #e8f3f7 80%), radial-gradient(circle at 20% 20%, rgba(127, 179, 200, 0.18), transparent 55%);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    // object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1500px;
    width: 90%;
    margin: 0 auto;
  }
  .fwTTDT {
    max-width: inherit;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;
