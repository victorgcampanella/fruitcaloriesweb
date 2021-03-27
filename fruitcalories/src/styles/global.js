import {createGlobalStyle} from 'styled-components';

import fruitsBackground from '../assets/fruits_back.png'
import resLayout from "../utils/resLayout";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #BEEDCD;
    background-image: url(${fruitsBackground});
    background-repeat: round;
    background-attachment: fixed;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Roboto, sans-serif;
    font-size: ${resLayout(16)} Roboto, sans-serif;

    @media (min-width: 768px) {
      font-size: ${resLayout(18)};
    }

    @media (min-width: 1024px) {
      font-size: ${resLayout(16)};
    }
  }

  #root {
    max-width: ${resLayout(960)};
    margin: ${resLayout(0)} auto;
    padding: ${resLayout(40)} ${resLayout(20)};
  }

  button {
    cursor: pointer;
  }
`;