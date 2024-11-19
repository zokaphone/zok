import { Routes, Route } from 'react-router-dom';
import './App.css';

//components
import Login from './Components/Login/Login';

function App() {
  return (
    <Routes>
      {/* Pass the components inside JSX */}
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
