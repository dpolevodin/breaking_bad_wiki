import React from 'react';
import CharacterCard from './CharacterCard'


class CharactersList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          characters: []
      }
    }

    componentDidMount = () => {
        fetch('https://www.breakingbadapi.com/api/characters')
                .then(response => response.json())
                .then(result => {
                    this.setState({characters: result})
                }
                )
            }
  
    render() {
        return (
            <ul className="App__list">
                {this.state.characters.map((item) => 
                    <li className="App__item" key={item.char_id.toString()}>
                    <CharacterCard {...item} />
                    </li>
                    )
                }
            </ul>
        )
}
}

export default CharactersList