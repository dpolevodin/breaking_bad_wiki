import '../src/css/reset.css';
import '../src/css/App.css';
import '../src/css/CharacterCard.css';
import API from "./utils/API";
import CharacterCard from '../src/components/CharacterCard';

// const characters = function (callback) {
//   API.get('https://www.breakingbadapi.com/api/characters').then(
//     result => {
//       let data = result.data
//       console.log(data[0])
//       callback(data)
//     },
//     error => console.log(error)
//   )
// }
let url = 'https://www.breakingbadapi.com/api/characters/1'

const getCharacters = (url) => {
  return fetch(url)
    .then(response => response.json())
}
let results = []
const characters = getCharacters(url).then(result => results.push(...result))

console.log('*******', characters)
console.log('-------', results)
console.log('-------', Array.isArray(results))

const objChar = [{
    char_id: 1,
    name: 'Walter White',
    nickname: 'Heisenberg',
    birthday: '09-07-1958',
    img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
  },
  {
    char_id: 2,
    name: 'Walter White',
    nickname: 'Heisenberg',
    birthday: '09-07-1958',
    img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
},
  {
    char_id: 3,
    name: 'Walter White',
    nickname: 'Heisenberg',
    birthday: '09-07-1958',
    img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
},
{
  char_id: 4,
  name: 'Walter White',
  nickname: 'Heisenberg',
  birthday: '09-07-1958',
  img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
},
]

const characterList = objChar.map((item) => 
  <li className="App__item" key={item.char_id.toString()}>
    <CharacterCard name = {item.name} nickname = {item.nickname} img={item.img} birthday={item.birthday} />
  </li>
  )

const navigationItemsData = ['Characters', 'Episodes', 'Quote']
const navigationItemsList = navigationItemsData.map((item) => 
  <li className="App__navigation-item" key={navigationItemsData.indexOf(item)}>
    {item}
  </li>
)

function App() {

  return (
    <div className="App">
      <div className="App__navigation">
        <ul className="App__navigation-list">
          {navigationItemsList}
        </ul>
      </div>
      <div className="App__content">
        <h1 className="App__title">Welcome to Breaking bad Wiki!</h1>
        <ul className="App__list">
          {characterList}
        </ul>
      </div>
    </div>
  );
}

export default App;
