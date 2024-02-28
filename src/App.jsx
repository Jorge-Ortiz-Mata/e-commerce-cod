import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPages from './pages/Layout';
import HomePage from './pages/Home';
import NewProductPage from './pages/NewProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPages />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<NewProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
