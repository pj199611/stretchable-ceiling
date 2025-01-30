import Image from "next/image";
import Link from "next/link";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { format } from "date-fns";
// GLOBAL CUSTOM COMPONENTS
import { H6, Paragraph } from "@/components/Typography";
import { FlexBetween, FlexBox } from "@/components/flex-box";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "@/lib";

export default function OrderedProducts({ order }) {
  console.log(order);
  const { _id, createdAt, isCustomized, products, payment_status } =
    order || {};

  if (isCustomized)
    return (
      <Card sx={{ p: 0, mb: "30px" }} key={`key-${_id}`}>
        <FlexBetween px={6} py={2} flexWrap="wrap" bgcolor="grey.200">
          <Item title="Order ID:" value={_id} />
          <Item
            title="Placed on:"
            value={format(new Date(createdAt), "dd MMM, yyyy")}
          />
          <Item title="Order Approval Status:" value={order.status} />
        </FlexBetween>

        {products.map((item, ind: number) => {
          const {
            customizedUrls = [],
            height,
            imageUrls,
            quantity,
            stockPhotoIds = [],
            width,
            _id,
          } = item;
          const hasCustomizedImage =
            customizedUrls.length > 0 || imageUrls.length > 0;
          return (
            <>
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
                  {hasCustomizedImage && (
                    <Link
                      href={customizedUrls[0] || imageUrls[0]}
                      target="_blank"
                    >
                      <Avatar
                        alt={"Customized Image"}
                        src={customizedUrls[0] || imageUrls[0]}
                        sx={{ height: 64, width: 64 }}
                      />
                    </Link>
                  )}
                  <div>
                    <H6>{"Customized Image"}</H6>
                    <Paragraph color="grey.600">
                      {`${width} sq feet X ${height} sq feet`}
                    </Paragraph>
                  </div>
                </FlexBox>
                <Item title="Quantity:" value={quantity} />
                <Item title="Price:" value={currency(850) + " per sq feet"} />
                {/* <Button variant="text" color="primary">
            Write a Review
          </Button> */}
              </FlexBetween>

              <div style={{ padding: "24px 48px" }}>
                {order.remarks && (
                  <Paragraph>{`Remark: ${order.remarks}`}</Paragraph>
                )}
                <div style={{ marginTop: 8 }} />
                {stockPhotoIds.length > 0 && (
                  <Paragraph>{`Selected Stock ID: ${stockPhotoIds[0]}`}</Paragraph>
                )}
                <div style={{ marginTop: 8 }} />
                {customizedUrls.length > 0 && (
                  <Link href={customizedUrls[0]} key="url" target="_blank">
                    <Image
                      src={customizedUrls[0]}
                      alt={"image"}
                      height={180}
                      width={200}
                      style={{ margin: "0 8px" }}
                      loading="lazy"
                    />
                  </Link>
                )}
                {imageUrls.length > 0 &&
                  imageUrls.map((val: string, i: number) => (
                    <Link href={val} key={i} target="_blank">
                      <Image
                        src={val}
                        alt={"image"}
                        height={180}
                        width={200}
                        style={{ margin: "0 8px" }}
                        loading="lazy"
                      />
                    </Link>
                  ))}
              </div>
            </>
          );
        })}
      </Card>
    );
  else
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
