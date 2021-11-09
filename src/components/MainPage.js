import CharactersList from "./CharactersList"


function MainPage({page}) {
    const navItems = ['Random Character', 'Characters', 'Episodes', 'Quote', 'Search']

    const renderMapping = {
        'Random Character': function() {
            return <div>{navItems[0]}</div>
        },
        'Characters': function() {
            return <CharactersList/>
        },
        'Episodes': function() {
            return <div>{navItems[2]}</div>
        },
        'Quote': function() {
            return <div>{navItems[3]}</div>
        },
        'Search': function() {
            return <div>{navItems[4]}</div>
        },
    }
 
    return renderMapping[page]()

        // <div className="main-page">
        //     <button className="main-page__button"> Let's start!</button>
        // </div>
}

export default MainPage