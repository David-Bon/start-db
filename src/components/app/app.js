import React, {Component} from "react";
import style from './app.css'
import Header from "../header/header";
import PersonDetails from "../person-details/person-details";
import ItemList from "../item-list/item-list";
import RandomPlanet from "../random-planet/random-planet";


export default class App extends Component {

    state = {
        selectedPerson: null
    }


     onPersonSelected = (id) => {
this.setState({
    selectedPerson: id
})
    };

render() {


    return <div>
        <Header/>
        <div className='container'>
            <RandomPlanet/>
            <ItemList onPersonSelected={this.onPersonSelected}/>
            <PersonDetails personId={this.state.selectedPerson}/>
        </div>

    </div>

};
}
