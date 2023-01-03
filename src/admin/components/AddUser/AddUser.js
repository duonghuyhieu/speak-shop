import React from "react";
import { useForm } from "react-hook-form";

function AddUser(props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const axios = require("axios");

  const onSubmit = async (data) => {
    try {
      await axios.post(
        "https://63a564ba318b23efa7923607.mockapi.io/speakshop/user",
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        }
      );
      reset();
      props.onClose();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div class="product__container">
      {props.show ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input
            placeholder="First Name"
            type="text"
            {...register("firstName", {
              required: true,
            })}
          />
          {errors.firstName && <p>Please check the First Name</p>}

          <label>Last Name</label>
          <input
            placeholder="Last Name"
            type="text"
            {...register("lastName", {
              required: true,
            })}
          />
          {errors.lastName && <p>Please check the Last Name</p>}

          <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            {...register("email", {
              required: true,
              pattern:
                // eslint-disable-next-line no-useless-escape
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && <p>Please check the Email</p>}

          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: true,
            })}
          />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <button type="button" onClick={props.onClose}>
            Close
          </button>
        </form>
      ) : null}
    </div>
  );
}

export default AddUser;
