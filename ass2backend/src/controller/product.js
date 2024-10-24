// import { request, response } from "express";
import Product from "../model/product";
import Category from "../model/category";
export const getAllProducts = async (request, response) => {
  try {
    const data = await Product.find({}).populate("categoryId");
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const getProductsById = async (request, response) => {
  try {
    const data = await Product.findById(request.params.id).populate(
      "categoryId"
    );

    response.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
export const createProducts = async (request, response) => {
  try {
    const data = await Product(request.body).save();
    response.status(200).json(data);

    const updateCategory = await Category.findByIdAndUpdate(data.categoryId, {
      $addtoSet: {
        products: data._id,
      },
    });
    if (!updateCategory) {
      return response.status(404).json({ message: "update  notcategory" });
    }

    return response
      .status(200)
      .json({ message: "update category successfully", products: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (request, response) => {
  try {
    const data = await Product.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true }
    );
    response
      .status(200)
      .json({ dataUpdated: data, message: "Product updated successfully" });

    const updateCategory = await Category.findByIdAndUpdate(data.categoryId, {
      $addtoSet: {
        products: data._id,
      },
    });
    if (!updateCategory) {
      return response.status(404).json({ message: "update  notcategory" });
    }

    return response
      .status(200)
      .json({ message: "update category successfully", products: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (request, response) => {
  try {
    const data = await Product.findOneAndDelete({ _id: request.params.id });
    response.status(200).json({ data, message: "Deleted successfully" });

    const updateCategory = await Category.findByIdAndUpdate(data.categoryId, {
      $addtoSet: {
        products: data._id,
      },
    });
    if (!updateCategory) {
      return response.status(404).json({ message: "update  notcategory" });
    }

    return response
      .status(200)
      .json({ message: "update category successfully", products: data });
  } catch (error) {
    console.log(error);
  }
};
