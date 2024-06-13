import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {useTheme} from "@mui/system";
import CardActions from "@mui/material/CardActions";
import kanto from "../../../assets/wiocha/kanto.png";
import bisz from "../../../assets/wiocha/bisz.png";
import chantal from "../../../assets/wiocha/chantal.png";
import daleo from "../../../assets/wiocha/daleo.png";
import fuki from "../../../assets/wiocha/fuki.png";
import innu from "../../../assets/wiocha/innu.png";
import jolly from "../../../assets/wiocha/jolly.png";
import karina from "../../../assets/wiocha/karina.png";
import kayl from "../../../assets/wiocha/kayl.png";
import laf from "../../../assets/wiocha/laf.png";
import laura from "../../../assets/wiocha/laura.png";
import nina from "../../../assets/wiocha/nina.png";
import olca from "../../../assets/wiocha/olca.png";
import reo from "../../../assets/wiocha/reo.png";
import senapi from "../../../assets/wiocha/senapi.png";
import shapi from "../../../assets/wiocha/shapi.png";
import silver from "../../../assets/wiocha/silver.png";
import talon from "../../../assets/wiocha/talon.png";
import tul from "../../../assets/wiocha/tul.png";
import tyna from "../../../assets/wiocha/tyna.png";
import wero from "../../../assets/wiocha/wero.png";

const userTestimonials = [
  {
    image: laura,
    name: "Asgardian Fraud",
    url: "https://www.instagram.com/asgardianfraud/",
  },
  {
    image: bisz,
    name: "Bish",
    url: "https://www.instagram.com/bishcosplay",
  },
  {
    image: chantal,
    name: "Charin",
    url: "https://www.instagram.com/charin_cosplay",
  },
  {
    image: daleo,
    name: "Daleo",
    url: "https://www.instagram.com/deleocosplay",
  },
  {
    image: fuki,
    name: "Fukari",
    url: "https://www.instagram.com/fukari_stuff",
  },
  {
    image: innu,
    name: "Innu",
    url: "https://www.instagram.com/innu.cos",
  },
  {
    image: jolly,
    name: "Jolly Salmon",
    url: "https://www.instagram.com/jollysalmon",
  },
  {
    image: kanto,
    name: "Kanto",
    url: "https://www.instagram.com/kanto.cosplay",
  },
  {
    image: karina,
    name: "Karina",
    url: "https://www.instagram.com/karinakozak",
  },
  {
    image: kayl,
    name: "Kayl",
    url: "https://www.instagram.com/kaylsstuff",
  },
  {
    image: laf,
    name: "Laf",
    url: "https://www.instagram.com/worldbylaf",
  },
  {
    image: olca,
    name: "Olca",
    url: "https://www.instagram.com/olca.craft",
  },
  {
    image: reo,
    name: "Reo",
    url: "https://www.instagram.com/reoberry",
  },
  {
    image: senapi,
    name: "Senapi",
    url: "https://www.instagram.com/senapi.cosplay",
  },
  {
    image: shapi,
    name: "Shappi",
    url: "https://www.instagram.com/shappiworkshop",
  },
  {
    image: silver,
    name: "Silver",
    url: "https://www.instagram.com/silvery.vixen",
  },
  {
    image: talon,
    name: "Talon",
    url: "https://www.instagram.com/talonscosplaycrusade",
  },
  {
    image: tul,
    name: "Tul",
    url: "https://www.instagram.com/tul.cosplay",
  },
  {
    image: tyna,
    name: "Tyna",
    url: "https://www.instagram.com/tyna.crafts",
  },
  {
    image: wero,
    name: "Wero",
    url: "https://www.instagram.com/wero_crafts",
  },
  {
    image: nina,
    name: "Yami",
    url: "https://www.instagram.com/yuummy.yami",
  },
];

export default function Testimonials() {
  return (
    <Container
      id="testimonials"
      sx={{
        pt: {xs: 4, sm: 12},
        pb: {xs: 8, sm: 16},
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: {xs: 3, sm: 6},
      }}
    >
      <Box
        sx={{
          width: {sm: "100%", md: "60%"},
          textAlign: {sm: "left", md: "center"},
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Wioskowicze
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{display: "flex"}}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <img src={testimonial.image} className="cool-image" />
              </CardContent>
              <CardActions sx={{justifyContent: "center"}}>
                <a className="cool-link" href={testimonial.url}>
                  {testimonial.name}
                </a>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
