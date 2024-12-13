import { Header, SectionIII, SectionIV, SectionII, Zfooter } from './components';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Route, Routes } from 'react-router';
import LoadingScreen from './components/loading_screen/LoadingScreen';
import { useEffect, useState } from 'react';




function App() {
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
  setTimeout(() => {
    setIsLoading(false);
  },2000)
})

  return (
    <div className="App">
      {isLoading && <LoadingScreen/>}
        
      <Routes>
        <Route path="/" element={<div><Header /><SectionIII /><SectionIV /> <div><Zfooter/></div> </div>}></Route>
        <Route path="/detailspage" element={ <SectionII />} />
      </Routes>
    </div>
  );
}


export default App;




