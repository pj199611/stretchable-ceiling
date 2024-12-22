import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H3, Paragraph } from "@/components/Typography";
// LOCAL CUSTOM COMPONENT
import TestimonialCard from "./testimonial-card";
// API FUNCTIONS

export default async function Section7() {
  const testimonials = [
    {
      id: "1",
      comment: "Lorem ipsum dolor sit amet, cot at amet.",
      name: "User 1",
      designation: "Designer",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-VJxaFIy3CEl9egxp5FJ1Qgk5jrPM03s4A&s",
    },
    {
      id: "2",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.",
      name: "User 2",
      designation: "Designer",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-VJxaFIy3CEl9egxp5FJ1Qgk5jrPM03s4A&s",
    },
    {
      id: "3",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.",
      name: "User 3",
      designation: "Designer",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-VJxaFIy3CEl9egxp5FJ1Qgk5jrPM03s4A&s",
    },
    // {
    //   id: "4",
    //   comment:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.",
    //   name: "User 4",
    //   designation: "Designer",
    //   avatar:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-VJxaFIy3CEl9egxp5FJ1Qgk5jrPM03s4A&s",
    // },
  ];

  return (
    <Box bgcolor="grey.50" mt={10} pt={8} pb={30}>
      <Container>
        <Box mb={5} textAlign="center">
          <H3 fontSize={{ sm: 30, xs: 27 }}>Testimonial</H3>
          <Paragraph color="grey.600" fontSize={{ sm: 16, xs: 14 }}>
            Expressions from the customer
          </Paragraph>
        </Box>

        <Grid container spacing={3}>
          {testimonials.map((item, i) => (
            <Grid item md={4} xs={12} key={item.id}>
              <TestimonialCard testimonial={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
