import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../data/pizzasCart'; 

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        {pizzas.map(pizza => (
          <CardPizza
            key={pizza.id}
            name={`🍕 ${pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}`}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
