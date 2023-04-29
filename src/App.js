import Container from "./components/Container";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import PizzasList from './components/PizzasList';
import Header from "./components/Header";
import CartPage from "./pages/CartPage";


function App() {


  return (
    <Container>
            <Header/>

      <Routes>
      <Route index path="/" element={<PizzasList/>} />
      <Route path="/Cart" element={<CartPage/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
