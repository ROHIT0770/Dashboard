
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import Resume from './components/Resume';



function App() {
  return (
    <div className="App">

<Router>


    <Routes>
      
        <Route  exact path="/" element={<MainComponent />}/>
        <Route path ="/resume/:id" element={<Resume/>}/>

     
       
      </Routes>

      </Router>
      
    </div>
  );
}

export default App;
