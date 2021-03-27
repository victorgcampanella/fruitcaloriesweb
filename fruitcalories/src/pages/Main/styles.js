import styled from 'styled-components'

import resLayout from "../../utils/resLayout";

export const Title = styled.h1`
  display: flex;
  font-size: ${resLayout(48)};
  color: #3a3a3a;
  justify-content: center;
  align-items: center;
  margin-bottom: ${resLayout(20)};
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
    }

    &:hover {
      transform: translateY(${resLayout(-10)})
    }
  }
`;

export const ContainerFruit = styled.div`
  align-items: center;
  display: block;
  width: 100%;
  margin-right: ${resLayout(50)};
`;

export const Name = styled.h1`
  color: #fff;
  font-size: ${resLayout(36)};
  margin-bottom: ${resLayout(10)};
`;

export const ContainerInfos = styled.div`
`;

export const Infos = styled.h1`
 font-weight: bold;
 font-size: ${resLayout(24)};
 color: #5a5a5a;
`;

export const Image = styled.img`
  width: 30%;
  height: 100%;
  border-radius: ${resLayout(20)};
`;