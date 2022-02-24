import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ToDo from "./ToDo";
import Detail from "./Routes/Detail";
import Movies from "./Routes/Movies";
import Home from "./Routes/Home";
import "./App.css";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/todo">
          <ToDo />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;