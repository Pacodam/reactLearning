import React, {Component} from 'react';
import NumberItem from './NumberItem';
import BetterNumberItem from './BetterNumberItem';

class NumberList extends Component{
    constructor(props){
    super(props);
    this.state = {
        nums: [1,2,3,4,5],
        nums2: [1,2,3,4,5]
    };
    this.removeAlter = this.removeAlter.bind(this);

    }

    remove(num) {
        this.setState(st => ({
            nums: st.nums.filter(n => n !== num)
        }));
    }

    removeAlter(num) {
        this.setState(st => ({
            nums2: st.nums2.filter(n => n !== num)
        }));
    }

    render() {
        let nums = this.state.nums.map(n => (
            <NumberItem value={n} remove={() => this.remove(n)}/>
        ));
        let nums2 = this.state.nums2.map(n => (
            <BetterNumberItem value={n} remove={this.removeAlter}/>
        ));
        return(
            <div>
             <h1>First Number List</h1>
             <ul>{nums}</ul>
             <h1>Second Number List</h1>
             <ul>{nums2}</ul>
            </div>
        )
    }
}

export default NumberList;