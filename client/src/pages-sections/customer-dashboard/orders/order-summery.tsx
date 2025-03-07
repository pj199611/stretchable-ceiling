import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
// GLOBAL CUSTOM COMPONENTS
import { FlexBetween } from "@/components/flex-box";
import { H5, H6, Paragraph } from "@/components/Typography";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "@/lib";

function ListItem({ title, value }: { title: string; value: string }) {
  return (
    <FlexBetween mb={1}>
      <Paragraph color="grey.600">{title}</Paragraph>
      <H6>{value}</H6>
    </FlexBetween>
  );
}

const AddressText = ({ address, city, country, postalCode }) =>
  `${address}, ${city}, Pin Code - ${postalCode}, ${country} `;

export default function OrderSummery({ order }) {
  return (
    <Grid container spacing={3}>
      {/* SHIPMENT ADDRESS SECTION */}
      {order.shippingAddress && (
        <Grid item lg={6} md={6} xs={12}>
          <Card sx={{ p: 3 }}>
            <H5 mt={0} mb={2}>
              Shipping Address
            </H5>

            <Paragraph fontSize={14} my={0}>
              {AddressText(order.shippingAddress)}
            </Paragraph>
          </Card>
        </Grid>
      )}

      {/* TOTAL SUMMERY SECTION */}
      {order.totalAmount && (
        <Grid item lg={6} md={6} xs={12}>
          <Card sx={{ p: 3 }}>
            <H5 mt={0} mb={2}>
              Total Summary
            </H5>

            {/* <ListItem title="Subtotal:" value={currency(order.totalPrice)} />
          <ListItem title="Shipping fee:" value={currency(0)} />
          <ListItem title="Discount:" value={currency(order.discount)} /> */}

            <Divider sx={{ mb: 1 }} />

            <FlexBetween mb={2}>
              <H6>Order Amount </H6>
              <H6>{currency(order.totalAmount)}</H6>
            </FlexBetween>
            <FlexBetween mb={2}>
              <H6> Amount Already Paid </H6>
              <H6>{currency(order.totalPaid)}</H6>
            </FlexBetween>
            <FlexBetween mb={2}>
              <H6> Amount to Pay </H6>
              <H6>{currency(order.totalAmount - order.totalPaid)}</H6>
            </FlexBetween>

            {/* <Paragraph>Paid by Credit/Debit Card</Paragraph> */}
          </Card>
        </Grid>
      )}
    </Grid>
  );
}
