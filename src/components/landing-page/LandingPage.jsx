import {Box} from "@mui/material";
import Divider from "@mui/material/Divider";

import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AppAppBar from "./components/AppAppBar";

export default function LandingPage() {
  return (
    <>
      <AppAppBar />
      <Hero />
      <Box sx={{bgcolor: "background.default"}}>
        <Features />

        <Testimonials />
        <Divider />
        <Footer />
      </Box>
    </>
  );
}
