import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import Navbar from './components/Navbar';

//Pages
import HomePage from './pages/Homepage';
import Category from './pages/Category';
import ProductDetails from './pages/ProductDetails';
import "./skeletons/Skeleton.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
          exact 
          path='/'
          element={<HomePage />}
          />
          <Route 
          path='/category/:id'
          element={<Category />}
          />
          <Route 
          path='/product/:id'
          element={<ProductDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
