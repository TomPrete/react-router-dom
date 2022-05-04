import './App.css';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import ContactPage from './components/ContactPage';
import Post from './components/Post';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/contact-page' element={<ContactPage />} />
          <Route path='/posts/:id' element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
