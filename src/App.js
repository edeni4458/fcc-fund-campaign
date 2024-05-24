import { Header, SectionIII, SectionIV, SectionII } from './components';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Route, Routes } from 'react-router';



function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div><Header /><SectionIII /><SectionIV /></div>}></Route>
        <Route path="/detailspage" element={<SectionII />} />
      </Routes>
    </div>
  );
}


export default App;


//   window.onload = function() {
//     if(!window.location.hash) {
//         // window.location = window.location + '#/';
//         window.location.reload();
//     }
// }

//   (function () {
//     window.onpageshow = function(event) {
//         if (event.persisted) {
//             window.location.reload();
//         }
//     };
// })();


