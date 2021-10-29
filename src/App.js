import '../src/css/reset.css';
import '../src/css/App.css';
import '../src/css/CharacterCard.css';
import CharactersList from '../src/components/CharactersList';
import NavigationItems from '../src/components/NavigationItems';


// import API from "./utils/API";


// const url = 'https://www.breakingbadapi.com/api/characters'

// const characterData = []

// async function getCharactersData() {
//   fetch('https://www.breakingbadapi.com/api/characters')
//   .then(response => response.json()
//   .then(data => drawItem)
//   )
// }

// getCharactersData(url)

function App() {

  return (
    <div className="App">
      <div className="App__navigation">
        <ul className="App__navigation-list">
          <NavigationItems />
        </ul>
      </div>
      <div className="App__content">
        <h1 className="App__title">Welcome to Breaking bad Wiki!</h1>
        <ul className="App__list">
          <CharactersList/>
        </ul>
      </div>
    </div>
  );
}

export default App;
