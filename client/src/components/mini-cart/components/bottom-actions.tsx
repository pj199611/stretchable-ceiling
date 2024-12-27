import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { clearCart } from "@/services/authApi";
import { useEstimatedTotalCost } from "@/hooks/useEstimatedCost";
import { currency } from "@/lib";

interface Props {
  handleNavigate: (path: string) => () => void;
  dispatch: any;
}

export default function BottomActions({
  dispatch,

  handleNavigate,
}: Props) {
  const { estimateCost } = useEstimatedTotalCost();

  const handleClearCart = async () => {
    await clearCart();
    dispatch({ type: "ASSIGN_CART", payload: [] });
  };

  if (!localStorage.getItem("access_token"))
    return (
      <Box p={2.5}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          sx={{ mb: "0.75rem", height: "40px" }}
          onClick={handleNavigate("/login")}
        >
          Login
        </Button>
      </Box>
    );

  return (
    <Box p={3.5}>
      <Button
        fullWidth
        color="primary"
        variant="outlined"
        sx={{ mb: "0.75rem", height: 40 }}
        onClick={handleClearCart}
      >
        Clear Cart
      </Button>

      <Button
        fullWidth
        color="primary"
        variant="contained"
        sx={{ mb: "0.75rem", height: "40px" }}
        onClick={handleNavigate("/checkout")}
        disabled={estimateCost < 1}
      >
        Checkout Now ({currency(estimateCost)})
      </Button>

      <Button
        fullWidth
        color="primary"
        variant="outlined"
        sx={{ height: 40 }}
        onClick={handleNavigate("/cart")}
      >
        View Cart
      </Button>
    </Box>
  );
}
