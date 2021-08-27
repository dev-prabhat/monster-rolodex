import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.component.jsx'
import './style.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            monsters: [],
            searchField: ''
        }

        // this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ monsters: users }));
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
    }
    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return (
            <div>
                <h1 className="beauty">Monster Rolodex</h1>
                <SearchBox placeholder='search monster' handleChange={this.handleChange} />
                <CardList monsters={filteredMonsters} />
            </div>
        )
    }
}

export default App;