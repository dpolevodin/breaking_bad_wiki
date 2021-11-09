import '../src/css/reset.css';
import '../src/css/App.css';
import '../src/css/CharacterCard.css';
// import CharactersList from '../src/components/CharactersList';
import NavigationItems from '../src/components/NavigationItems';
import MainPage from '../src/components/MainPage'
import { useState } from 'react';
// import BackgroundImage from '../src/components/BackgroundImage';

function App() {
  const [navItem, setNavItem] = useState('Random Character')
  
  const handleChangeNavItem = (event) => {
    setNavItem(event.target.value)
  }

  console.log(navItem)

  return (
    <div className="App">
      <div className="App__navigation" onChange={handleChangeNavItem}>
          <NavigationItems />
      </div>
      <div className="App__content">
        <h1 className="App__title">Welcome to Breaking bad WIKI!</h1>
        <MainPage page={navItem}/> 
      </div>
    </div>
  );
}

export default App;
