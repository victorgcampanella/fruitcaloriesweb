import React from 'react';
import {useLocation} from 'react-router-dom'

import { 
  Title, 
  Card, 
  Name, 
  ContainerInfos, 
  Infos, 
  Image, 
  ContainerFruit,
  ContainerImage
} from './styles';

const Details = () => {
  const location = useLocation()
  const fruit = location.state.fruit
  return (
    <>
      <Title>Detalhes</Title>
      <Card>
        <ContainerImage>
          <Image src={fruit.photo} alt={fruit.name}/>
        </ContainerImage>
        <ContainerFruit>
          <Name>{fruit.name}</Name>
          <ContainerInfos>
            <Infos>Calorias : {fruit.calories}</Infos>
            <Infos>Proteína : {fruit.protein}</Infos>
            <Infos>Carboidratos : {fruit.carbohydrates}</Infos>
            <Infos>Fibra : {fruit.fiber}</Infos>
            <Infos>Gordura : {fruit.blubber}</Infos>
            <Infos>Porção : {fruit.portion}</Infos>
          </ContainerInfos>
        </ContainerFruit>
      </Card>
    </>
  );
}

export default Details;