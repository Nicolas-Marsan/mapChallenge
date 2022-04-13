import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
        

      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>

      
      </div>
  );
}

export default App;
