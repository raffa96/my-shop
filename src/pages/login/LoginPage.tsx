import { ChangeEvent, FormEvent, useState } from "react";
import { useLogin } from "./hooks/useLogin";

export const LoginPage = () => {
  const { isValid, formData, changeHandler } = useLogin();

  const doLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="page-small">
      <h1 className="title">Login</h1>

      <form className="flex flex-col gap-3" onSubmit={doLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={changeHandler}
        />
        <button type="submit" className="btn primary" disabled={!isValid}>
          Login
        </button>
      </form>
    </div>
  );
};
