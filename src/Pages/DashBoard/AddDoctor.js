import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch(`http://localhost:5000/service`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const onSubmit = (data) => {
    console.log(data);

    // navigate("/appoinment")
  };
  return (
    <div>
      <h3 className='text-2xl font-bold text-secondary"'>Add doctor</h3>

      <div className="flex h-screen  ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Login</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please file the Name field",
                    },
                   
                  })}
                  type="text"
                  placeholder="your name"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.name.message}
                    </span>
                  )}
                 
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
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
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs mb-9">
                <label className="label">
                  <span className="label-text">Speciality</span>
                </label>

                <select
                  class="select w-full max-w-xs"
                  {...register("speciality")}
                >
                  {services.map(service=>
                    
                    <option
                    key={service._id}
                    service={service}
                    
                    >{service.name}</option>)}
                </select>
              </div>

              <input
                type="submit"
                className="btn w-full max-w-xs  btn-secondary"
                value="Add Doctor"
              />
            </form>
            {/* <p>
            <small className="text-primary">
              New to WOW CLINIC?{" "}
              <Link className="btn btn-link text-primary" to="/signup">
                Create New Account
              </Link>
            </small>
          </p> */}
            {/* 
          <div className="divider">OR</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
