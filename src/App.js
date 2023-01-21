import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./mainPage/MainPage";
import MediScribeMain from "./mediScribePage/MediScribeMain";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/MediScribe">
          <MediScribeMain />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
