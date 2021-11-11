const QuoteCard = ({
    quote,
    author,
}) => {
    return (
        <blockquote>
            <p>{quote}</p>
            <footer>
            — 
            <cite> {author} </cite>
            </footer>
        </blockquote>
    )
}

export default QuoteCard