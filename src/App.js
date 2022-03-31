
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NasaPhoto from './components/NasaPhoto'
import "./styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<NasaPhoto />} path="/nasaphoto" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
