
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Side from './components/Sidebar';
import Contact from './components/contact';
import Datatable from './components/Datatable';

function App() {
  return (<Router>
  <div style={{display:"flex",flexDirection:"row"}} >
    <Side />
  <Routes>
    <Route path='/' element={<Datatable/>}/>
    <Route path='/contact' element={<Contact />} />
  </Routes>
    </div></Router>
  );
}

export default App;
