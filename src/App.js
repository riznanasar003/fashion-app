import logo from './logo.svg';
import './App.css';
import Add from './Components/Add';
import Search from './Components/Search';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/viewall' element={<ViewAll/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
