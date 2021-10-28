import '../src/css/reset.css';
import '../src/css/App.css';
import '../src/css/CharacterCard.css';
// import API from "./utils/API";
import CharacterCard from '../src/components/CharacterCard';

const url = 'https://www.breakingbadapi.com/api/characters'

const characterData = []

async function getCharactersData(url) {
  let result = fetch(url)
  .then(response => response.json()
  .then(data => {
    for (let item of data) {
      characterData.push(item)
    }
  return result
  })
  )
}

getCharactersData(url)

console.log('данные в characterData: ', characterData)
console.log('Проверка на массив characterData: ', Array.isArray(characterData))
console.log('Вывод 1- го элемента массива characterData[0]: ', characterData[0])
console.log('Длина массива characterData: ', characterData.length)

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

function drawItem(charList) {
  console.log('drawItem: ', charList)
  const characterList = charList.map((item) => 
  <li className="App__item" key={item.char_id.toString()}>
    <CharacterCard name = {item.name} nickname = {item.nickname} img={item.img} birthday={item.birthday} />
  </li>
  )
  return characterList
}

const finalDraw  = drawItem(characterData)

console.log(finalDraw)

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
