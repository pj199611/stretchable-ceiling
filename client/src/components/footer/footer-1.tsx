import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// LOCAL CUSTOM COMPONENT
import LogoSection from "./components/logo";
import AboutLinks from "./components/about-links";
import SocialLinks from "./components/social-links";
import CustomerCareLinks from "./components/customer-care-links";
// GLOBAL CUSTOM COMPONENTS
import { Paragraph } from "@/components/Typography";
// STYLED COMPONENTS
import { Heading } from "./styles";

export default function Footer1() {
  return (
    <Box bgcolor="#222935">
      <Box
        component={Container}
        color="white"
        overflow="hidden"
        py={{ sm: 8, xs: 4, md: 2 }}
        my={{ xs: 2, sm: 0 }}
      >
        <Grid container spacing={3}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <LogoSection />
          </Grid>

          {/* ABOUT US LINKS */}
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <AboutLinks />
            <div style={{ height: 16 }} />
            {/* SOCIAL LINKS WITH ICON */}
            <SocialLinks />
          </Grid>

          {/* CUSTOMER CARE LINKS */}
          {/* <Grid item lg={3} md={6} sm={6} xs={12}>
            <CustomerCareLinks />
          </Grid> */}

          {/* CONTACT & SOCIAL LINKS */}
          <Grid item lg={4} md={4} sm={6} xs={12}>
            {/* CONTACT INFORMATION */}
            <Heading>Contact Us</Heading>

            <Paragraph py={0.6} color="grey.500">
              Gurgaon
            </Paragraph>

            <Paragraph py={0.6} color="grey.500">
              <a href="mailto:contact@nestandnookinterior.com?subject=Hello%20There&body=I%20hope%20this%20message%20finds%20you%20well.">
                Email: contact@nestandnookinterior.com
              </a>
            </Paragraph>

            <Paragraph py={0.6} mb={2} color="grey.500">
              <a href="tel:844-704-1309"> Phone: 844-704-1309</a>
            </Paragraph>

            <Grid />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
