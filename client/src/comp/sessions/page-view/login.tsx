"use client";

import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
// LOCAL CUSTOM COMPONENTS
import EyeToggleButton from "../components/eye-toggle-button";
// LOCAL CUSTOM HOOK
import usePasswordVisible from "../use-password-visible";
// GLOBAL CUSTOM COMPONENTS
import BazaarTextField from "@/components/BazaarTextField";
import { jwtDecode } from "jwt-decode";
import { login_me_axios } from "@/services/authApi";
import { useRouter } from "next/navigation";
import useRole from "@/hooks/hooks/useRole";

// ==============================================================
interface Props {
  closeDialog?: () => void;
}
// ==============================================================

type Role = "user" | "designer" | "admin";

const LoginPageView = ({ closeDialog }: Props) => {
  const Router = useRouter();
  const { visiblePassword, togglePasswordVisible } = usePasswordVisible();
  const { role, updateRole } = useRole();

  // LOGIN FORM FIELDS INITIAL VALUES
  const initialValues = { email: "", password: "" };

  // LOGIN FORM FIELD VALIDATION SCHEMA
  const validationSchema = yup.object().shape({
    password: yup.string().required("Password is required"),
    email: yup.string().email("invalid email").required("Email is required"),
  });

  const RouteUser = (role: string = "user") => {
    if (role === "user") Router.push("/");
    if (role === "designer") Router.push("/");
    if (role === "admin") Router.push("/");
  };

  const handleLogin = async (formData: any) => {
    const res = await login_me_axios(formData);
    const AccessToken = res?.token;
    if (AccessToken) {
      localStorage.setItem("access_token", AccessToken);

      const decoded = jwtDecode(AccessToken);
      if (decoded && decoded["role"]) {
        const newRole = decoded["role"];
        updateRole(newRole);
        localStorage.setItem("role", newRole);
        RouteUser(newRole);
      }
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        handleLogin(values);
        console.log(values);
        closeDialog?.();
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <BazaarTextField
        mb={1.5}
        fullWidth
        name="email"
        size="small"
        type="email"
        variant="outlined"
        onBlur={handleBlur}
        value={values.email}
        onChange={handleChange}
        label="Email"
        placeholder="exmple@mail.com"
        helperText={touched.email && errors.email}
        error={Boolean(touched.email && errors.email)}
      />

      <BazaarTextField
        mb={2}
        fullWidth
        size="small"
        name="password"
        label="Password"
        autoComplete="on"
        variant="outlined"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        placeholder="*********"
        type={visiblePassword ? "text" : "password"}
        helperText={touched.password && errors.password}
        error={Boolean(touched.password && errors.password)}
        InputProps={{
          endAdornment: (
            <EyeToggleButton
              show={visiblePassword}
              click={togglePasswordVisible}
            />
          ),
        }}
      />

      <Button
        fullWidth
        type="submit"
        color="primary"
        variant="contained"
        size="large"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginPageView;
