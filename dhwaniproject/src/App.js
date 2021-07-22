
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Page1 from './Component/Page1';
import Page2 from './Component/Page2';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"  component={Page1} />
        <Route exact path="/page2/:pageId"  component={Page2} />
      </Switch>
    </div>
  );
}

export default App;
