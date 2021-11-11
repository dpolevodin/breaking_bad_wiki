import React from 'react';
import QuoteCard from './QuoteCard'
import Loading from '../Loading'
import CharacterImage from './CharacterImage'

class QuoteList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            quotes: [],
            isLoading: false,
            quoteAuthor: '',
            characterImage: [],
      }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = document.getElementById('searchQuote').value
        const url = (searchValue === '') ? 'quotes' : `quote?author=${searchValue}`

        this.setState({isLoading: true})
        fetch(`https://www.breakingbadapi.com/api/${url}`)
                .then(response => response.json())
                .then(result => {
                    this.setState({
                        quotes: result,
                        isLoading: false
                    })
                }
                )
        if (searchValue !== '') {
            fetch(`https://www.breakingbadapi.com/api/characters?name=${searchValue}`)
            .then(response => response.json())
            .then(result => {
            this.setState({
                characterImage: result
            })
        }
        )
        }
        
    }

    componentDidMount = () => {
        this.setState({isLoading: true})
        fetch(`https://www.breakingbadapi.com/api/quotes`)
                .then(response => response.json())
                .then(result => {
                    this.setState({
                        quotes: result,
                        isLoading: false
                    })
                }
                )
            }

    render() {
        return (
            <div className="blockquote__list">
                {this.state.isLoading && (<Loading />)}
                <form onSubmit={this.handleSubmit} id='formQuote'>
                    <input id='searchQuote' type="text" placeHolder="Search qoute by author"/>
                </form>
                
                {this.state.characterImage.map((item) => 
                    <CharacterImage {...item} />
                    )
                }

                {this.state.quotes.map((item) => 
                    <QuoteCard {...item} />
                    )
                }
            </div>
        )
}
}

export default QuoteList