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

   @media (max-width: 768px) {
    background: #BEEDCD;
   }
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
    padding: ${resLayout(30)} ${resLayout(10)};

    @media (min-width: 2560px) {
      max-width: 1440px;
      padding: 30px 0px;
    }

    @media (max-width: 768px) {
      max-width: 700px;
      padding: 30px 0px;
    }

    @media (max-width: 425px) {
      padding: 30px 20px;
    }
  }

  button {
    cursor: pointer;
  }
`;