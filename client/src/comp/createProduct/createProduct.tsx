"use client";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import * as yup from "yup";
import DropZone from "@/components/DropZone";
import { FlexBox } from "@/components/flex-box";
import Title from "@/comp/PageTitle/Title";
import SingleToaster from "@/comp/Toaster/singleToaster";
import { UploadImageBox, StyledClear } from "./style";
import AdminLayout from "@/comp/AdminLayout";
import { FlexRowCenter } from "@/components/flex-box";
import {
  getCategoryList,
  getSubCategoryList,
  addProduct,
} from "@/services/adminAuthApi";

const VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().required("Name is required!"),
  category: yup
    .array(yup.string())
    .min(1, "Select one Category")
    .max(1, "Select one Category")
    .required("Category is required!"),
  subCategory: yup
    .array(yup.string())
    .min(1, "Sub-Category must have 1 item")
    .max(1, "Sub-Category must have 1 item")
    .required("Sub-Category is required!"),
  description: yup.string().required("Description is required!"),
  price: yup.number().required("Price is required!"),
  class: yup.string().required("Classes is required!"),
});

const INITIAL_VALUES = {
  name: "",
  class: "",
  price: "",
  category: [],
  subCategory: [],
  description: "",
  // imageUrls: [],
};

export default function ProductForm() {
  const [toaster, setToaster] = useState({
    open: false,
    msg: "Welcome!",
    severity: "success",
  });
  const [uploadedImage, setUploadedImage] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    getCategoryList()
      .then((res: any) => {
        if (res?.categories) setCategories(res.categories);
      })
      .catch((err) => setCategories([]));
    getSubCategoryList()
      .then((res: any) => {
        if (res?.subCategories) setSubCategories(res.subCategories);
      })
      .catch((err) => setCategories([]));
  }, []);

  useEffect(() => {
    if (toaster.open) {
      const timer = setTimeout(() => {
        setToaster({ open: false, msg: "", severity: "success" });
      }, 3000);
      return () => clearTimeout(timer); // Cleanup on component unmount or toaster change
    }
  }, [toaster]);

  const handleFormSubmit = async (values: typeof INITIAL_VALUES) => {
    const formData = new FormData();
    // Append each image to FormData
    if (uploadedImage.length)
      Array.from(uploadedImage).forEach((image) => {
        formData.append("images", image); // 'images' is the key sent to the server
      });
    // console.log(values);
    // formData.append("category", JSON.stringify(values.category[0]));
    // formData.append("subCategory", JSON.stringify(values.subCategory[0]));
    formData.append("category", values.category[0]);
    formData.append("subCategory", values.subCategory[0]);
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("class", values.class);
    formData.append("product_price", values.price);
    // if (values?.imageUrls) formData.append("imageUrls", values.imageUrls);

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    setLoading(true);
    await addProduct(formData)
      .then((res) => {
        setToaster({
          open: true,
          msg: `Product Created! ID: ${res?._id}`,
          severity: "success",
        });
      })
      .catch((err) => {
        setToaster({
          open: true,
          msg: err?.response?.data?.error || "Something went wrong. Try Again!",
          severity: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // HANDLE UPDATE NEW IMAGE VIA DROP ZONE
  const handleChangeDropZone = (files: File[]) => {
    files.forEach((file) =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );
    setUploadedImage((uploadedImage) => uploadedImage.concat(files));
  };

  // HANDLE DELETE UPLOAD IMAGE
  const handleFileDelete = (file: File) => () => {
    setUploadedImage((uploadedImage) =>
      uploadedImage.filter((item) => item.name !== file.name)
    );
  };

  return (
    <>
      <AdminLayout
        comp={
          <FlexRowCenter style={{ height: 300 }}>
            <h1>Please Login via Admin Creds</h1>
          </FlexRowCenter>
        }
      >
        <Title title="Create Product" />
        <Card className="p-3">
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
                  <Grid item sm={6} xs={12}>
                    <TextField
                      select
                      fullWidth
                      color="info"
                      size="medium"
                      name="category"
                      onBlur={handleBlur}
                      placeholder="Category"
                      onChange={handleChange}
                      value={values.category}
                      label="Select Category"
                      SelectProps={{ multiple: true }}
                      error={Boolean(touched.category && errors.category)}
                      helperText={
                        (touched.category && errors.category) as string
                      }
                    >
                      {categories?.map((val: any, i) => (
                        <MenuItem key={`category-${i}`} value={val._id}>
                          {val.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <TextField
                      select
                      fullWidth
                      color="info"
                      size="medium"
                      name="subCategory"
                      onBlur={handleBlur}
                      placeholder="Sub-Category"
                      onChange={handleChange}
                      value={values.subCategory}
                      label="Select Sub-Category"
                      SelectProps={{ multiple: true }}
                      error={Boolean(touched.subCategory && errors.subCategory)}
                      helperText={
                        (touched.subCategory && errors.subCategory) as string
                      }
                    >
                      {subCategories?.map((val: any, i) => (
                        <MenuItem key={`subCategory-${i}`} value={val._id}>
                          {val.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12}>
                    <DropZone
                      onChange={(uploadedImage) =>
                        handleChangeDropZone(uploadedImage)
                      }
                    />

                    <FlexBox flexDirection="row" mt={2} flexWrap="wrap" gap={1}>
                      {uploadedImage.map((file, index) => {
                        return (
                          <UploadImageBox key={index}>
                            <Box>
                              <img
                                src={file?.preview}
                                alt="Preview"
                                width={300}
                                height={"auto"}
                                style={{ objectFit: "contain" }}
                              />
                            </Box>
                            <StyledClear onClick={handleFileDelete(file)} />
                          </UploadImageBox>
                        );
                      })}
                    </FlexBox>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="name"
                      label="Name"
                      color="info"
                      size="medium"
                      placeholder="Name"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      helperText={touched.name && errors.name}
                      error={Boolean(touched.name && errors.name)}
                    />
                  </Grid>

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

                  <Grid item sm={6} xs={12}>
                    <TextField
                      fullWidth
                      name="class"
                      label="Classes"
                      color="info"
                      size="medium"
                      placeholder="Classes"
                      onBlur={handleBlur}
                      value={values.class}
                      onChange={handleChange}
                      helperText={touched.class && errors.class}
                      error={Boolean(touched.class && errors.class)}
                    />
                  </Grid>

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

                  <Grid item sm={6} xs={12}>
                    <Button
                      disabled={loading}
                      variant="contained"
                      color="orange"
                      type="submit"
                    >
                      Save product
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Card>
        {toaster.open && (
          <SingleToaster
            key={Date.now()}
            openNow={toaster.open}
            msg={toaster.msg}
            severity={toaster.severity}
          />
        )}
      </AdminLayout>
    </>
  );
}
