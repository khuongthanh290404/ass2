import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { state } = useContext(ProductContext);

  return (
    <div className="container mt-4">
      <div className="row">
        {state.products.map((p) => (
          <div key={p._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              {/* Image section */}
              <div className="text-center p-3">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="card-img-top"
                  style={{ maxHeight: "300px", objectFit: "cover" }}
                />
              </div>

              {/* Product details */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{p.title}</h5>
                <p className="card-text text-center text-muted">
                  Giá: {p.price} đ
                </p>

                {/* Call to action button */}
                <Link
                  to={`/detail/${p._id}`}
                  className="btn btn-primary mt-auto w-100"
                >
                  Mua ngay
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
