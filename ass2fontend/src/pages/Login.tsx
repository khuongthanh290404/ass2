import React from "react";
import { useForm } from "react-hook-form";
import { Users } from "../interface/User";
import api from "../axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Users>();
  const nav = useNavigate();
  const onSubmit = async (user: Users) => {
    await api.post(`/login`, user);
    alert("Đăng nhập thành công!");
    nav("/");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">email</label>
        <input
          type="text"
          className="form-control"
          {...register("email", { required: "email is required" })}
        />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
        <label htmlFor="password">password</label>
        <input
          type="password"
          className="form-control"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
        <button className="btn btn-primary w-100">login</button>
      </form>
    </div>
  );
};

export default Login;
