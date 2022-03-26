import './App.css';
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Home from './pages/Home'
import Other from './pages/Other'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/other" element={<Other />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
