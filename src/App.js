import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Profilepage from "./components/screen/Profilepage";
import HomePage from "./components/screen/HomePage";
import ExperiencePage from "./components/screen/ExperiencePage";

function App() {
  return (
    <>
      <Router>
     <Navbar />
      
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/experience" component={ExperiencePage} />
          <Route exact path="/Profilepage" component={Profilepage} />
          {/* <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} /> */}
        </Switch>
      </main>
     
    </Router>
      
    </>
  );
}

export default App;
