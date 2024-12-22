"use client";

import Link from "next/link";
import * as yup from "yup";
import { FC, useState } from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
// MUI ICON COMPONENTS
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { useFormik } from "formik";
// GLOBAL CUSTOM HOOK
import useCart from "@/hooks/useCart";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "@/components/LazyImage";
import { H1, H2, H3, H6 } from "@/components/Typography";
import { FlexBox, FlexRowCenter } from "@/components/flex-box";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "@/lib";
import BazaarTextField from "@/components/BazaarTextField";

// DUMMY DATA
import productVariants from "@/data/product-variants";
// CUSTOM DATA MODEL
// import Product from "models/Product.model";

// ================================================================
// type Props = { product: Product };
// ================================================================

export default function ProductIntro({
  _id,
  name,
  description,
  product_price,
  images,
  thumbnail,
  Class,
}: any) {
  const initialValues = {
    length: 1,
    width: 1,
  };

  const { state, dispatch } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectVariants, setSelectVariants] = useState({
    option: "option 1",
    type: "type 1",
  });

  const validationSchema = yup.object().shape({
    length: yup.number().required("Length is required").positive().moreThan(0),
    width: yup.number().required("Length is required").positive().moreThan(0),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        console.log(values);
      },
    });

  // HANDLE CHANGE TYPE AND OPTIONS
  const handleChangeVariant = (variantName: string, value: string) => () => {
    setSelectVariants((state) => ({
      ...state,
      [variantName.toLowerCase()]: value,
    }));
  };

  // CHECK PRODUCT EXIST OR NOT IN THE CART
  const cartItem = state.cart.find(
    (item) =>
      item.id === _id &&
      item.length === values.length &&
      item.width === values.width
  );

  // HANDLE SELECT IMAGE
  const handleImageClick = (ind: number) => () => setSelectedImage(ind);

  // HANDLE CHANGE CART
  const handleCartAmountChange = (amount: number) => () => {
    if (values.length > 0 && values.width > 0)
      dispatch({
        type: "CHANGE_CART_AMOUNT",
        payload: {
          id: _id,
          qty: amount,
          price: values.length * values.width * product_price,
          length: values.length || 1,
          width: values.width || 1,
          name: name,
          imgUrl: images[0],
        },
      });
  };

  return (
    <Box width="100%">
      <Grid container spacing={3} justifyContent="space-around">
        {/* IMAGE GALLERY AREA */}
        <Grid item md={6} xs={12} alignItems="center">
          <FlexBox
            borderRadius={3}
            overflow="hidden"
            justifyContent="center"
            mb={6}
          >
            <LazyImage
              alt={name}
              width={300}
              height={300}
              loading="eager"
              src={images?.[selectedImage]}
              sx={{ objectFit: "contain" }}
            />
          </FlexBox>

          <FlexBox overflow="auto">
            {images?.map((url: string, ind: number) => (
              <FlexRowCenter
                key={ind}
                width={64}
                height={64}
                minWidth={64}
                bgcolor="white"
                border="1px solid"
                borderRadius="10px"
                ml={ind === 0 ? "auto" : 0}
                style={{ cursor: "pointer" }}
                onClick={handleImageClick(ind)}
                mr={ind === images.length - 1 ? "auto" : "10px"}
                borderColor={
                  selectedImage === ind ? "primary.main" : "grey.400"
                }
              >
                <Avatar
                  alt="product"
                  src={url}
                  variant="square"
                  sx={{ height: 40 }}
                />
              </FlexRowCenter>
            ))}
          </FlexBox>
        </Grid>

        {/* PRODUCT INFO AREA */}
        <Grid item md={6} xs={12} alignItems="center">
          {/* PRODUCT NAME */}
          <H1 mb={1}>{name}</H1>

          <FlexBox alignItems="center" mb={1}>
            <div>Product Class: </div>
            <H6>{Class}</H6>
          </FlexBox>

          {/* <FlexBox alignItems="center" mb={1}>
            <div>Price per square feet: </div>
            <H6>{product_price} per square</H6>
          </FlexBox> */}

          <FlexBox alignItems="center" mb={1}>
            <div>Description: </div>
            <H6>{description}</H6>
          </FlexBox>

          {/* PRODUCT RATING */}
          <FlexBox alignItems="center" gap={1} mb={2}>
            <Box lineHeight="1">Rating:</Box>
            {/* <Rating color="warn" value={rating} readOnly /> */}
            {/* <H6 lineHeight="1">({totalNoOfReviews})</H6> */}
          </FlexBox>

          {/* PRODUCT VARIANTS */}
          {/* {productVariants.map((variant) => (
            <Box key={variant.id} mb={2}>
              <H6 mb={1}>{variant.title}</H6>

              {variant.values.map(({ id, value }) => (
                <Chip
                  key={id}
                  label={value}
                  onClick={handleChangeVariant(variant.title, value)}
                  sx={{ borderRadius: "4px", mr: 1, cursor: "pointer" }}
                  // color={
                  //   selectVariants[variant.title.toLowerCase()] === value
                  //     ? "primary"
                  //     : "default"
                  // }
                />
              ))}
            </Box>
          ))} */}

          {/* PRICE & STOCK */}
          <Box pt={1} mb={3}>
            <H2 color="primary" mb={0.5} lineHeight="1">
              {currency(Number(product_price))} per square feet
            </H2>
            <Box color="inherit">Stock Available</Box>
          </Box>

          <Box pt={1} mb={3}>
            <H2 color="primary" mb={0.5} lineHeight="1">
              Length (sq feet):
            </H2>
            <BazaarTextField
              mb={1.5}
              fullWidth
              name="length"
              size="small"
              type="number"
              variant="outlined"
              onBlur={handleBlur}
              value={values.length}
              onChange={handleChange}
              placeholder="1"
              error={!!touched.length && !!errors.length}
              helperText={(touched.length && errors.length) as string}
            />
          </Box>

          <Box pt={1} mb={3}>
            <H2 color="primary" mb={0.5} lineHeight="1">
              Width (sq feet):
            </H2>
            <BazaarTextField
              mb={1.5}
              fullWidth
              name="width"
              size="small"
              type="number"
              variant="outlined"
              onBlur={handleBlur}
              value={values.width}
              onChange={handleChange}
              placeholder="1"
              error={!!touched.width && !!errors.width}
              helperText={(touched.width && errors.width) as string}
            />
          </Box>

          <Box pt={1} mb={3}>
            <H2 color="primary.main" mb={0.5} lineHeight="1">
              Estimated Cost : {values.length * values.width * product_price}
            </H2>
          </Box>

          {/* ADD TO CART BUTTON */}
          {!cartItem?.qty ? (
            <Button
              color="primary"
              variant="contained"
              onClick={handleCartAmountChange(1)}
              sx={{ mb: 4.5, px: "1.75rem", height: 40 }}
              disabled={values.length < 1 || values.width < 1}
            >
              Add to Cart
            </Button>
          ) : (
            <FlexBox alignItems="center" mb={4.5}>
              <Button
                size="small"
                sx={{ p: 1 }}
                color="primary"
                variant="outlined"
                onClick={handleCartAmountChange(cartItem?.qty - 1)}
              >
                <Remove fontSize="small" />
              </Button>

              <H3 fontWeight="600" mx={2.5}>
                {cartItem?.qty.toString().padStart(2, "0")}
              </H3>

              <Button
                size="small"
                sx={{ p: 1 }}
                color="primary"
                variant="outlined"
                onClick={handleCartAmountChange(cartItem?.qty + 1)}
              >
                <Add fontSize="small" />
              </Button>
            </FlexBox>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
