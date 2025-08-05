import { useState } from "react";
import "./ProductForm.css";

export default function ProductForm({
  newName,
  setNewName,
  newPrice,
  setNewPrice,
  newStock,
  setNewStock,
  createProduct,
}) {
  const [errors, setErrors] = useState({ name: "", price: "", stock: "" });

  const handleCreate = () => {
    let valid = true;
    let newErrors = { name: "", price: "", stock: "" };

    if (!newName.trim()) {
      newErrors.name = "Product name is required.";
      valid = false;
    }

    const priceValue = parseFloat(newPrice);
    if (isNaN(priceValue) || priceValue <= 0) {
      newErrors.price = "Price must be a positive number.";
      valid = false;
    }

    const stockValue = parseInt(newStock);
    if (isNaN(stockValue) || stockValue < 0) {
      newErrors.stock = "Stock must be 0 or a positive integer.";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    createProduct(newName, newPrice, newStock);
    setNewName("");
    setNewPrice("");
    setNewStock("");
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-3">
          <i className="bi bi-plus-circle me-2"></i>Add Product
        </h5>

        <input
          type="text"
          className={`form-control mb-1 ${errors.name ? "is-invalid" : ""}`}
          placeholder="Product Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        {errors.name && <div className="text-danger mb-2">{errors.name}</div>}

        <input
          type="number"
          className={`form-control mb-1 ${errors.price ? "is-invalid" : ""}`}
          placeholder="Price"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />
        {errors.price && <div className="text-danger mb-2">{errors.price}</div>}

        <input
          type="number"
          className={`form-control mb-2 ${errors.stock ? "is-invalid" : ""}`}
          placeholder="Stock"
          value={newStock}
          onChange={(e) => setNewStock(e.target.value)}
        />
        {errors.stock && <div className="text-danger mb-2">{errors.stock}</div>}

        <button className="btn btn-primary w-100" onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
}
