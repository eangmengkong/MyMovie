import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import News from "./News";
import InTheaters from "./InTheaters";
import ComingSoon from "./Comingsoon";
import Contact from "./Contact";
import Header from "../common/Header";
import Footer from "../common/Footer";

export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" exact component={News} />
          <Route path="/intheaters" exact component={InTheaters} />
          <Route path="/comingsoon" exact component={ComingSoon} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
