import React, { Component } from 'react'
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
// done till 46 video
export default class extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [
        //we are setting our intial state to empty
        /*{

          name: 'Witcher',
          id:'asr1'

        },
        {

          name: 'Dracula',
          id:'asr2'

        },
        {

          name: 'Zombie',
          id:'asr3'
          //id will sserve as a uniuqe for every enteries

        }*/


      ],

      searchField: ''

    }

   // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')//fetch returns promise
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))// setting our monster to api we fetched 

  }
  // Arrow function binds the code
  // also called as lexical scoping 
  handleChange = ( e ) => {
    this.setState({ searchField: e.target.value });
  }


  render() {

    // destructuring 

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>

      //converting to lower case to avoid be Case Senstive 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())

    );

    
    return (
      <div className='App'>

      <h1> Monsters Rolodex  </h1>        

        <SearchBox
        
        placeholder='search monster'
        handleChange={this.handleChange}
        
        />

        <CardList monsters={filteredMonsters} />



      </div>
    )
  }
}
