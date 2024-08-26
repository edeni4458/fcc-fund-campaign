import { Header, SectionIII, SectionIV, SectionII, Zfooter } from './components';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Route, Routes } from 'react-router';




function App() {


  return (
    <div className="App">
        
      <Routes>
        <Route path="/" element={<div><Header /><SectionIII /><SectionIV /> <div><Zfooter/></div> </div>}></Route>
        <Route path="/detailspage" element={ <SectionII />} />
      </Routes>
    </div>
  );
}


export default App;




