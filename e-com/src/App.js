import './App.css';
import Create from './component/Create';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Read from './component/Read'
import Edit from './component/Edit';

function App() {
  return (
 
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route exact path='/read' element={<Read/>}></Route>
        <Route exact path='/' element={<Create/>}></Route>
        <Route exact path='/edit' element={<Edit/>}></Route>
   
    </Routes>
    </BrowserRouter>
    </div>
   
    
  );
}

export default App;