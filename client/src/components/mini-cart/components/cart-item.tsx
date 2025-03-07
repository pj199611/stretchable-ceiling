import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
// MUI ICON COMPONENTS
import Add from "@mui/icons-material/Add";
import Delete from "@mui/icons-material/Delete";
import Remove from "@mui/icons-material/Remove";
// GLOBAL CUSTOM COMPONENTS
import { FlexBox } from "@/components/flex-box";
import { Small, H6, Tiny } from "@/components/Typography";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "@/lib";
// CUSTOM DATA MODEL
import { CartItem } from "@/contexts/CartContext";

// ==============================================================
interface Props {
  item: CartItem;
  handleCartAmountChange: (amount: number, product: CartItem) => () => void;
}
// ==============================================================

export default function MiniCartItem({ item, handleCartAmountChange }: Props) {
  return (
    <FlexBox
      py={2}
      px={2.5}
      key={item.id}
      alignItems="center"
      borderBottom="1px solid"
      borderColor="divider"
    >
      <FlexBox alignItems="center" flexDirection="column">
        <Button
          size="small"
          color="primary"
          variant="outlined"
          onClick={handleCartAmountChange(item.qty + 1, item)}
          sx={{ height: 28, width: 28, borderRadius: 50 }}
        >
          <Add fontSize="small" />
        </Button>

        <H6 my="3px">{item.qty}</H6>

        <Button
          size="small"
          color="primary"
          variant="outlined"
          disabled={item.qty === 1}
          onClick={handleCartAmountChange(item.qty - 1, item)}
          sx={{ height: 28, width: 28, borderRadius: 50 }}
        >
          <Remove fontSize="small" />
        </Button>
      </FlexBox>

      <Link href={`/product-details/${item.id}`}>
        <Avatar
          alt={item.name}
          src={item.imgUrl}
          sx={{ mx: 1, width: 75, height: 75 }}
        />
      </Link>

      <Box
        flex="1"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        overflow="hidden"
      >
        <Link href={`/product-details/${item.id}`}>
          <H6 ellipsis className="title">
            {item.name}
          </H6>
          <Small ellipsis className="title">
            {`${item.length} sq feet X ${item.width} sq feet`}
          </Small>
          <br />
        </Link>

        <Tiny color="grey.600">{currency(item.price) + " per sq feet"}</Tiny>

        <H6 color="primary.main" mt={0.5}>
          {currency(item.qty * item.price * item.length * item.width)}
        </H6>
      </Box>

      <IconButton
        size="small"
        color="primary"
        onClick={handleCartAmountChange(0, item)}
        sx={{ marginLeft: 2.5 }}
      >
        <Delete fontSize="small" />
      </IconButton>
    </FlexBox>
  );
}
