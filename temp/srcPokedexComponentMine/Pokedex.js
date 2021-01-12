import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component{

    render(){
        const deck = this.props.deck;
        const total = this.props.total;
        const isWinner = this.props.isWinner;
        console.log(isWinner);

        return(
            <div className="Pokedex">
            <h1>{isWinner ? "Is Winner" : "Is loser"}</h1>
            <h2>Total points: {total}</h2>
            <div className="Pokedex-cards">
            {deck.map((p) => (
                <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
            ))}
            </div>
            </div>
        );
    }
}

export default Pokedex;