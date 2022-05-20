import React from "react";
// import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (user) {
    console.log(user);
  }

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                {...register("email", {

                  required:{
                    value:true,
                    message:"Please file the Email field"
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please provide correct email ",                   },
                })}
                type="email"
                placeholder="your email"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
              {errors.email?.type === 'required' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
              {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Paasword</span>
              </label>
              <input
                {...register("password", {

                  required:{
                    value:true,
                    message:"Please file the password field"
                  },
                  minLength: {
                    value: 6,
                    message: "Please provide six more digit  ",                   },
                })}
                type="password"
                placeholder="your password"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
              {errors.password?.type === 'required' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
              {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                
              </label>
            </div>

       

            <input type="submit" className="btn w-full max-w-xs  btn-secondary" value="Login"/>
          </form>

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

export default Login;
