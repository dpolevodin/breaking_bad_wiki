import CharactersList from "./CharactersList"
import RandomCharacter from "./RandomCharacter"
import EpisodeList from "./Episodes/EpisodeList"
import QuoteList from './Quotes/QuoteList'


function MainPage({page}) {
    const navItems = ['Random Character', 'Characters', 'Episodes', 'Quotes', 'Search']

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
            return <div><EpisodeList /></div>
        },
        'Quotes': function() {
            return <div><QuoteList /></div>
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