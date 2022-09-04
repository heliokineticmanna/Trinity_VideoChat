import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import Calling from './Calling';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Call" element={<Calling/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
