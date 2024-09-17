// import { Products } from "./../interface/Product";
import { Categorys } from "./../interface/Category";
type State = {
  categorys: Categorys[];
};

type Action =
  | { type: "GET_CATEGORY"; payload: Categorys[] }
  | { type: "ADD_CATEGORY"; payload: Categorys }
  | { type: "REMOVE_CATEGORY"; payload: string }
  | { type: "UPDATE_CATEGORY"; payload: Categorys };
// Payload là ID sản phẩm (string)

const CategoryReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "GET_CATEGORY":
      return {
        ...state,
        categorys: action.payload,
      };
    case "ADD_CATEGORY":
      return {
        ...state,
        categorys: [...state.categorys, action.payload],
      };

    case "UPDATE_CATEGORY":
      return {
        ...state,
        categorys: state.categorys.map((category) =>
          category._id === action.payload._id ? action.payload : category
        ),
      };
    case "REMOVE_CATEGORY":
      return {
        ...state,
        categorys: state.categorys.filter(
          (category) => category._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default CategoryReducer;
