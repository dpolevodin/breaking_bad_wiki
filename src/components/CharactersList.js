import React from 'react';
import CharacterCard from './CharacterCard/CharacterCard'
import Pagination from "./Pagination/Pagination"


class CharactersList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          characters: [],
          currentPage: 0,
      }
    }

    handleButton = (event) => {
        const offsetCount = event.target.innerText * 10 - 10
        this.setState({currentPage: offsetCount})
        this.componentDidMount(offsetCount)
    }

    componentDidMount = (page = 0) => {
        console.log(this.state.currentPage)
        fetch(`https://www.breakingbadapi.com/api/characters?limit=10&offset=${page}`)
                .then(response => response.json())
                .then(result => {
                    this.setState({characters: result})
                }
                )
            }    
    
    render() {
        return (
            <div>
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