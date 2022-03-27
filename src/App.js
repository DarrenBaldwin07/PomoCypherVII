
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Home from './pages/Home'
import Pomodoro from './pages/Pomodoro'
import Layout from './components/Layout'



function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/pomodoro" element={<Pomodoro />} /> 
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
