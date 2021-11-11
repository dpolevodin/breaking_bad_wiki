import React from 'react';
import QuoteCard from './QuoteCard'
import Loading from '../Loading'
import CharacterImage from './CharacterImage'
import SelectQuote from './SelectQuote'
import QuotesButton from './QuotesButton'

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
        let test = document.getElementById('formQuote')
        const searchValue = test.value
        // var e = document.getElementById("elementId");
        // var value = e.options[e.selectedIndex].value;
        // const searchValue = document.getElementById('searchQuote').value
        const url = (searchValue === 'all characters') ? 'quotes' : `quote?author=${searchValue}`

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
        })
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
    
    getNoDoubleAuthor = () => {
        const authorData = this.state.quotes.map(
            item => item.author
        )
        authorData.unshift('all characters')
        return [...new Set(authorData)]
    }

    render() {
        return (
            <div className="blockquote__list">
                {this.state.isLoading && (<Loading />)}
                <form className="quote-list__form">
                    <select className="quote-list__select" id='formQuote'>
                    {this.getNoDoubleAuthor().map((item) => 
                        <SelectQuote author={item} key={item}/>
                        )
                    }
                    </select>
                <QuotesButton getQuoteByAuthor={this.handleSubmit} />
                </form>
                
                {this.state.characterImage.map((item) => 
                    <CharacterImage {...item} key={item.id}/>
                    )
                }

                {this.state.quotes.map((item) => 
                    <QuoteCard {...item} key={item.quote_id}/>
                    )
                }
            </div>
        )
}
}

export default QuoteList