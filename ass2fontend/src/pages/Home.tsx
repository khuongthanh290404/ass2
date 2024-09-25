import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { state } = useContext(ProductContext);

  return (
    <div className="mx-44 mt-4">
      <div className="flex flex-wrap gap-4 justify-between">
        {state.products.map((product) => (
          <div
            key={product._id}
            className="product bg-gray-50 flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)]"
          >
            <Link to={`/detail/${product._id}`}>
              <img className="h-64 w-full" src={product.thumbnail} alt="" />
            </Link>
            <p className="title ml-2 font-semibold">{product.title}</p>
            <p className="description ml-2 text-sm py-1 text-gray-400 ">
              {product.description?.slice(0, 19)}
            </p>
            <p className="price text-lg text-red-500 font-semibold py-2 ml-2">
              {`${product.price} $`}
            </p>

            <div>
              <button
                className="border border-black rounded py-2 px-4 ml-3 bg-white hover:text-black hover:bg-black transition-all duration-1000
                   hover:bg-black mr-3"
              >
                <i className="fa-regular fa-heart text-black hover:text-white"></i>
              </button>
              <button className="mb-2 border border-black font-semibold bg-white rounded text-black py-2 px-10 ml-2 whitespace-nowrap hover:bg-black transition-all duration-1000 hover:text-white ">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
