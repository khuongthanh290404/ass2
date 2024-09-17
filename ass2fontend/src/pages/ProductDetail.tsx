import React, { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { state, getDetail } = useContext(ProductContext);
  const { id } = useParams();

  useEffect(() => {
    getDetail(id!);
  }, [id]);

  return (
    <div>
      <div className="row">
        <h1>chi tiết sản phẩm</h1>
        {state.selectedProduct && (
          <h2>
            <img src={state.selectedProduct.thumbnail} alt="" />
          </h2>
        )}
        {state.selectedProduct && <h2>{state.selectedProduct.title}</h2>}
        {state.selectedProduct && <h2>{state.selectedProduct.price}</h2>}
      </div>
    </div>
  );
};

export default ProductDetail;
