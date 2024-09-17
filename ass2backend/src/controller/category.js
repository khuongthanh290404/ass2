import Category from "../model/category";
export const getAll = async (req, res) => {
  try {
    const data = await Category.find().populate("products");
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "No category found" });
    }
    return res.status(200).json({ message: "category has been", data: data });
  } catch (error) {
    return res.status(500).json({
      title: error.title,
      message: error.message,
    });
  }
};

export const getDetail = async (req, res) => {
  try {
    const data = await Category.findById(req.params.id).populate("products");
    if (!data) {
      return res.status(404).json({ message: "No category found" });
    }
    return res.status(200).json({ message: "category has been", data: data });
  } catch (error) {
    return res.status(500).json({
      title: error.title,
      message: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const data = await Category(req.body).save();
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "category susses" });
    }
    return res.status(200).json({ message: "create category", data: data });
  } catch (error) {
    return res.status(500).json({
      title: error.title,
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const data = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "update category not" });
    }
    return res.status(200).json({ message: "category has been", data: data });
  } catch (error) {
    return res.status(500).json({
      title: error.title,
      message: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const data = await Category.findByIdAndDelete(req.params.id);
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "delete category not" });
    }
    return res.status(200).json({ message: "category has been", data: data });
  } catch (error) {
    return res.status(500).json({
      title: error.title,
      message: error.message,
    });
  }
};
