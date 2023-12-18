import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import Layout from './components/Layout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home />} />
          <Route path='products' element={ <Products />} />
          <Route path='services' element={ <Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
