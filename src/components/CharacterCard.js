function characterCard(props) {
    const {name, id, img, birthday} = props
    console.log('src ---', img, 'id: ', id, 'name: ', name)
    return (
        <div className="character-card">
            <hi className="character-card__title">{name}</hi>
            <img className="character-card__img" src={img} alt={id} />
            <span className="character-card__text">{birthday}</span>
        </div>
    )
}

export default characterCard