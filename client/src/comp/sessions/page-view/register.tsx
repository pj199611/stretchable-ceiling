"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useFormik } from "formik";
import * as yup from "yup";
// LOCAL CUSTOM COMPONENTS
import EyeToggleButton from "../components/eye-toggle-button";
// LOCAL CUSTOM HOOK
import BoxLink from "../components/box-link";
import usePasswordVisible from "../use-password-visible";
// GLOBAL CUSTOM COMPONENTS
import { Span } from "@/components/Typography";
import SingleToaster from "@/comp/Toaster/singleToaster";
import { FlexBox } from "@/components/flex-box";
import BazaarTextField from "@/components/BazaarTextField";
import { register_me_axios } from "@/services/authApi";

const initialValues = {
  name: "",
  email: "",
  password: "",
  re_password: "",
  mobile: "",
  // agreement: false,
};

const RegisterPageView = () => {
  const { visiblePassword, togglePasswordVisible } = usePasswordVisible();
  const [toaster, setToaster] = useState({
    open: false,
    msg: "",
    severity: "success",
  });
  const [loading, setLoading] = useState(false);

  // COMMON INPUT PROPS FOR TEXT FIELD
  const inputProps = {
    endAdornment: (
      <EyeToggleButton show={visiblePassword} click={togglePasswordVisible} />
    ),
  };

  // REGISTER FORM FIELD VALIDATION SCHEMA
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
    mobile: yup.number().required("Mobile is required"),
    re_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Please re-type password"),
    // agreement: yup
    //   .bool()
    //   .test(
    //     "agreement",
    //     "You have to agree with our Terms and Conditions!",
    //     (value) => value === true
    //   )
    //   .required("You have to agree with our Terms and Conditions!"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        console.log(values);
        setLoading(true);
        const data = await register_me_axios({
          userName: values.name,
          email: values.email,
          password: values.password,
          mobile: values.mobile,
        })
          .then((res) => {
            console.log({ res });
            if (res.message) {
              setToaster({
                open: true,
                msg: res.message,
                severity:
                  res.message === "User already exists" ? "warning" : "success",
              });
            } else if (res.errors) {
              setToaster({
                open: true,
                msg: res.errors[0].msg,
                severity: "error",
              });
            }
          })
          .catch((err) => {
            console.log({ err });
          })
          .finally(() => {
            setLoading(false);
            setTimeout(() => {
              setToaster({
                open: false,
                msg: "",
                severity: "success",
              });
            }, 3000);
          });
        console.log(data, data?.success);
        if (data.success) {
          console.log("in");
          //   setLoding(false);
          //   toast.success(data.message);
          //   setTimeout(() => {
          //     router.push("/login");
          //   }, 2000);
          // } else {
          //   setLoding(false);
          //   toast.error(data.message);
        }
      },
    });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <BazaarTextField
          mb={1.5}
          fullWidth
          name="name"
          size="small"
          label="Full Name"
          variant="outlined"
          onBlur={handleBlur}
          value={values.name}
          onChange={handleChange}
          placeholder="Ralph Awards"
          error={!!touched.name && !!errors.name}
          helperText={(touched.name && errors.name) as string}
        />

        <BazaarTextField
          mb={1.5}
          fullWidth
          name="mobile"
          size="small"
          label="Mobile Number"
          variant="outlined"
          onBlur={handleBlur}
          value={values.mobile}
          onChange={handleChange}
          placeholder="9999999999"
          error={!!touched.mobile && !!errors.mobile}
          helperText={(touched.mobile && errors.mobile) as string}
        />

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
          placeholder="abc@gmail.com"
          error={!!touched.email && !!errors.email}
          helperText={(touched.email && errors.email) as string}
        />

        <BazaarTextField
          mb={1.5}
          fullWidth
          size="small"
          name="password"
          label="Password"
          variant="outlined"
          autoComplete="on"
          placeholder="*********"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          type={visiblePassword ? "text" : "password"}
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
          InputProps={inputProps}
        />

        <BazaarTextField
          fullWidth
          size="small"
          autoComplete="on"
          name="re_password"
          variant="outlined"
          label="Retype Password"
          placeholder="*********"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.re_password}
          type={visiblePassword ? "text" : "password"}
          error={!!touched.re_password && !!errors.re_password}
          helperText={touched.re_password && errors.re_password}
          InputProps={inputProps}
        />

        <div style={{ marginTop: 20 }} />
        {/* <FormControlLabel
          name="agreement"
          className="agreement"
          onChange={handleChange}
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={values.agreement || false}
            />
          }
          label={
            <FlexBox
              flexWrap="wrap"
              alignItems="center"
              justifyContent="flex-start"
              gap={1}
            >
              <Span display={{ sm: "inline-block", xs: "none" }}>
                You agree to Accept Our Terms & Condition
              </Span>
              {/* <Span display={{ sm: "none", xs: "inline-block" }}>
                Accept Our Terms & Condition
              </Span> 
              {/* <BoxLink title="Terms & Condition"href="/" href="/" /> 
            </FlexBox>
          }
        /> */}

        <Button
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          size="large"
          disabled={loading}
        >
          Create Account
        </Button>
      </form>
      {toaster.open && (
        <SingleToaster
          key={Date.now()}
          openNow={toaster.open}
          msg={toaster.msg}
          severity={toaster.severity}
        />
      )}
    </>
  );
};

export default RegisterPageView;
