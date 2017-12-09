import React from 'react';
import './CardSection.css';
import CardProduct from "./components/23-card-produtos/card-produtos";



export default (props) => (
    <div className="CardSection">
        <CardProduct name = "Produto A" price = "20,50" image=""/>
        {/* <CardProduct name = "Produto B" price = "80,80" image={props.image}/>
        <CardProduct name = "Produto C" price = "125,20" image={props.image}/>
<CardProduct name = "Relogio Dourado" price = "133,40" image={props.image}/> */}
        
    </div>

);