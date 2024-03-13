import { Header, SectionI, SectionII, SectionIII, SectionIV, SectionV, Zfooter } from './components';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <div className="App">
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
