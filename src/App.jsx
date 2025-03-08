import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter]=useState(0);
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center">
     <p className='text-4xl font-bold text-white'  >{counter}</p>
     {
      counter==0 && <p className='text-4xl font-bold text-white shadow-md p-2'>Vous avez atteint la limite</p>
     }

     <button className="bg-white text-black py-2 px-4 rounded cursor-pointer mt-4" onClick={() => setCounter(counter + 1)}>Augmenter</button>
     <button className='bg-white text-black py-2 px-4 rounded cursor-pointer mt-4' onClick={() => setCounter(counter - 1)} disabled={counter==0}>Diminuer</button>

    </div>
  );
}

export default App;