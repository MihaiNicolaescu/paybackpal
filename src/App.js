import './App.css';
import FriendList from './components/friendList';

function App() {
  const friends = [
      {
        id: 1234,
        name: "Jonas Pedro",
        balance: getRandomInt(-100, 100),
      },
      {
        id: 1235,
        name: "Michael Zvaiter",
        balance: getRandomInt(-100, 100),
      },
      {
        id: 1236,
        name: "Trik Nour",
        balance: getRandomInt(-100, 100),
      },
    ];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div className="App">
      <h1 className="text-4xl font-bold font-mono mt-5 mb-5 text-center">PaybackPal</h1>
      <div className='flex w-full'>
        <div className='w-2/4'>
          <FriendList friends={friends} />
        </div>
        <div className='w-2/4'>
          <p> MENU ZONE</p>
        </div>
      </div>
    </div>
  );
}

export default App;
