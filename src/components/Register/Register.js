import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const { createUser, setUserProfile, googleSignIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, photoURL, email, password, confirm);

    if (password !== confirm) {
      setSuccess("");
      return setError("Password did not matched.");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUserProfile(name, photoURL)
          .then(() => { })
          .catch((e) => console.error(e))
        console.log(user);
        setSuccess("Register is success.");
        setError("");
        toast.success('Registration is Success!');
        form.reset();
      })
      .catch((error) => {
        console.error("error: ", error);
        setError(error.message);
        setSuccess("");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('Success');
        navigate('/');
      })
      .catch(error => {
        console.error('error: ', error)
        setError(error.message);
        setSuccess('');
      })
  };

  return (
    <div className="container mx-auto lg:mb-24">
      <div className="min-h-screen max-w-4xl mx-auto bg-base-200 pb-4 lg:pb-28">
        <div className="form-control mt-6">
          <p onClick={handleGoogleSignIn} className="btn btn-primary">Continue With Google</p>
        </div>
        <div className="text-center mb-3">
          <h1 className="text-lg font-bold">OR</h1>
          <h1 className="text-xl font-bold">Register now!</h1>
        </div>
        <form onSubmit={handleSubmit} className="card mx-auto flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="photoURL"
                className="input input-bordered"
              />
            </div>
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirm"
                placeholder="confirm password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p className="mb-2">
              Already have an Account?
              <Link to="/login" className="link link-hover ml-2">
                Please Login
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
    </div>
  );
};

export default Register;
