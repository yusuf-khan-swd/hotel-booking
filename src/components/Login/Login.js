import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { logIn } = useContext(AuthContext);

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
      })
      .catch((error) => {
        console.error("error: ", error);
        setError(error.message);
        setSuccess("");
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border">
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
                    <button href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </button>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <p className="mb-2">
                  New to site?
                  <Link to="/register" className="link link-hover ml-2">
                    Register Now
                  </Link>
                </p>
                {error && <p className="text-red-500 text-center">{error}</p>}
                {success && (
                  <p className="text-center text-green-500">{success}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
