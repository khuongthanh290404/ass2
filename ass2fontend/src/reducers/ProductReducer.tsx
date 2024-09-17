import { Products } from "./../interface/Product";
type State = {
  products: Products[];
  selectedProduct?: Products;
};

type Action =
  | { type: "GET_PRODUCTS"; payload: Products[] }
  | { type: "ADD_PRODUCTS"; payload: Products }
  | { type: "REMOVE_PRODUCTS"; payload: string }
  | { type: "UPDATE_PRODUCTS"; payload: Products }
  | { type: "SET_SELECTED_PRODUCT"; payload: Products | undefined };

const ProductReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case "UPDATE_PRODUCTS":
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        ),
      };
    case "REMOVE_PRODUCTS":
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };
    case "SET_SELECTED_PRODUCT":
      return { ...state, selectedProduct: action.payload };

    default:
      return state;
  }
};

export default ProductReducer;
