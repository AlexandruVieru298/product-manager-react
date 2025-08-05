import "./ProductStats.css";

export default function ProductStats({ list }) {
  const media =
    list.length > 0
      ? list.reduce((total, product) => total + product.price, 0) / list.length
      : 0;

  const noStockProduct =
    list.find((product) => product.stock === 0)?.name ||
    "No products without stock";

  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">
        <h5 className="card-title mb-3">
          <i className="bi bi-graph-up-arrow me-2"></i> Statistics
        </h5>

        <div className="d-flex justify-content-between mb-2">
          <span className="fw-bold">Average Price:</span>
          <span className="text-primary">{media.toFixed(2)} RON</span>
        </div>

        <div className="d-flex justify-content-between">
          <span className="fw-bold">First Product Out of Stock:</span>
          <span
            className={
              noStockProduct === "No products without stock"
                ? "text-success"
                : "text-danger"
            }
          >
            {noStockProduct}
          </span>
        </div>
      </div>
    </div>
  );
}
