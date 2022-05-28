import './App.css';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Cart from './Components/Cart';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";


function App() {
  return (
    <>
     <Router>
        <Switch>
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/" component={Home} /> 
        </Switch>
     </Router>
    

    </>
  );
}

export default App;
