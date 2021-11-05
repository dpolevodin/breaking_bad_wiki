import '../src/css/reset.css';
import '../src/css/App.css';
import '../src/css/CharacterCard.css';
import CharactersList from '../src/components/CharactersList';
import NavigationItems from '../src/components/NavigationItems';
// import BackgroundImage from '../src/components/BackgroundImage';

function App() {
  return (
    <div className="App">
      <div className="App__navigation">
        <ul className="App__navigation-list">
          <NavigationItems />
        </ul>
      </div>
      <div className="App__content">
        <h1 className="App__title">Welcome to Breaking bad WIKI!</h1>
        <CharactersList/> 
      </div>
    </div>
  );
}

export default App;
