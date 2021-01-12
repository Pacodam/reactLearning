import React, {Component} from 'react';

//function as var
let padToThreeH = (number) => (number <= 999 ? `00${number}`.slice(-3) : number); 

class Review extends Component{
    static defaultProps = {
		pokemon : [
			{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
			{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
			{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
			{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
			{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
			{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
			{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
			{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
		]
    };
    
    constructor(props){
        super(props);
        this.remove = this.remove.bind(this);
        this.padToThree = this.padToThree.bind(this);
        
    }

    //returns array of items without the item if found inside
    remove(items, item) {
        for (let i = 0; i < items.length; i++) {
            if (items[i] === item) {
                return [ ...items.slice(0, i), ...items.slice(i + 1) ];
            }
        }
    }

    //function as var
   padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

   //wait one second before doing something
   timeout(){
    setTimeout(() => {
        this.setState({ rolling: false });
    }, 1000);
  }

    

    render(){

        //repeat method
        let bangs = "!".repeat(10);  //!!!!!!!!!!

        //assignment notation
        const { s1, s2, s3 } = this.props;
        const winner = (s1 === s2) && (s2 === s3);

        //String array
        let hobbies = ['Piano', 'Singing', 'Dancing'];

        //testing remove function
        let hobbiesNoPiano = this.remove(hobbies, 'Piano'); // ["Singing", "Dancing"]

        //map + jsx
        let hobbiesLi = hobbies.map(h => <li>{h}</li>)

        //another example inside return
        // <div className="Pokedex-cards">
		// 			{this.props.pokemon.map((p) => (
		// 				<Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
		// 			))}
		// 		</div>

        //style const
        const colors = { fontSize: '50px', backgroundColor: 'purple' };
    
        //notation
        const POKE_API = "hello";
        let id = 92;
        let imgSrc = `${POKE_API}${padToThreeH(id)}.png`;  //hello092.png
        console.log(imgSrc)

        //elegant way of create two random arrays from an eight objects array
        //reduce method returns acumulated exp
        let hand1 = [];
		let hand2 = [ ...this.props.pokemon ];
		while (hand1.length < hand2.length) {
			let randIdx = Math.floor(Math.random() * hand2.length);
			let randPokemon = hand2.splice(randIdx, 1)[0];
			hand1.push(randPokemon);
		}
		let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        
        //'Die' works as className!, the rest is a fontawesome icon
    //     <i
    //     className={`Die fas fa-dice-${this.props.face} ${this.props.rolling &&
    //       "shaking"}`}
    //   />



       
        return(
            <div>
            <h1>Review!</h1>
            <ul style={colors}>{hobbiesLi}</ul>
            </div>
        )
    }
}

export default Review;