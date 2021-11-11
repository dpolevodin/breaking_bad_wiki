const EpisodeCard = ({
    id,
    title,
    season,
    episode,
    series,
    air_date,
    characters
}) => {
    const charactersList = characters.join(', ')
    // return (
    //     <ul className="episode__list">
    //         <li className="episode__item">Title: {title}</li>
    //         <li className="episode__item">Episode: {episode}</li>
    //         <li className="episode__item">Air date: {air_date}</li>
    //         <li className="episode__item">Season: {season}</li>
    //         <li className="episode__item">Main characters: {charactersList}</li>
    //         <li className="episode__item">Series: {series}</li>
    //     </ul>
    // )
    const cells = []
    for (let i = 0; i < 10; i++) {
        cells.push(<li className="episode__block-mov-cell" key={i}></li>)
    }

    return (
        <div className="episode__block-mov">
            <ul className="episode__block-mov-column">
                {cells}
            </ul>
            <ul className="episode__list-mov">
                <li className="episode__item-mov">
                    <h2 className="episode__item-mov-title">Title: "{title}"</h2>
                </li>
                <li className="episode__item-mov">Episode: {episode}</li>
                <li className="episode__item-mov">Air date: {air_date}</li>
                <li className="episode__item-mov">Main characters: {charactersList}</li>
                <li className="episode__item-mov">Season: {season}</li>
                <li className="episode__item-mov">Series: {series}</li>
            </ul>
            <ul className="episode__block-mov-column">
                {cells}
            </ul>
        </div>
    )
}

export default EpisodeCard