const QuotesButton = ({getQuoteByAuthor}) => {
    return <button className="blockquote__button" onClick={getQuoteByAuthor}>Get quote by author</button>
}

export default QuotesButton