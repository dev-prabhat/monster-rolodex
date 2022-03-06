import React, { useState, useEffect } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.component.jsx'
import './style.css'

const App = () => {
    const [searchField, setSearchField] = useState('')
    const [monsters, setMonsters] = useState([])


    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase()))


    const handleChange = (e) => {
        setSearchField(e.target.value)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setMonsters(users));
    }, [])


    return (
        <div>
            <h1 className='beauty'>Monster Rolodex</h1>
            <SearchBox placeholder='search monster' handleChange={handleChange} />
            <CardList monsters={filteredMonsters} />
        </div>
    )
}

export default App;