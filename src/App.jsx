
import './App.scss';
import Header from './components/header/Header';
import ProductList from './components/products/ProductList';
import { products, categories } from './helper/data';

function App() {
  return (
    <div className="App">
      <Header categories={categories} title="All Electronics" />
      <ProductList products={products} />
    </div>
  );
}

export default App;