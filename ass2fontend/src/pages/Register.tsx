import React from "react";
import { useForm } from "react-hook-form";
import { Users } from "../interface/User";
import api from "../axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Users>();
  const nav = useNavigate();

  const onSubmit = async (user: Users) => {
    const { data } = await api.post(`/register`, user);
    console.log(data);
    alert("Đăng ký thành công!");
    nav("/login");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          className="form-control"
          {...register("username", { required: "User is required" })}
        />
        {errors.username && (
          <p className="text-danger">{errors.username.message}</p>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-control"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}

        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
};

export default Register;
