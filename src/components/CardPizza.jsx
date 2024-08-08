const CardPizza = ({ name, price, ingredients, img }) => (
    <div className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients.join(', ')}</p>
      <p>Precio: ${price.toLocaleString()}</p>
      <button>Ver más</button>
      <button>Añadir</button>
    </div>
  );
  
  export default CardPizza;
  