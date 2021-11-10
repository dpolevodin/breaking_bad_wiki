import React, { useState } from 'react';
import CharacterCard from './CharacterCard/CharacterCard'
import Pagination from "./Pagination/Pagination"
import Loading from "./Loading"

class CharactersList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          characters: [],
          currentPage: 0,
          isLoading: false,
      }
    }

    handleButton = (event) => {
        const offsetCount = event.target.innerText * 10 - 10
        this.setState({currentPage: offsetCount})
        this.componentDidMount(offsetCount)
    }

    componentDidMount = (page = 0) => {
        this.setState({isLoading: true})
        fetch(`https://www.breakingbadapi.com/api/characters?limit=10&offset=${page}`)
                .then(response => response.json())
                .then(result => {
                    this.setState({
                        characters: result,
                        isLoading: false
                    })
                }
                )
            }    
    
    render() {
        return (
            <div className="characters__list">
                {this.state.isLoading && (<Loading />)}
                <ul className="App__list">
                {this.state.characters.map((item) => 
                    <li className="App__item" key={item.char_id.toString()}>
                    <CharacterCard {...item} />
                    </li>
                    )
                }
                </ul>
                <Pagination onClick={this.handleButton}/>
            </div>
        )
}
}

export default CharactersList