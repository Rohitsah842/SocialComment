import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar/Sidebar.js';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
