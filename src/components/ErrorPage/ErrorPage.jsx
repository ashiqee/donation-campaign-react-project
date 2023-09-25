import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl uppercase font-bold">
              404- Page not found
            </h1>
            <p className="py-6">This page you are looking for not available</p>
            <Link to="/">
              <button className="btn bg-rose-500 btn-primary">
                Go Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
