import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// We use capital 'P' because most React templates use 'Pages' 
// If your folder is lowercase, change these to lowercase.
import Home from "./pages/home/Home"; 
import Search from "./pages/search/Search"; 
import Watch from "./pages/watch/Watch"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watch/:id" element={<Watch />} />
      </Routes>
    </Router>
  );
}

export default App;
