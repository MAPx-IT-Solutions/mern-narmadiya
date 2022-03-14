import './App.css';
import { Header } from './components/header'
import { Navbar } from './components/Navbar';
import Router from './routes';
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory()
  return (
    <div className="App">
      
{history.location.pathname=== '/register' || history.location.pathname=== '/login'? '': <Header/>}
      {history.location.pathname=== '/register' || history.location.pathname=== '/login'? '': <Navbar/>}
      <Router/>
    </div>
  );
}

export default App;
