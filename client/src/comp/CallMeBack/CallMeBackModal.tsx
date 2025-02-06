"use client";
import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import * as yup from "yup";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { FlexRowCenter } from "@/components/flex-box";
import { postCallbackRequest } from "@/utils/api/guestUser";
import SingleToaster from "@/comp/Toaster/singleToaster";

interface CallMeBackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_VALUES = {
  comment: "",
  mail: "",
  name: "",
  phoneNumber: "",
};

const VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().required("Name is required!"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10,}$/, "Phone number must be at least 10 digits")
    .required("Phone Number is required!"),
  comment: yup.string().required("Remark is required!"),
  mail: yup.string().required("Mail is required!"),
});

const CallMeBackModal: React.FC<CallMeBackModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [loading, setLoading] = useState(false);
  const [toaster, setToaster] = useState({
    open: false,
    msg: "Welcome!",
    severity: "success",
  });

  const handleFormSubmit = async (values: typeof INITIAL_VALUES) => {
    setLoading(true);
    const res = await postCallbackRequest(values)
      .then((res: any) => {
        console.log("response", res);
        setToaster({
          open: true,
          msg: res?.message
            ? `We will call you back`
            : "Something went wrong. Try Again!",
          severity: res?.message ? "success" : "error",
        });
        setTimeout(() => {
          setToaster({ open: false, msg: "", severity: "success" });
          res?.message && onClose();
        }, 3000);
      })
      .catch((err) => {
        setToaster({
          open: true,
          msg: err?.error || "Something went wrong. Try Again!",
          severity: "error",
        });
      })
      .finally(() => {
        setLoading(false);
        // onClose();
      });
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <FlexRowCenter
          style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}
        >
          Request a Call Back
        </FlexRowCenter>

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={INITIAL_VALUES}
          validationSchema={VALIDATION_SCHEMA}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Name"
                    color="info"
                    size="medium"
                    placeholder="Enter your Name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    helperText={touched.name && errors.name}
                    error={Boolean(touched.name && errors.name)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    type="number"
                    fullWidth
                    color="info"
                    size="medium"
                    name="phoneNumber"
                    label="Phone Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your Phone Number"
                    value={values.phoneNumber}
                    helperText={touched.phoneNumber && errors.phoneNumber}
                    error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="mail"
                    color="info"
                    size="medium"
                    onBlur={handleBlur}
                    value={values.mail}
                    label="E-Mail ID"
                    onChange={handleChange}
                    placeholder="Enter your E-Mail ID"
                    helperText={touched.mail && errors.mail}
                    error={Boolean(touched.mail && errors.mail)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    multiline
                    rows={5}
                    fullWidth
                    name="comment"
                    label="Add your Remark"
                    color="info"
                    size="medium"
                    placeholder="Add Description"
                    onBlur={handleBlur}
                    value={values.comment}
                    onChange={handleChange}
                    helperText={touched.comment && errors.comment}
                    error={Boolean(touched.comment && errors.comment)}
                  />
                </Grid>

                <Grid item xs={6}>
                  <Button
                    disabled={loading}
                    variant="contained"
                    color="orange"
                    type="submit"
                    fullWidth
                  >
                    Call Me Back
                  </Button>
                </Grid>

                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    // color="orange"
                    onClick={() => onClose()}
                  >
                    Close
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </div>
      {toaster.open && (
        <SingleToaster
          key={Date.now()}
          openNow={toaster.open}
          msg={toaster.msg}
          severity={toaster.severity}
        />
      )}
    </div>
  );
};

// Modal styles
const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 6,
};

const modalStyle: React.CSSProperties = {
  background: "white",
  padding: "20px",
  borderRadius: "5px",
  maxWidth: "600px",
  width: "100%",
};

export default CallMeBackModal;
