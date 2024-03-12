import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Schools from './Components/Schools';
import About from './Components/About';
import Contact from './Components/Contact';
import Signup from './Components/Signup';
import Login from './Components/Login';
import School from './Components/School';




function App() {
  return (
        
        <BrowserRouter>
        <div className="container-xxl p-0">
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/About' element={<About/>}/>
            <Route exact path='/Contact' element={<Contact/>}/>
            <Route exact path='/Schools' element={<Schools/>}/>
            <Route exact path='/Signup' element={<Signup/>}/>
            <Route exact path='/Login' element={<Login/>}/>
            <Route exact path='/School' element={<School />} />
          </Routes>
        </div>
        </BrowserRouter>
       
  );
}

export default App;
