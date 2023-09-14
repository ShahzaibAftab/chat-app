import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} exact />
        <Route path='/chats' element={<Homepage />} />
        
      </Routes>
    </div>
  );
}

export default App;
