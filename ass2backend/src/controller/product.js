import { request, response } from "express";
import Product from "../model/product";

export const getAllProducts = async (request, response) => {
  try {
    const data = await Product.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
export const getProductsById = async (request, response) => {
  try {
    const data = await Product.findById(request.params.id);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
export const createProducts = async (request, response) => {
  try {
    const data = await Product(request.body).save();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
export const updateProducts = async (request, response) => {
  try {
    const data = await Product.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true }
    );
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
export const deleteProducts = async (request, response) => {
  try {
    const data = await Product.findOneAndDelete({ _id: request.params.id });
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
