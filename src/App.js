import '../src/css/reset.css';
import '../src/css/App.css';
import '../src/css/CharacterCard.css';
import CharacterCard from '../src/components/CharacterCard';

const objChar = [{
    id: 1,
    name: 'Heisenberg',
    birthday: '01.01.1970',
    img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
  },
  {
    id: 1,
    name: 'Heisenberg',
    birthday: '01.01.1970',
    img: "https://ae04.alicdn.com/kf/HTB1GMpMJVXXXXctXpXXq6xXFXXX2/Heisenberg.jpg",
}]

const charList = objChar.map((item) => <li className="App__item"><CharacterCard name = {item.name} id = {item.id} img={item.img} birthday={item.birthday}/></li>)

function App() {
  
  return (
    <div className="App">
      <h1 className="App__title">Welcome to Breakin bad wiki!</h1>
      <ul className="App__list">
        {charList}
      </ul>
    </div>
  );
}

export default App;
