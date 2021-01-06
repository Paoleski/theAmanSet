import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './components/Home';
import './styles/App.css';

function App() {
  const location = useLocation()

  return (
    <div className="App">
      <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
