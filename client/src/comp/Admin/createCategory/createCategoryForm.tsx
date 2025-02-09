"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Formik } from "formik";
import * as yup from "yup";
import { getCategoryList } from "@/utils/api/guestUser";

const INITIAL_VALUES = {
  category: "",
  subcategory: "",
  parent: [],
  createsubcategory: false,
};

const VALIDATION_SCHEMA = yup.object().shape({
  subcategory: yup.string().required("Sub-category is required!"),
  parent: yup
    .array()
    .min(1, "Select at least one Category")
    .required("Parent Category is required"),
});

const VALIDATION_SCHEMA2 = yup.object().shape({
  category: yup.string().required("Category is required!"),
});

// ================================================================
interface Props {}
// ================================================================

export default function CategoryForm(props: Props) {
  const [categories, setCategories] = useState([]);
  const [isSubCategory, setIsSubCategory] = useState(false);

  useEffect(() => {
    getCategoryList()
      .then((res: any) => {
        if (res?.categories) setCategories(res.categories);
      })
      .catch((err) => setCategories([]));
  }, []);

  const handleFormSubmit = () => {
    console.log("sub");
  };
  return (
    <Card className="p-3">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={INITIAL_VALUES}
        validationSchema={
          isSubCategory ? VALIDATION_SCHEMA : VALIDATION_SCHEMA2
        }
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
              {!isSubCategory && (
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="category"
                    label="Category Name"
                    color="info"
                    size="medium"
                    placeholder="Enter Category Name"
                    value={values.category}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    helperText={touched.category && errors.category}
                    error={Boolean(touched.category && errors.category)}
                  />
                </Grid>
              )}

              {isSubCategory && (
                <Grid item xs={12}>
                  <TextField
                    select
                    fullWidth
                    color="info"
                    size="medium"
                    name="parent"
                    onBlur={handleBlur}
                    value={values.parent}
                    onChange={handleChange}
                    placeholder="Select Parent Category"
                    label="Parent Category"
                    SelectProps={{ multiple: true }}
                    helperText={touched.parent && errors.parent}
                    error={Boolean(touched.parent && errors.parent)}
                  >
                    {categories?.map((val: any, i) => (
                      <MenuItem key={`category-${i}`} value={val.name}>
                        {val.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              )}

              {isSubCategory && (
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="subcategory"
                    label="Sub-Category Name"
                    color="info"
                    size="medium"
                    placeholder="Enter Sub-Category Name"
                    value={values.subcategory}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    helperText={touched.subcategory && errors.subcategory}
                    error={Boolean(touched.subcategory && errors.subcategory)}
                  />
                </Grid>
              )}

              <Grid item xs={12}>
                <FormControlLabel
                  label="Create SubCategory"
                  control={
                    <Checkbox
                      color="info"
                      name="createsubcategory"
                      onBlur={handleBlur}
                      onChange={(e) => {
                        setIsSubCategory(e.target.checked);
                      }}
                      value={values.createsubcategory}
                    />
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" color="info" type="submit">
                  {isSubCategory ? "Save Sub-Category" : "Save Category"}
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
}
