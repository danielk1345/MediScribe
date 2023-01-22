import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./mainPage/MainPage";
import MediScribeMain from "./mediScribePage/MediScribeMain";
import RecordPage from "./RecordPage/RecordPage";
import RecordPageRetry from "./RecordPageRetry/RecordPage";
import Test from './Test'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/MediScribe">
          <MediScribeMain />
        </Route>
        <Route path="/test">
          <RecordPage />
        </Route>
        <Route path="/test2">
          <RecordPageRetry />
        </Route>
        <Route path="/test3">
          <Test />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
