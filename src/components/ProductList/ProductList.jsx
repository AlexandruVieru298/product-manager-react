import "./ProductList.css";

export default function ProductList({
  list,
  selectatedItems,
  toggleSelect,
  deleteSelected,
  sortProduct,
}) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title mb-0">
            <i className="bi bi-box-seam me-2"></i> Products
          </h5>
          <div>
            <button
              className="btn btn-outline-danger btn-sm me-2"
              onClick={deleteSelected}
            >
              Delete Selected
            </button>
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={sortProduct}
            >
              Sort by Price
            </button>
          </div>
        </div>

        <ul className="list-group">
          {list.map((product) => (
            <li
              key={product.id}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                selectatedItems.includes(product.id) ? "list-group-item-warning" : ""
              }`}
            >
              <div>
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  checked={selectatedItems.includes(product.id)}
                  onChange={() => toggleSelect(product.id)}
                />
                <strong>{product.name}</strong> – {product.price} RON
              </div>
              <span
                className={`badge ${
                  product.stock === 0 ? "bg-danger" : "bg-success"
                }`}
              >
                Stock: {product.stock}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
