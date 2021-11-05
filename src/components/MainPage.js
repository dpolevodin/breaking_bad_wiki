function MainPage() {
    const handleClick = () => {
        console.log('Click')
    }
    return (
        <div className="main-page">
            <button className="main-page__button" onClick={handleClick}> Let's start!</button>
        </div>
    )
}

export default MainPage