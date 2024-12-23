import {Routes, Route} from 'react-router';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import AboutPage from '../pages/About';
import MainLayout from '../layouts/MainLayout';

function Router() {
  return (
    <Routes>
        <Route element={<MainLayout/>}>
        <Route path='/' element={<HomePage />} />
        <Route path='/Products'  element= {<ProductsPage />} />
        <Route path='/About'  element= {<AboutPage />} />
        </Route>
    </Routes>
  )
}

export default Router 