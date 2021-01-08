import { AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import './styles/App.css';
import { Breakpoint, BreakpointProvider } from 'react-socks';

function App() {
  return (
    <div className="App">
      <BreakpointProvider>
        <AnimatePresence>
          <Home />
        </AnimatePresence>
      </BreakpointProvider>
    </div>
  );
}

export default App;
