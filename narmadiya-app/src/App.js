import './App.css';
import Router from './routes';
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory()
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
