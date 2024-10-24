import { useForm } from "react-hook-form";
import { Users } from "../interface/User";
import api from "../axios";
import { useNavigate } from "react-router-dom"; // Import Bootstrap CSS
import Swal from "sweetalert2";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Users>();
  const nav = useNavigate();

  const onSubmit = async (user: Users) => {
    try {
      const { data } = await api.post(`/register`, user);
      console.log(data);
      Swal.fire({
        title: "Success",
        text: "Đăng ký thành công",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        nav("/login");
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Có lỗi xảy ra trong quá trình đăng ký",
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
              <h3 className="text-center mb-4">Register</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.username ? "is-invalid" : ""
                    }`}
                    {...register("username", {
                      required: "Username is required",
                    })}
                    placeholder="Enter your username"
                  />
                  {errors.username && (
                    <div className="invalid-feedback">
                      {errors.username.message}
                    </div>
                  )}
                </div>

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
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Image
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.image ? "is-invalid" : ""
                    }`}
                    {...register("image", { required: "Image is required" })} // Mark as required
                    placeholder="Enter image URL"
                  />
                  {errors.image && (
                    <div className="invalid-feedback">
                      {errors.image.message}
                    </div>
                  )}
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
