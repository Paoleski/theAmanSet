import { AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import './styles/App.css';


function App() {
  return (
    <div className="App">
     
        <AnimatePresence>
          <Home />
        </AnimatePresence>
     
    </div>
  );
}

export default App;
