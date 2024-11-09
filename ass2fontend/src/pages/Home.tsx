import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { Users } from "../interface/User";
import { Products } from "../interface/Product";
import { Cart } from "../interface/Cart";

const Home: React.FC = () => {
  const { state } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>(""); // Thêm trạng thái để lưu từ khóa tìm kiếm
  const [user, setUser] = useState({} as Users);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(user);
  }, []);
  const addToCart = (product: Products) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]"); // Use an empty array
    const index = cart.findIndex((item: Cart) => item._id === product._id);
    if (index === -1) {
      cart.push({ ...product, quantity: 1 });
    } else {
      cart[index].quantity += 1;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  // Lấy các danh mục sản phẩm duy nhất
  const categories = Array.from(
    new Set(state.products.map((product) => product.categoryId?.title))
  );

  // Lọc sản phẩm theo danh mục và từ khóa tìm kiếm
  const filteredProducts = state.products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.categoryId?.title === selectedCategory
      : true;

    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container">
      {/* Banner Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="banner">
            <img
              src="https://thietkehaithanh.com/wp-content/uploads/2019/06/thietkehaithanh-banner-1-1.jpg"
              alt="Promotional Banner"
              className="img-fluid"
              width={2000}
            />
          </div>
        </div>
      </div>

      <div className="row">
        {/* Sidebar for Categories */}
        <div className="col-md-3">
          {/* Thanh tìm kiếm sản phẩm */}
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Cập nhật từ khóa tìm kiếm
          />

          {/* Danh mục sản phẩm */}
          <ul className="list-group mb-4">
            <li
              className={`list-group-item ${!selectedCategory ? "active" : ""}`}
              onClick={() => setSelectedCategory("")}
              style={{ cursor: "pointer" }}
            >
              Tất cả sản phẩm
            </li>
            {categories.map((categoryName) => (
              <li
                key={categoryName}
                className={`list-group-item ${
                  selectedCategory === categoryName ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(categoryName)}
                style={{ cursor: "pointer" }}
              >
                {categoryName}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="col-md-9">
          <h5 className="text-center">Sản Phẩm mới nhất</h5>

          {/* Product Grid */}
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                >
                  <div className="card h-100 shadow border-light">
                    {/* Product Image */}
                    <div className="text-center p-3">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="card-img-top"
                        style={{ maxHeight: "200px", objectFit: "contain" }}
                      />
                    </div>

                    {/* Product Info */}
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text-center">
                        {product.title}
                      </h5>
                      <p className="card-text text-center text-muted">
                        Giá: {product.price} đ
                      </p>

                      {/* Link to Product Detail */}
                      <Link
                        to={`/detail/${product._id}`}
                        className="btn btn-primary mt-auto w-100"
                      >
                        Xem chi tiết
                      </Link>

                      <button
                        className="btn btn-danger"
                        onClick={
                          user?.email
                            ? () => addToCart(product)
                            : () => alert("Please login to add to cart")
                        }
                      >
                        Add to card
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">
                Không có sản phẩm nào được tìm thấy.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
