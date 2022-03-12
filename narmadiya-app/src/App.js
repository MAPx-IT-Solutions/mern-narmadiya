import './App.css';
import { Header } from './components/header'
import { Navbar } from './components/Navbar';
import Router from './routes';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Router/>
    </div>
  );
}

export default App;
