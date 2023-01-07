import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { addUser } from "../../services/admin-service";
import "./AddUser.css";

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

  const onSubmit = async (data) => {
    addUser(data.firstName, data.lastName, data.email, data.password)
      .then((response) => {
        props.onClose();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.show]);

  return (
    <div>
      {props.show ? (
        <form onSubmit={handleSubmit(onSubmit)} class="au__container">
          <div class="au__form">
            <h5 class="form__title">First Name</h5>
            <input
              class="form__input"
              placeholder="First Name"
              type="text"
              {...register("firstName", {
                required: true,
              })}
            />
            {errors.firstName && (
              <p class="form__error">Please check the First Name</p>
            )}
          </div>

          <div class="au__form">
            <h5 class="form__title">Last Name</h5>
            <input
              class="form__input"
              placeholder="Last Name"
              type="text"
              {...register("lastName", {
                required: true,
              })}
            />
            {errors.lastName && (
              <p class="form__error">Please check the Last Name</p>
            )}
          </div>

          <div class="au__form">
            <h5 class="form__title">Email</h5>
            <input
              class="form__input"
              placeholder="Email"
              type="email"
              {...register("email", {
                required: true,
                pattern:
                  // eslint-disable-next-line no-useless-escape
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && <p class="form__error">Please check the Email</p>}
          </div>

          <div class="au__form">
            <h5 class="form__title">Password</h5>
            <input
              class="form__input"
              placeholder="Password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && (
              <p class="form__error">Please check the Password</p>
            )}
          </div>
          <div class="form__button-container ">
            <button type="submit" disabled={isSubmitting} class="form__button">
              Submit
            </button>
            <button type="button" onClick={props.onClose} class="form__button">
              Close
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}

export default AddUser;
