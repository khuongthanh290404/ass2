import User from '../model/auth';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const Register = async (request, response) => {
  const { username, email, password } = request.body;
  const exisUser = await User.findOne({ email: email });
  if (exisUser) {
    return response.status(400).json({ message: 'email đã tồn tại' });
  }
  if (!request.body.role) {
    request.body.role = 'member';
  }
  const hassPassword = await bcryptjs.hash(password, 10);
  const user = await User({ username, email, password: hassPassword }).save();
  response.status(200).json({ message: 'đăng ký thành công' });
};
export const Login = async (request, response) => {
  const { email, password } = request.body;
  const exisUser = await User.findOne({ email: email });
  if (!exisUser) {
    return response.status(400).json({ message: 'email ko ton tai' });
  }
  const validPassword = await bcryptjs.compare(password, exisUser.password);

  const accessToken = jwt.sign({ _id: exisUser._id }, 'access_token', {
    expiresIn: 360000
  });
  if (!validPassword) {
    return response.status(400).json({ message: 'mat khau ko đúng' });
  }
  exisUser.password = undefined;
  response.status(200).json({
    message: 'đăng nhập thành công',
    user: exisUser,
    accessToken
  });
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
