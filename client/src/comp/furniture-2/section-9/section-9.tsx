import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ServiceCard1 from "@/components/service-cards/service-card-1";

export default async function Section9() {
  const services = [
    {
      id: "5f9bd366-9583-4e6d-9b11-abe74b9c5d96",
      icon: "Truck",
      title: "Nation Wide Delivery",
      description: "We deliver our products across India",
    },
    {
      id: "121cffea-6972-41f8-8094-98dca22d17bb",
      icon: "CreditCardVerified",
      title: "Safe Payment",
      description: "Make your payment without a worry",
    },
    {
      id: "5b94f5d8-71ec-40a6-b5b8-401286deba24",
      icon: "Shield",
      title: "Shop With Confidence",
      description: "We Deliver best products available",
    },
    {
      id: "8c4bb18f-d914-4269-9c7c-3c6728ba33e9",
      icon: "CustomerService",
      title: "24/7 Support",
      description: "We provide support for any queries",
    },
  ];

  return (
    <Container>
      <Grid container spacing={3} mt={8}>
        {services.map(({ icon, id, title, description }) => (
          <Grid item lg={3} sm={6} xs={12} key={id}>
            <ServiceCard1 icon={icon} title={title} description={description} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
