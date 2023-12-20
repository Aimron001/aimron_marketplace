import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import Layout from './components/Layout';
import BuyersLayout from './components/BuyersLayout';
import MonthlyGoals from './components/MonthlyGoals';
import Purchases from './components/Purchases';
import Expenses from './components/Expenses';
import ShoppingList from './components/ShoppingList';
import BuyerAccount from './components/BuyersAccount';
import Login from './pages/Login';
import SellerRegistration from './pages/SellerRegistration';
import BuyerRegistration from './pages/BuyerRegistration';
import BuyerOrSeller from './pages/BuyerOrSeller';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home />} />
          <Route path='products' element={ <Products />} />
          <Route path='services' element={ <Services />} />
          <Route path='login' element={ <Login />} />
          <Route path='seller-registration' element={ <SellerRegistration />} />
          <Route path='buyer-registration' element={ <BuyerRegistration />} />
          <Route path='buyer-or-seller' element={ <BuyerOrSeller />} />

          <Route path='dashboard' element={ <BuyersLayout /> } >
            <Route index element={ <MonthlyGoals /> } />
            <Route path='purchases' element={ <Purchases /> } />
            <Route path='expenses' element={ <Expenses /> } />
            <Route path='shopping-list' element={ <ShoppingList /> } />
            <Route path='buyer-account' element={ <BuyerAccount /> } />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
