import React, { Component } from 'react';
import './App.css';
import Cardlist from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>Monsters Profile</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <Cardlist monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
