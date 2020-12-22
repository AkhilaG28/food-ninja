import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <div className="flex justify-evenly md:justify-end">
        <Link to="/signin">Sign in</Link>
        <Link to="/signup" className="mx-6">
          Sign up
        </Link>
      </div>
      <div>
        <h2 className="font-semibold">Recipes</h2>
        <h3 className="font-semibold">For Ninjas</h3>
      </div>
      <div>
        <h4 className="border-b mb-5 mt-2 text-secondary-100 text-8xl font-body">
          Latest Recipes
        </h4>
      </div>
    </div>
  );
}

export default Main;
