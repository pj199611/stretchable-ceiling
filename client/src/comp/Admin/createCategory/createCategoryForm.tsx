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
import {
  getCategoryList,
  addCategory,
  addSubCategory,
} from "@/services/adminAuthApi";
import SingleToaster from "@/comp/Toaster/singleToaster";

const INITIAL_VALUES = {
  category: "",
  subcategory: "",
  parent: [],
  createsubcategory: false,
  description: "",
  price: 0,
};

const VALIDATION_SCHEMA = yup.object().shape({
  subcategory: yup.string().required("Sub-category is required!"),
  parent: yup
    .array()
    .min(1, "Select at least one Category")
    .required("Parent Category is required"),
  description: yup.string().required("Description is required!"),
  price: yup.number().required("Price is required").positive().moreThan(0),
});

const VALIDATION_SCHEMA2 = yup.object().shape({
  category: yup.string().required("Category is required!"),
  description: yup.string().required("Description is required!"),
});

// ================================================================
interface Props {}
// ================================================================

const CategoryForm = (props: Props) => {
  const [categories, setCategories] = useState([]);
  const [isSubCategory, setIsSubCategory] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toaster, setToaster] = useState({
    open: false,
    msg: "Welcome!",
    severity: "success",
  });

  useEffect(() => {
    const fetchCategoryList = async () => {
      await getCategoryList()
        .then((res: any) => {
          if (res?.categories) setCategories(res.categories);
        })
        .catch((err) => setCategories([]));
    };

    fetchCategoryList();
  }, []);

  useEffect(() => {
    if (toaster.open) {
      const timer = setTimeout(() => {
        setToaster({ open: false, msg: "", severity: "success" });
      }, 3000);
      return () => clearTimeout(timer); // Cleanup on component unmount or toaster change
    }
  }, [toaster]);

  const handleFormSubmit = async (values) => {
    setLoading(true);
    if (isSubCategory) {
      await addSubCategory({
        name: values.subcategory,
        description: values.description,
        categoryIds: values.parent,
        price: values.price,
      })
        .then((res) => {
          setToaster({
            open: true,
            msg: `Sub-Category Created! Name: ${res?.subCategory?.name}`,
            severity: "success",
          });
        })
        .catch((err) => {
          setToaster({
            open: true,
            msg:
              err?.response?.data?.error || "Something went wrong. Try Again!",
            severity: "error",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      await addCategory({
        name: values.category,
        description: values.description,
      })
        .then((res) => {
          setToaster({
            open: true,
            msg: `Category Created! Name: ${res?.category?.name}`,
            severity: "success",
          });
        })
        .catch((err) => {
          setToaster({
            open: true,
            msg:
              err?.response?.data?.error || "Something went wrong. Try Again!",
            severity: "error",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
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
                      <MenuItem key={`category-${i}`} value={val._id}>
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
                <TextField
                  rows={6}
                  multiline
                  fullWidth
                  color="info"
                  size="medium"
                  name="description"
                  label="Description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Description"
                  value={values.description}
                  helperText={touched.description && errors.description}
                  error={Boolean(touched.description && errors.description)}
                />
              </Grid>

              {isSubCategory && (
                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="price"
                    color="info"
                    size="medium"
                    type="number"
                    onBlur={handleBlur}
                    value={values.price}
                    label="Price"
                    onChange={handleChange}
                    placeholder="Price"
                    helperText={touched.price && errors.price}
                    error={Boolean(touched.price && errors.price)}
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
                <Button
                  disabled={loading}
                  variant="contained"
                  color="info"
                  type="submit"
                >
                  {isSubCategory ? "Save Sub-Category" : "Save Category"}
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      {toaster.open && (
        <SingleToaster
          key={Date.now()}
          openNow={toaster.open}
          msg={toaster.msg}
          severity={toaster.severity}
        />
      )}
    </Card>
  );
};

export default CategoryForm;
