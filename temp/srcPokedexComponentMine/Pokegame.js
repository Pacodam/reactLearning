import React, {Component} from 'react';
import Pokedex from './Pokedex';

const shuffleArray = array => {
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

const sumExp = array => {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
       //console.log(`exp is ${array[i].base_experience}`);
       sum = sum + array[i].base_experience;
    } 

    return sum;
};

class Pokegame extends Component{
    static defaultProps = {
        pokemon : [
          {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
          {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
          {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
          {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
          {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
          {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
          {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
          {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
      };
    render(){

        let shuffledArray = shuffleArray(this.props.pokemon);
        console.log(shuffledArray);

        let deck1 = shuffledArray.slice(0, 4);
        let deck2 = shuffledArray.slice(4, 8);
        //console.log(deck1);
        //console.log(deck2);

        let deck1Sum = sumExp(deck1);
        let deck2Sum = sumExp(deck2);
        //console.log( deck1Sum, deck2Sum);

        return(
            <div className="Pokegame">
              <Pokedex deck= {deck1} total = {deck1Sum} isWinner = {deck1Sum > deck2Sum}/>
              <Pokedex deck= {deck2} total = {deck2Sum} isWinner = {deck1Sum < deck2Sum}/>
            </div>
        )
    }
}

export default Pokegame;