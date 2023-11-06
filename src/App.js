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

    // variables used for adding a bill
    const [toggleKey, setToggleKey] = useState(null);
    const [toggleCheck, setToggleCheck] = useState(false)

  function addFriend(name) {
    var newFriend = {
        "key": getRandomInt(1, 1000),
        "name" : name,
        "balance": 0,
    }
    
    setFriends([...friends, newFriend]);
    
  }

  function handleCheck(key){
    toggleKey === null ? setToggleCheck(true) : setToggleCheck(false);
    setToggleKey(key);
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div className="App">
      <h1 className="text-4xl font-bold font-mono mt-5 mb-5 text-center">PaybackPal</h1>
      <div className='flex w-full'>
        <div className='w-2/4'>
          <FriendList friends={friends} addFriend={addFriend} handleCheck={handleCheck} toggleKey={toggleKey} />
        </div>
        <div className='w-2/4'>
          {toggleCheck && <Check friendInfo={friends[toggleKey]} friends={friends} setFriends={setFriends} toggleKey={toggleKey} setToggleKey={setToggleKey} setToggleCheck={setToggleCheck} />}
        </div>
      </div>
    </div>
  );
}

export default App;
