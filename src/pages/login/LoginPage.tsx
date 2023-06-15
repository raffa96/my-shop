import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./hooks/useLogin";
import { selectHasError, selectIsLoggedIn, useAuth } from "@/services/auth";
import { Error } from "@/shared/";

export const LoginPage = () => {
  const navigate = useNavigate();

  const login = useAuth((state) => state.login);
  const isLoggedIn = useAuth(selectIsLoggedIn);
  const hasError = useAuth(selectHasError);
  const { isValid, formData, changeHandler } = useLogin();

  const doLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(formData.username, formData.password);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/cms");
    }
  }, [isLoggedIn]);

  return (
    <div className="page-small">
      <h1 className="title">Login</h1>

      {hasError && <Error message="Invalid username or password!" />}

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
