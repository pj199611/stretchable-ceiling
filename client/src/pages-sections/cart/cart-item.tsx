import Link from "next/link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// MUI ICON COMPONENTS
import Add from "@mui/icons-material/Add";
import Delete from "@mui/icons-material/Delete";
import Remove from "@mui/icons-material/Remove";
// GLOBAL CUSTOM COMPONENTS
import Image from "@/components/BazaarImage";
import { Span } from "@/components/Typography";
import { FlexBox } from "@/components/flex-box";
// GLOBAL CUSTOM HOOK
import useCart from "@/hooks/useCart";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "@/lib";
// STYLED COMPONENT
import { Wrapper } from "./styles";

// =========================================================
type Props = {
  qty: number;
  name: string;
  // slug: string;
  price: number;
  imgUrl?: string;
  id: string | number;
  length: number;
  width: number;
};
// =========================================================

// CART PAGE
export default function CartItem({
  id, // productId,
  name,
  qty,
  price,
  imgUrl,
  length = 1,
  width = 1,
}: Props) {
  const { dispatch } = useCart();

  const handleCartAmountChange = (amount: number) => () => {
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: {
        id,
        name,
        price,
        imgUrl,
        qty: amount,
        // slug,
        length,
        width,
      },
    });
  };

  return (
    <Wrapper>
      <Link href={`/product-details/${id}`}>
        <Image
          alt={name}
          width={140}
          height={140}
          display="block"
          src={imgUrl || "/assets/images/products/iphone-xi.png"}
        />
      </Link>

      {/* DELETE BUTTON */}
      <IconButton
        size="small"
        color="primary"
        onClick={handleCartAmountChange(0)}
        sx={{ position: "absolute", right: 15, top: 15 }}
      >
        <Delete fontSize="small" />
      </IconButton>

      <FlexBox p={2} rowGap={0.25} width="100%" flexDirection="column">
        <Link href={`/product-details/${id}`}>
          <Span ellipsis fontWeight="600" fontSize={18}>
            {name}
          </Span>
        </Link>

        {/* PRODUCT PRICE SECTION */}
        {/* <FlexBox gap={1} flexWrap="wrap" flexDirection="column"> */}
        {`${length} sq feet X ${width} sq feet`}
        <Span color="grey.600">{currency(price) + " per sq feet"}</Span>

        <Span
          fontWeight={600}
          color="primary.main"
          style={{ margin: "4px 0px" }}
        >
          {currency(price * qty * length * width)}
        </Span>
        {/* </FlexBox> */}

        {/* PRODUCT QUANTITY INC/DEC BUTTONS */}
        <FlexBox alignItems="center">
          <Button
            color="primary"
            sx={{ p: "5px" }}
            variant="outlined"
            disabled={qty === 1}
            onClick={handleCartAmountChange(qty - 1)}
          >
            <Remove fontSize="small" />
          </Button>

          <Span mx={1} fontWeight={600} fontSize={15}>
            {qty}
          </Span>

          <Button
            color="primary"
            sx={{ p: "5px" }}
            variant="outlined"
            onClick={handleCartAmountChange(qty + 1)}
          >
            <Add fontSize="small" />
          </Button>
        </FlexBox>
      </FlexBox>
    </Wrapper>
  );
}
