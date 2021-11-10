import CharactersList from "./CharactersList"
import RandomCharacter from "./RandomCharacter"

function MainPage({page}) {
    const navItems = ['Random Character', 'Characters', 'Episodes', 'Quote', 'Search']

    const renderMapping = {
        'Random Character': function() {
            return (
                <div>
                   <RandomCharacter />
                </div>
            )
        },
        'Characters': function() {
            return (
                <div>
                    <CharactersList/>
                </div>
            )
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
 
    return (
      <div>
            {renderMapping[page]()}
      </div>  
    )
}

export default MainPage