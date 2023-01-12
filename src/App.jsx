import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import Nav from './Components/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path={'/'} exact element={<Shop/>}/>
          <Route path={'/Cart'} element={<Cart/>}/>
        </Routes>
      </div>
    </BrowserRouter>   
  );
}

export default App;
