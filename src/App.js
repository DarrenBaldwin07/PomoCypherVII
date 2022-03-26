
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Home from './pages/Home'
import Pomodoro from './pages/Pomodoro'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/pomodoro" element={<Pomodoro />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
