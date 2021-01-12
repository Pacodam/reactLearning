import React, {Component} from 'react';
import './Pokecard.css';
//const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API_NICER = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

//obsolete way
// function addZerosToId(id){
//     var idStr = id.toString();
//     var idModified = idStr;
//     if(idStr.length === 1){ idModified = "00" + id;}
//     else if(idStr.length === 2){ idModified = "0" + id;}

//     return idModified;
// }

//more elegant and concise way
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);


class Pokecard extends Component{
    render(){

        const pokemon = this.props;
        //let imgSrc = `${POKE_API}${pokemon.id}.png`;
        let imgSrcNicer = `${POKE_API_NICER}${padToThree(pokemon.id)}.png`;
       
        return(
            <div className="Pokecard">
                <h1 className="Pokecard-title">{pokemon.name}</h1>
                <div className="Pokecard-image">
                  <img className="Pokecard-img"  src={imgSrcNicer}/>
                </div>
                <div className="Pokecard-data">Type:{pokemon.type}</div>
                <div className="Pokecard-data">EXP:{pokemon.exp}</div>
            </div>
        )
    }
}

export default Pokecard;