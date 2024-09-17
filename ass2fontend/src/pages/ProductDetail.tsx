import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { state, getDetail } = useContext(ProductContext);
  const { id } = useParams();

  useEffect(() => {
    getDetail(id!);
  }, [id]);

  return (
    <div className="mt-10">
      {state.selectedProduct && (
        <>
          {' '}
          <div className="container mx-auto">
            <div className="bg-white shadow-md rounded-lg p-6 md:flex">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img
                  src={state.selectedProduct.thumbnail}
                  alt="Product Image"
                  className="rounded-lg w-96 h-96 object-cover"
                />
              </div>

              <div className="md:w-1/2 md:pl-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  {state.selectedProduct.title}
                </h1>
                <p className="text-gray-600 mb-4">
                  {state.selectedProduct.description}
                </p>

                <div className="text-2xl font-semibold text-green-600 mb-4">
                  ${state.selectedProduct.price}
                </div>

                {/* Thuộc tính sản phẩm */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500">Chọn kích cỡ:</p>
                  <div className="flex space-x-3 mt-2">
                    <button className="px-4 py-2 border rounded-lg hover:bg-gray-200">
                      S
                    </button>
                    <button className="px-4 py-2 border rounded-lg hover:bg-gray-200">
                      M
                    </button>
                    <button className="px-4 py-2 border rounded-lg hover:bg-gray-200">
                      L
                    </button>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
