import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Profilepage from "./components/screen/Profilepage";
import HomePage from "./components/screen/HomePage";
import ExperiencePage from "./components/screen/ExperiencePage";
import EducationPage from "./components/screen/EducationPage";
import SkillPage from "./components/screen/SkillPage";
import PortfolioPage from "./components/screen/PortfolioPage";

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
          <Route exact path="/edu" component={EducationPage} />
          <Route exact path="/skill" component={SkillPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/contact" component={Profilepage} />

          {/* <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} /> */}
        </Switch>
      </main>
     <Footer />
    </Router>
      
    </>
  );
}

export default App;
