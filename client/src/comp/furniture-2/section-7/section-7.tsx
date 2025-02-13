import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H3, Paragraph } from "@/components/Typography";
// LOCAL CUSTOM COMPONENT
import TestimonialCard from "./testimonial-card";
// API FUNCTIONS

const testimonials = [
  {
    id: "1",
    comment:
      "We recently had a stretchable ceiling installed in our living room, and it’s transformed the entire space! The installation process was quick and easy, and the result is sleek and modern. The fabric material has a beautiful matte finish, and it has completely enhanced the aesthetics of the room. The ceiling is also really durable and easy to clean. Highly recommend for anyone looking to add a contemporary touch to their home!",
    name: "Amit Aggarwal",
    designation: "Architect",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOiVTtmHy1IPxGhMuuoxwWz-kjqEkyi8Vc-w&s",
  },
  {
    id: "2",
    comment:
      "I couldn't be happier with our new stretchable ceiling! Not only does it look fantastic, but it also helped with soundproofing in our home theater room. The flexibility of the design allowed us to customize it to fit the space perfectly. The installation was seamless, and the ceiling has held up beautifully. If you're considering a modern, stylish upgrade for your space, this is definitely the way to go!",
    name: "Aman Gupta",
    designation: "Software Developer",
    avatar: "https://imageonline.co/image.jpg",
  },
  {
    id: "3",
    comment:
      "I’ve always wanted a ceiling that would make my bathroom look sleek and modern. After installing a stretchable ceiling, it’s exactly what I hoped for—stylish, smooth, and water-resistant. The glossy finish reflects the light beautifully, and the ceiling looks flawless. It’s also been really easy to clean, which is a huge plus for a bathroom environment. I’m so pleased with the results!",

    name: "Sankalp Katiyar",
    designation: "Designer",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFD5pb-D2HNw_pVOsGbdiuHLwzuEiPADe73g&s",
  },
];

export default async function Section7() {
  return (
    <Box bgcolor="grey.50" mt={1} pt={1} pb={8}>
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
