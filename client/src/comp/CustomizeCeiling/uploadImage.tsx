"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import * as yup from "yup";
import Link from "next/link";

// GLOBAL CUSTOM COMPONENTS
import DropZone from "@/components/DropZone";
import { FlexBox } from "@/components/flex-box";
import { H3 } from "@/components/Typography";

// STYLED COMPONENTS
import { UploadImageBox, StyledClear } from "./style";

// FORM FIELDS VALIDATION SCHEMA
const VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().required("Name is required!"),
  description: yup.string().required("Description is required!"),
  mobile: yup.number().required("Tags is required!"),
});

// ================================================================
interface Props {}
// ================================================================

export default function ProductForm(props: Props) {
  const INITIAL_VALUES = {
    name: "",
    mobile: "",
    url: "",
    description: "",
    trackingId: "",
  };

  const handleFormSubmit = (values: typeof INITIAL_VALUES) => {
    console.log(values);
  };

  const [uploadedImage, setUploadedImage] = useState<File[]>([]);
  const [imageUrl, setImageUrl] = useState("");

  // HANDLE UPDATE NEW IMAGE VIA DROP ZONE
  const handleChangeDropZone = (files: File[]) => {
    files.forEach((file) =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );
    setUploadedImage((uploadedImage) => uploadedImage.concat(files));
  };

  // HANDLE DELETE UPLOAD IMAGE
  const handleFileDelete = (file: File) => () => {
    setUploadedImage(
      uploadedImage.filter((val: File) => val?.name !== file.name)
    );
  };

  return (
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

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                 color="info"
                  size="medium"
                  name="mobile"
                  onBlur={handleBlur}
                  placeholder="Enter Mobile Number"
                  onChange={handleChange}
                  value={values.mobile}
                  label="Enter Mobile Number"
                />
              </Grid>
              <Grid item xs={12}>
                <DropZone onChange={(files) => handleChangeDropZone(files)} />

                <FlexBox flexDirection="row" mt={2} flexWrap="wrap" gap={1}>
                  {uploadedImage.map((file: File, index: number) => {
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
                 color="info"
                  size="medium"
                  name="url"
                  onBlur={handleBlur}
                  placeholder="Add Image URL"
                  onChange={(e) => {
                    handleChange("url")(e.target.value);
                    setImageUrl(e.target.value);
                  }}
                  value={values.url}
                  label="Add Image URL"
                />
              </Grid>

              {imageUrl && (
                <Grid item xs={12}>
                  <FlexBox flexDirection="row" mt={2} flexWrap="wrap" gap={1}>
                    <UploadImageBox key={"urlPreview"}>
                      <Box>
                        <img
                          src={values?.url}
                          alt="Preview"
                          width={300}
                          height={"auto"}
                          style={{ objectFit: "contain" }}
                        />
                      </Box>
                      <StyledClear
                        onClick={() => {
                          setImageUrl("");
                          values.url = "";
                        }}
                      />
                    </UploadImageBox>
                  </FlexBox>
                </Grid>
              )}

              <Grid item sm={6} xs={12}>
                <Link
                  target="_blank"
                  href={"https://www.shutterstock.com/search"}
                >
                  <H3> Shutter Stock</H3>
                </Link>
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="trackingId"
                  label="Shutter Stock ID"
                 color="info"
                  size="medium"
                  placeholder="Shutter Stock ID"
                  value={values.trackingId}
                  onBlur={handleBlur}
                  onChange={handleChange}
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
                <Button variant="contained" color="orange" type="submit">
                  Send Customize Ceiling Details
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
}
