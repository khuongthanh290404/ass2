import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { state, getDetail } = useContext(ProductContext);
  const { id } = useParams();

  useEffect(() => {
    getDetail(id!);
  }, [id]);

  return (
    <div className="container my-5">
      {state.selectedProduct && (
        <div className="row">
          <div className="col-md-6">
            <img
              src={state.selectedProduct.thumbnail}
              alt={state.selectedProduct.title}
              width={300}
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-5">{state.selectedProduct.title}</h1>
            <h3 className="text-danger mb-4">
              Price: {state.selectedProduct.price}đ
            </h3>
            <p>{state.selectedProduct.description}</p>
            <button className="btn btn-primary btn-lg">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
