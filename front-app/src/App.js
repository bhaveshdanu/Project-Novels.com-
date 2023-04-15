import Nav from './Components/Nav.js';
import Login from './Components/Login.js'
import Register from './Components/Register.js';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import ReadNovel from './Popups/ReadNovel.js';
function App() {
  return (
    
    
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/books/:id' element={<ReadNovel/>}/>
      
      </Routes>
    </Router>
    
    
    
    
);
}

export default App;
