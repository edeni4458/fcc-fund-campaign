import { Header, SectionIII, SectionIV, SectionII } from './components';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';



function App() {


  if (window.location.pathname === "/detailPage") {
    return (<SectionII />)

  }



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





  return (
    <div className="App">
      <Header />
      <SectionIII />
      <SectionIV />
    </div>
  );
}


export default App;
