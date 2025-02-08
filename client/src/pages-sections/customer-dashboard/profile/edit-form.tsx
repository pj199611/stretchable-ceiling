"use client";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// FORMIK
import { Formik } from "formik";
// YUP
import * as yup from "yup";

const VALIDATION_SCHEMA = yup.object().shape({
  mail: yup.string().required("Mail is required"),
  username: yup.string().required("Name is required"),
  mobile: yup.string().required("Mobile is required"),
  // birth_date: yup.date().required("Birth date is required"),
});

export default function ProfileEditForm({ user }) {
  const { avatar, mail, mobile, role, username } = user;

  const INITIAL_VALUES = {
    mail: user.mail || "",
    mobile: user.mobile || "",
    username: user.username || "",
    // birth_date: new Date(user.dateOfBirth) || new Date(),
  };

  const handleFormSubmit = async (values: typeof INITIAL_VALUES) => {
    console.log(values);
  };

  return (
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
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="username"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
                error={!!touched.username && !!errors.username}
                helperText={(touched.username && errors.username) as string}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="mail"
                type="email"
                label="Email"
                onBlur={handleBlur}
                value={values.mail}
                onChange={handleChange}
                error={!!touched.mail && !!errors.mail}
                helperText={(touched.mail && errors.mail) as string}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Mobile"
                name="mobile"
                onBlur={handleBlur}
                value={values.mobile}
                onChange={handleChange}
                error={!!touched.mobile && !!errors.mobile}
                helperText={(touched.mobile && errors.mobile) as string}
              />
            </Grid>

            {/* <Grid item md={6} xs={12}>
              <DatePicker
                label="Birth Date"
                value={values.birth_date}
                onChange={(newValue) => setFieldValue("birth_date", newValue)}
                slots={{ textField: TextField }}
                slotProps={{
                  textField: {
                    sx: { mb: 1 },
                    size: "small",
                    fullWidth: true,
                    error: Boolean(!!touched.birth_date && !!errors.birth_date),
                    helperText: (touched.birth_date &&
                      errors.birth_date) as string,
                  },
                }}
              />
            </Grid> */}

            <Grid item xs={12} mb={5}>
              <Button type="submit" variant="contained" color="primary">
                Update Profile
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}
