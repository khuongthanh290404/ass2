import Cart from "../model/cart";
import Product from "../model/product";

export const getAllCart = async (request, response) => {
  try {
    const carts = await Cart.find().populate({
      path: "products",
      populate: {
        path: "product",
        model: Product,
      },
    });
    response.status(200).json(carts);
  } catch (error) {
    console.log(error);
  }
};
export const getCartDetail = async (request, response) => {
  try {
    const carts = await Cart.findById(request.params.id);
    response.status(200).json(carts);
  } catch (error) {
    console.log(error);
  }
};

export const createCart = async (request, response) => {
  try {
    const { quantity, user, product } = request.body;
    const cart = await Cart.findOne({ user });
    // if (cart) throw new ApiError(404, "Cart Existed, You can only Update Cart");
    const newCart = await Cart.create({
      user,
      products: [
        {
          product,
          quantity,
        },
      ],
    });
    response.status(200).json({
      message: "Add Cart Successfull",
      data: newCart,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCart = async (request, response) => {
  try {
    const cart = await Cart.findByIdAndDelete(request.params.id);
    response.status(200).json(cart);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
};
