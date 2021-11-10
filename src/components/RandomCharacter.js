import React from 'react';
import RandomCharacterCard from './RandomCharacterCard/RandomCharacterCard'
import Button from "./Button"

class RandomCharacter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          character: []
      }
    }

    componentDidMount = () => {
        fetch(`https://www.breakingbadapi.com/api/character/random`)
                .then(response => response.json())
                .then(result => {
                    this.setState({character: result})
                }
                )
            }
    
    handleClick = () => {
        this.componentDidMount()
    }
            
    render() {
        return (
            <div className="App__random-character">
                {this.state.character.map((item) => 
                    <RandomCharacterCard {...item} key={item.char_id}/>
                    )
                }
                <Button text='Get another character!' onClick={this.handleClick}/>
            </div>
        )
        
}
}

export default RandomCharacter
