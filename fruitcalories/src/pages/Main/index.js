import React, {useState, useEffect} from 'react';

import api from '../../services/index';
import {Link} from 'react-router-dom';
import { Title, ContainerCards, Name, ContainerInfos, Infos, Image, ContainerFruit } from './styles';

const Main = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    api.get().then(response => {
      console.log(response.data);
      setFruits(response.data)
    })
  }, [])
  
  return (
    <>
      <Title>Fruit Calories</Title>
      <ContainerCards>
        {fruits.map(fruit => (
          <Link key={fruit.name} to={{
            pathname: "/details",
            state: {fruit}
          }}>
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
            <Image src={fruit.photo} alt={fruit.name}/>
          </Link>
        ))}
      </ContainerCards>
    </>
  )
}

export default Main;