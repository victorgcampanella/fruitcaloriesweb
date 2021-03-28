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
    font-size: 40px;
  }

  @media (max-width: 425px) {
    font-size: 35px;
  }

  @media (max-width: 320px) {
    font-size: 30px;
  }
`;

export const ContainerCards = styled.div`
  a {
    background: #4a8;
    align-items: center;
    border-radius: ${resLayout(20)};
    width: 100%;
    max-height: ${resLayout(350)};
    padding: ${resLayout(24)};
    text-decoration: none;
    transition: transform 0.2s;

    display: flex;

    & + a {
      margin-top: ${resLayout(16)};
      
      @media (max-width: 768px) {
        margin-top: 20px;
      }
    }

    &:hover {
      transform: translateY(${resLayout(-10)})
    }

    @media (max-width: 768px) {
      max-height: 50%;
    }

    @media (max-width: 425px) {
      max-height: 75%;
    }
  }
`;

export const ContainerFruit = styled.div`
  align-items: center;
  display: block;
  width: 100%;
  margin-right: ${resLayout(50)};

  @media (max-width: 320px) {
    margin-right: 5px;
  }
`;

export const Name = styled.h1`
  color: #fff;
  font-size: ${resLayout(36)};
  margin-bottom: ${resLayout(10)};

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 425px) {
    font-size: 24px;
  }
`;

export const ContainerInfos = styled.div`
`;

export const Infos = styled.h1`
 font-weight: bold;
 font-size: ${resLayout(24)};
 color: #5a5a5a;

 @media (max-width: 768px) {
    font-size: 24px;
  }

 @media (max-width: 425px) {
    font-size: 16px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

export const Image = styled.img`
  width: 30%;
  height: 100%;
  border-radius: ${resLayout(20)};

  @media (max-width: 768px) {
    height: 100%;
    width: 35%;
  }

  @media (max-width: 425px) {
    height: 100%;
    width: 40%;
  }

  @media (max-width: 375px) {
    height: 100%;
    width: 45%;
  }

  @media (max-width: 320px) {
    height: 100%;
    width: 50%;
  }
`;