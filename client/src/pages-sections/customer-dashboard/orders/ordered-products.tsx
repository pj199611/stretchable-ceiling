import { FC } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { format } from "date-fns";
// GLOBAL CUSTOM COMPONENTS
import { H6, Paragraph } from "@/components/Typography";
import { FlexBetween, FlexBox } from "@/components/flex-box";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "@/lib";

export default function OrderedProducts({ order }) {
  const { _id, createdAt, isCustomized, products, payment_status } =
    order || {};

  return (
    <Card sx={{ p: 0, mb: "30px" }}>
      <FlexBetween px={6} py={2} flexWrap="wrap" bgcolor="grey.200">
        <Item title="Order ID:" value={_id} />
        <Item
          title="Placed on:"
          value={format(new Date(createdAt), "dd MMM, yyyy")}
        />
        <Item title="Payment Status:" value={payment_status} />
        {/* <Item
          title="Delivery on:"
          value={
            deliveredAt ? format(new Date(deliveredAt), "dd MMM, yyyy") : "None"
          }
        /> */}
      </FlexBetween>

      {products.map((item, ind: number) => {
        const { name, thumbnail, description, product_price } = item.product;
        return (
          <FlexBetween
            gap={3}
            px={6}
            py={3}
            flexWrap="wrap"
            key={ind}
            style={{
              borderBottom: "1px solid #F3F5F9",
              borderTop: "1px solid #F3F5F9",
            }}
          >
            <FlexBox gap={2.5} alignItems="center">
              <Avatar
                alt={name}
                src={thumbnail}
                sx={{ height: 64, width: 64 }}
              />

              <div>
                <H6>{name}</H6>
                <Paragraph color="grey.600">
                  {`${item.width} sq feet X ${item.height} sq feet`}
                </Paragraph>
              </div>
            </FlexBox>

            <Paragraph color="grey.600" ellipsis>
              {description}
            </Paragraph>

            <Item title="Quantity:" value={item.quantity} />
            <Item
              title="Price:"
              value={currency(product_price) + " per sq feet"}
            />
            {/* <Button variant="text" color="primary">
              Write a Review
            </Button> */}
          </FlexBetween>
        );
      })}
    </Card>
  );
}

function Item({ title, value }: { title: string; value: string }) {
  return (
    <FlexBox gap={1} alignItems="center">
      <Paragraph color="grey.600">{title}</Paragraph>
      <Paragraph>{value}</Paragraph>
    </FlexBox>
  );
}
