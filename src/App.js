import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import Layout from './components/Layout';
import BuyersLayout from './components/BuyersLayout';
import MonthlyGoals from './components/MonthlyGoals';
import Purchases from './components/Purchases';
import BuyerExpenses from './components/BuyerExpenses';
import ShoppingList from './components/ShoppingList';
import BuyerAccount from './components/BuyersAccount';
import Login from './pages/Login';
import SellerRegistration from './pages/SellerRegistration';
import BuyerRegistration from './pages/BuyerRegistration';
import SignUp from './pages/SignUp';
import SellersLayout from './components/SellersLayout';
import SellerDashboard from './components/SellerDashboard';
import Sales from './components/Sales';
import Stock from './components/Stock';
import Employees from './components/Employees';
import ShopInfo from './components/ShopInfo';
import SellerExpenses from './components/SellerExpenses'
import Orders from './components/Orders'
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
          <Route path='sign-up' element={ <SignUp />} />

          <Route path='buyer-dashboard' element={ <BuyersLayout /> } >
            <Route index element={ <MonthlyGoals /> } />
            <Route path='purchases' element={ <Purchases /> } />
            <Route path='expenses' element={ <BuyerExpenses /> } />
            <Route path='shopping-list' element={ <ShoppingList /> } />
            <Route path='buyer-account' element={ <BuyerAccount /> } />
          </Route>
          <Route path='seller-dashboard' element={ <SellersLayout /> } >
            <Route index element={ <SellerDashboard /> } />
            <Route path='orders' element={ <Orders /> } />
            <Route path='sales' element={ <Sales /> } />
            <Route path='stock' element={ <Stock /> } />
            <Route path="expenses" element={ <SellerExpenses /> } />
            <Route path='employees' element={ <Employees /> } />
            <Route path='shop-info' element={ <ShopInfo /> } />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
