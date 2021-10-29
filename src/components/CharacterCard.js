function CharacterCard(props) {
    const {nickname, name, img, birthday} = props
    return (
        <div className="character-card">
            <h1 className="character-card__title">{nickname}</h1>
            <img className="character-card__img" src={img} alt={nickname} />
            <span className="character-card__text">Real name: {name}</span>
            <span className="character-card__text">Birthday: {birthday}</span>
        </div>
    )
}

export default CharacterCard