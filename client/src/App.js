import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import Navbar from './components/Navbar';

//Pages
import HomePage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
          exact 
          path='/'
          element={<HomePage/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
