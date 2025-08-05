import { useState } from "react";
import ProductForm from "./components/ProductForm/ProductForm";
import ProductList from "./components/ProductList/ProductList";
import ProductStats from "./components/ProductStats/ProductStats";
import "./App.css";

function App() {
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newStock, setNewStock] = useState("");

  const [list, setList] = useState([
    { id: 1, name: "Milk", price: 5.5, stock: 12 },
    { id: 2, name: "Bread", price: 3.2, stock: 0 },
    { id: 3, name: "Egg", price: 8.9, stock: 6 },
  ]);

  const [selectatedItems, setSelectatedItems] = useState([]);

  const createProduct = (name, price, stock) => {
    const newProduct = {
      id: list.length + 1,
      name,
      price: parseFloat(price),
      stock: parseInt(stock),
    };
    setList([...list, newProduct]);
  };

  const toggleSelect = (id) => {
    if (selectatedItems.includes(id)) {
      setSelectatedItems(selectatedItems.filter((item) => item !== id));
    } else {
      setSelectatedItems([...selectatedItems, id]);
    }
  };

  const deleteSelected = () => {
    setList(list.filter((produs) => !selectatedItems.includes(produs.id)));
    setSelectatedItems([]);
  };

  const sortProduct = () => {
    setList([...list].sort((a, b) => a.price - b.price));
  };

  return (
    <div className="app-wrapper">
      <div className="container my-5">
        <h1 className="text-center mb-4 text-light">Product Manager</h1>

        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <ProductForm
              newName={newName}
              setNewName={setNewName}
              newPrice={newPrice}
              setNewPrice={setNewPrice}
              newStock={newStock}
              setNewStock={setNewStock}
              createProduct={createProduct}
            />
          </div>

          <div className="col-md-6">
            <ProductList
              list={list}
              selectatedItems={selectatedItems}
              toggleSelect={toggleSelect}
              deleteSelected={deleteSelected}
              sortProduct={sortProduct}
            />
            <ProductStats list={list} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
