import { Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import CartPage from './pages/CartPage';
import PizzaPage from 'pages/PizzaPage';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route index path="/" element={<PizzaPage />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
