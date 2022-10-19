import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const { logIn, forgotPassword, googleSignIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("Login Success full");
        setError("");
        navigate("/home");
      })
      .catch((error) => {
        console.error("error: ", error);
        setError(error.message);
        setSuccess("");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Success");
        navigate("/");
      })
      .catch((error) => {
        console.error("error: ", error);
        setError(error.message);
        setSuccess("");
      });
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    console.log(email);

    forgotPassword(email)
      .then(() => {
        toast.success("Password reset email sent!");
        navigate("/");
      })
      .catch((error) => {
        console.error("error: ", error);
        toast.error(error.message);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="min-h-screen max-w-4xl mx-auto bg-base-200 pb-4 lg:pb-28">
        <div className="form-control mt-6">
          <p onClick={handleGoogleSignIn} className="btn btn-primary">
            Continue With Google
          </p>
        </div>
        <div className="text-center mb-3">
          <h1 className="text-lg font-bold">OR</h1>
          <h1 className="text-xl font-bold">Register now!</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="card mx-auto flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <label
                  htmlFor="modal-forgot-password"
                  className="label-text link-hover cursor-pointer modal-button pt-2 pb-2"
                >
                  Forgot password?
                </label>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="mb-2">
              New to site?
              <Link to="/register" className="link link-hover ml-2">
                Please Register
              </Link>
            </p>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && (
              <p className="text-center">
                <span className="text-green-500 mr-2">{success}</span>
                <Link to="/login" className="link link-hover">
                  Please Login
                </Link>
              </p>
            )}
          </div>
        </form>
      </div>

      <input
        type="checkbox"
        id="modal-forgot-password"
        className="modal-toggle"
      />
      <label htmlFor="modal-forgot-password" className="modal cursor-pointer">
        <label className="modal-box relative">
          <h3 className="text-lg font-bold">Type Your Email !</h3>
          <form onSubmit={handleForgotPassword}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send</button>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
};

export default Login;
