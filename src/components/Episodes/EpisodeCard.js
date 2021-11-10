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
    return (
        <ul className="episode__list">
            <li className="episode__item">Title: {title}</li>
            <li className="episode__item">Episode: {episode}</li>
            <li className="episode__item">Air date: {air_date}</li>
            <li className="episode__item">Season: {season}</li>
            <li className="episode__item">Main characters: {charactersList}</li>
            <li className="episode__item">Series: {series}</li>
        </ul>
    )
}

export default EpisodeCard