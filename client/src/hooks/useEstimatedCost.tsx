import { useState, useEffect } from "react";
import useCart from "@/hooks/useCart";
import { getEstimateCost } from "@/utils/api/guestUser";

export function useEstimatedTotalCost() {
  const { state } = useCart();
  const [estimateCost, setEstimateCost] = useState(0);

  useEffect(() => {
    const handleEstimateCost = async () => {
      await getEstimateCost({
        locationName: state.location,
        products: state.cart?.map((val) => ({
          _id: val.id,
          area: val.length * val.width * val.qty,
        })),
      }).then((res) => {
        setEstimateCost(res?.estimatedCost || 0);
      });
    };

    handleEstimateCost();
  }, [state.cart, state.location]);

  return { estimateCost, setEstimateCost };
}
