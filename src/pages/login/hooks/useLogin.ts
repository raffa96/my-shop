import { ChangeEvent, useState } from "react";

export function useLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const isValid = formData.username.length > 0 && formData.password.length >= 8;

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return {
    formData,
    isValid,
    changeHandler,
  };
}
