"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
// MUI ICON COMPONENTS
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
// LOCAL CUSTOM HOOK
import useProduct from "./use-product";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "@/components/LazyImage";
import { FlexRowCenter } from "@/components/flex-box";
import { H4, Paragraph, Small } from "@/components/Typography";
// import ProductViewDialog from "@/components/products-view/product-view-dialog";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "@/lib";
// CUSTOM COMPONENTS
import {
  AddToCartButton,
  Card,
  CardMedia,
  FavoriteButton,
  QuickViewButton,
} from "./styles";
// CUSTOM DATA MODEL
// import Product from "@/models/Product.model";

// ==============================================================
type Props = { product: any };
// ==============================================================

export default function ProductCard({ product }: Props) {
  const { name, product_price, thumbnail, images, _id } = product || {};

  // Update Wishlist logic
  const {
    cartItem,
    handleCartAmountChange,
    isFavorite,
    toggleDialog,
    toggleFavorite,
  } = useProduct(product, 1, 1);

  // HANDLE ADD TO CART PRODUCT
  const handleAddToCart = () => {
    const payload = {
      id: _id,
      price: product_price,
      name,
      imgUrl: thumbnail || images[0],
      length: 1,
      width: 1,
      qty: (cartItem?.qty || 0) + 1,
    };

    handleCartAmountChange(payload);
  };

  return (
    <div>
      <Card>
        <CardMedia>
          <LazyImage
            width={300}
            height={300}
            alt="category"
            className="product-img"
            src={thumbnail}
          />

          {/* ADD TO CART BUTTON */}
          <AddToCartButton
            className="product-actions"
            onClick={handleAddToCart}
          >
            <AddShoppingCart className="icon" fontSize="small" />
          </AddToCartButton>

          {/* PRODUCT FAVORITE BUTTON */}
          <FavoriteButton className="product-actions" onClick={toggleFavorite}>
            {isFavorite ? (
              <Favorite className="icon" fontSize="small" color="primary" />
            ) : (
              <FavoriteBorder className="icon" fontSize="small" />
            )}
          </FavoriteButton>

          {/* PRODUCT QUICK VIEW BUTTON */}
          <Link href={`/product-details/${_id}`}>
            <Box mx={1}>
              <QuickViewButton
                fullWidth
                size="large"
                color="dark"
                variant="contained"
                className="product-view-action"
                onClick={toggleDialog}
              >
                View Details
              </QuickViewButton>
            </Box>
          </Link>
        </CardMedia>
      </Card>
    </div>
  );
}
