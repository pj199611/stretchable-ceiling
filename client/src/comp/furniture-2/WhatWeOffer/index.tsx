import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { H3, Paragraph } from "@/components/Typography";
import ServiceCard from "./service-card";

const services = [
  {
    id: 1,
    heading: "Our Services",
    description: [
      {
        title: "Stretchable Ceilings",
        description:
          "Versatile and customizable ceilings that enhance aesthetics and functionality in any space.",
      },
      {
        title: "3D Wall Art",
        description:
          "Dynamic wall installations that add depth and visual interest to your interiors.",
      },
      {
        title: "Corian Marble Wall Panels",
        description:
          "Sleek and durable wall panels offering the luxurious look of marble with the resilience of Corian.",
      },
    ],
    avatar: "🏠",
  },
  {
    id: 2,
    heading: "Warranty",
    description: [
      {
        title: "21-Year Warranty on Fabric and Profiles",
        description: "Ensuring long-lasting durability and peace of mind.",
      },
      {
        title: "10-Year Warranty on LED Light Modules",
        description: "Guaranteeing reliable and efficient lighting solutions.",
      },
      {
        title: "Fire-Resistant Properties",
        description:
          "Our materials are designed to meet stringent fire safety standards.",
      },
    ],
    avatar: "🔒",
  },
  {
    id: 3,
    heading: "Technology & Innovation",
    description: [
      {
        title: "Barrisol Imported Material",
        description:
          "Utilizing high-quality Barrisol materials for superior finish and durability.",
      },
      {
        title: "High-Quality UV Printing Technology",
        description:
          "Achieving vibrant and long-lasting designs with advanced UV printing.",
      },
      {
        title: "AquaShield® Coating",
        description:
          "Waterproof, anti-fungal, and dust-resistant surface protection.",
      },
      {
        title: "DuraFlex™ Stretch Fabric",
        description:
          "Highly stretchable and durable materials designed to last.",
      },
      {
        title: "Eco-Friendly Materials",
        description:
          "Sustainable, non-toxic materials for a healthier indoor environment.",
      },
    ],
    avatar: "💡",
  },
  {
    id: 4,
    heading: "Price Benefits",
    description: [
      {
        title: "Cash Payments Accepted",
        description: "For orders up to ₹2,00,000.",
      },
      {
        title: "Flexible Payment Options",
        description: "Pay in structured parts based on project milestones.",
      },
      {
        title: "No Hidden Costs",
        description: "Transparent pricing with no unexpected charges.",
      },
    ],
    avatar: "💰",
  },
];

export default function WhatWeOffer() {
  return (
    <Box bgcolor="grey.50" mt={1} pt={1} pb={9}>
      <Container>
        <Box mb={5} textAlign="center">
          <H3 fontSize={{ sm: 30, xs: 27 }}>What We Offer</H3>
          <Paragraph color="grey.600" fontSize={{ sm: 16, xs: 14 }}>
            Our services and technologies
          </Paragraph>
        </Box>

        <Grid container spacing={3}>
          {services.map((item) => (
            <Grid item xs={12} sm={12} md={6} key={item.id}>
              <ServiceCard service={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
