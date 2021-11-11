import React from 'react';
import QuoteCard from './QuoteCard'
import Loading from '../Loading'

class QuoteList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            quotes: [],
            isLoading: false,
            quoteAuthor: '',
      }
    }

    componentDidMount = () => {
        this.setState({isLoading: true})
        const searchAuthorUrl = this.state.quoteAuthor
        console.log(searchAuthorUrl)
        const url = (this.state.quoteAuthor !== '') ? `quote?author=${searchAuthorUrl}` : 'quotes'
        fetch(`https://www.breakingbadapi.com/api/${url}`)
                .then(response => response.json())
                .then(result => {
                    this.setState({
                        quotes: result,
                        isLoading: false
                    })
                }
                )
            }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = document.getElementById('searchQuote').value
        this.setState({quoteAuthor: searchValue})
        this.componentDidMount(searchValue)
    }

    render() {
        return (
            <div className="blockquote__list">
                {this.state.isLoading && (<Loading />)}
                <form onSubmit={this.handleSubmit}>
                    <input id='searchQuote'type="text" placeHolder="Search qoute by author"/>
                </form>
                

                {this.state.quotes.map((item) => 
                    <QuoteCard {...item} />
                    )
                }
            </div>
        )
}
}

export default QuoteList