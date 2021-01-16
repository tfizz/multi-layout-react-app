import './App.scss';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import DefaultRoutes from './routes/DefaultRoutes';
import AdminRoutes from './routes/AdminRoutes';

import Home from './pages/main/Home';
import About from './pages/main/About';
import Admin from './pages/admin';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <DefaultRoutes exact path="/" title="Home" component={Home}/>  
          <DefaultRoutes path="/about" title="About" component={About}/>  
          <AdminRoutes path="/admin" component={Admin} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
