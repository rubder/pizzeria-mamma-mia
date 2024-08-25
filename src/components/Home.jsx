import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzaCart } from '../data/pizzasCart'; 


const Home = () => (
  <>
    <Header />
    <div className="pizza-container">
      {pizzaCart.map(pizza => (
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

export default Home;
