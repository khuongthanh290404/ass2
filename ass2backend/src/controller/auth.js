import User from "../model/auth";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const Register = async (request, response) => {
  const { username, email, password, role, image } = request.body;
  const exisUser = await User.findOne({ email: email });
  if (exisUser) {
    return response.status(400).json({ message: "email đã tồn tại" });
  }
  const hassPassword = await bcryptjs.hash(password, 10);
  const user = await User({
    username,
    email,
    password: hassPassword,
    role,
    image,
  }).save();
  response.status(200).json({ message: "đăng ký thành công", user: user });
};

export const Login = async (request, response) => {
  const { email, password } = request.body;
  const exisUser = await User.findOne({ email: email });
  if (!exisUser) {
    return response.status(400).json({ message: "email ko ton tai" });
  }
  const validPassword = await bcryptjs.compare(password, exisUser.password);
  if (!validPassword) {
    return response.status(400).json({ message: "mat khau ko đúng" });
  }
  const token = jwt.sign({ id: exisUser._id }, "123456", { expiresIn: "1h" });
  response.cookie("token", token, { httpOnly: true });
  exisUser.password = undefined;
  response
    .status(200)
    .json({ message: "đăng nhập thành công", user: exisUser, token });
};
export const getUser = async (request, response) => {
  try {
    const data = await User.find();
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
export const deletetUser = async (request, response) => {
  try {
    const data = await User.findByIdAndDelete({ _id: request.params.id });
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
