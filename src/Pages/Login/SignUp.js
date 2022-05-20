import { async } from "@firebase/util";
import React from "react";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleUserloading, googleUsererror] =
    useSignInWithGoogle(auth);

  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
  const navigate =useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let signInrror;
  if (googleUser) {
    console.log(user);
  }

  if (loading || googleUserloading || updating) {
    return <Loading></Loading>;
  }

  if (error || googleUsererror || updatingError) {
    signInrror = (
      <p className="text-red-500 ">
        {error.message || googleUsererror.message || updatingError.message}
      </p>
    );
  }

  const onSubmit = async (data) => {
    console.log(data);

    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update done");
    navigate("/appoinment")
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">SignUp</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please file the name field",
                  },
                })}
                type="text"
                placeholder="your name"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.name?.type === "required" && (
                  <span class="label-text-alt text-red-600">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please file the Email field",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please provide correct email ",
                  },
                })}
                type="email"
                placeholder="your email"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span class="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Paasword</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please file the password field",
                  },
                  minLength: {
                    value: 6,
                    message: "Please provide six more digit  ",
                  },
                })}
                type="password"
                placeholder="your password"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.password?.type === "required" && (
                  <span class="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span class="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInrror}

            <input
              type="submit"
              className="btn w-full max-w-xs  btn-secondary"
              value="SignUp"
            />
          </form>
          <p>
            <small className="text-primary">
              Already Account?{" "}
              <Link className="btn btn-link text-primary" to="/login">
                Login
              </Link>
            </small>
          </p>

          <div class="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            class="btn btn-outline btn-accent"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
