import React from 'react';
import CharacterCard from './CharacterCard'


class RandomCharacter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          character: []
      }
    }

    componentDidMount = () => {
        fetch('https://www.breakingbadapi.com/api/character/random')
                .then(response => response.json())
                .then(result => {
                    this.setState({character: result})
                }
                )
            }
            
    render() {
        return (
            <div className="App__random-character">
                {this.state.character.map((item) => 
                    <CharacterCard {...item}  key={item.id}/>
                    )
                }
            </div>
        )
        
}
}

export default RandomCharacter
