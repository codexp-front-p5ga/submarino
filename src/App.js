import React from "react";
import CardProduct from "./components/23-card-produtos/card-produtos";
import RelogioDourado from "./img/relogio.jpg";


var image={
  src: RelogioDourado,
  alt: "Relógio Dourado"
}

export default () =>(
  <div className="App">
      <CardProduct name="Relógio Skmei Digital" price="R$89,94" image={image}/>
  </div>
);