import { useState } from 'react';
import './App.css';
import FriendList from './components/friendList';
import Check from './components/check';

function App() {
  const [friends, setFriends] = useState([
      {
        key: 1234,
        name: "Jonas Pedro",
        balance: getRandomInt(-100, 100),
      },
      {
        key: 1235,
        name: "Michael Zvaiter",
        balance: getRandomInt(-100, 100),
      },
      {
        key: 1236,
        name: "Trik Nour",
        balance: getRandomInt(-100, 100),
      },
    ]);

    const [toggleCheck, setToggleCheck] = useState(
      {
        "isToggle": true,
        "id": -1,
      });

  function addFriend(name) {
    var newFriend = {
        "key": getRandomInt(1, 1000),
        "name" : name,
        "balance": 0,
    }

    setFriends([...friends, newFriend]);

  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div className="App">
      <h1 className="text-4xl font-bold font-mono mt-5 mb-5 text-center">PaybackPal</h1>
      <div className='flex w-full'>
        <div className='w-2/4'>
          <FriendList friends={friends} addFriend={addFriend} />
        </div>
        <div className='w-2/4'>
          <Check />
        </div>
      </div>
    </div>
  );
}

export default App;
