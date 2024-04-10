import { Header, SectionI, SectionII, SectionIII, SectionIV, SectionV, Zfooter } from './components';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Goalbar from './components/goal_bar/Goalbar';

function App() {


  return (
    <div className="App">
      <Goalbar/>
      <Header/>
      <SectionI/> 
      <SectionII/>
      <SectionIII/>
      <SectionIV/>
      <SectionV/>
      <Zfooter/>
    </div>
  );
}

export default App;
