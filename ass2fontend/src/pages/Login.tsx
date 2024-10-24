import { useForm } from "react-hook-form";
import { Users } from "../interface/User";
import api from "../axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Users>();
  const nav = useNavigate();

  const onSubmit = async (user: Users) => {
    try {
      const res = await api.post(`/login`, user);
      localStorage.setItem(`user`, JSON.stringify(res.data.user));
      localStorage.setItem(`Token`, res.data.token);
      Swal.fire({
        title: "Success",
        text: "Đăng nhập thành công",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        nav("/");
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Đăng nhập thất bại",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="text-center mb-4">Login</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    {...register("email", { required: "Email is required" })}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    {...register("password", {
                      required: "Password is required",
                    })}
                    placeholder="Enter your password"
                  />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )}
                </div>
                <div className="text-center mt-3">
                  <br />
                  <Link to="/">Back to Home</Link>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
