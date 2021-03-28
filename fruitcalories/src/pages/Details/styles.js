import styled from 'styled-components'

import resLayout from "../../utils/resLayout";

export const Title = styled.h1`
  display: flex;
  font-size: ${resLayout(48)};
  color: #3a3a3a;
  justify-content: center;
  align-items: center;
  margin-bottom: ${resLayout(20)};

  @media (max-width: 768px) {
    font-size: 45px;
  }

  @media (max-width: 375px) {
    font-size: 35px;
  }
`;

export const Card = styled.div`
  background-color: #378C52;
  width: 100%;
  height: max-content;
  border-radius: ${resLayout(20)};
  padding: ${resLayout(20)};
`;

export const ContainerFruit = styled.div`
  align-items: center;
  display: block;
  border-radius: ${resLayout(20)};
  margin-top: ${resLayout(20)};
  padding: ${resLayout(20)};
  background-color: #CEF0D9;
`;

export const Name = styled.h1`
  color: #081A0E;
  font-size: ${resLayout(40)};
  margin-bottom: ${resLayout(15)};

  @media (min-width: 2560px) {
    font-size: 60px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
  }

  @media (max-width: 375px) {
    font-size: 30px;
  }
`;

export const ContainerInfos = styled.div`
  background-color: #B4EEC6;
  padding: ${resLayout(20)};
  border-radius: ${resLayout(20)};
`;

export const Infos = styled.h1`
 font-weight: bold;
 font-size: ${resLayout(24)};
 color: #5a5a5a;

 @media (min-width: 2560px) {
    font-size: 36px;
  }

 @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 375px) {
    font-size: 25px;
  }

  @media (max-width: 320px) {
    font-size: 24px;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 50%;
  height: 50%;
  border-radius: ${resLayout(20)};

  @media (min-width: 2560px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 65%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;