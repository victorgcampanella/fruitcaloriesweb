import styled from 'styled-components'

export const Title = styled.h1`
  display: flex;
  font-size: 48px;
  color: #3a3a3a;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ContainerCards = styled.div`
  a {
    background: #4a8;
    align-items: center;
    border-radius: 20px;
    width: 100%;
    max-height: 350px;
    padding: 24px;
    text-decoration: none;
    transition: transform 0.2s;

    display: flex;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateY(-10px)
    }
  }
`;

export const ContainerFruit = styled.div`
  align-items: center;
  display: block;
  width: 100%;
  margin-right: 50px;
`;

export const Name = styled.h1`
  color: #fff;
  font-size: 36px;
  margin-bottom: 10px;
`;

export const ContainerInfos = styled.div`
`;

export const Infos = styled.h1`
 font-weight: bold;
 font-size: 24px;
 color: #5a5a5a;
`;

export const Image = styled.img`
  width: 30%;
  height: 100%;
  border-radius: 20px;
`;