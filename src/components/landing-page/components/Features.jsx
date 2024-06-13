import "./Features.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import QuizIcon from "@mui/icons-material/Quiz";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import PetsIcon from "@mui/icons-material/Pets";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import kogMaw from "../../../assets/Kog'Maw.png";
import PeopleIcon from "@mui/icons-material/People";
import ExtensionIcon from "@mui/icons-material/Extension";
import matura from "../../../assets/atrakcje/matura.jpg";
import strzelnica from "../../../assets/atrakcje/strzelnica.jpg";
import yummi from "../../../assets/atrakcje/yummi.jpeg";
import goscie from "../../../assets/atrakcje/goscie.jpeg";
import plansz from "../../../assets/atrakcje/plansz.jpg";

const items = [
  {
    icon: <QuizIcon />,
    title: "Matura",
    description:
      "Śledzisz zacięcie scenę e-sportowa? Masz świra na punkcie ligowego lore? Sprawdź swoją wiedzę w tych, oraz wielu innych dziedzinach, dzięki przygotowanych przez nas i naszych gości maturach!",
    imageDark: matura,
  },
  {
    icon: <TrackChangesIcon />,
    title: "Strzelnica",
    description:
      "Wciel się w rolę adc i poczuj dreszczyk emocji rozprawiając się z minionami na lini w świecie rzeczywistym!",
    imageDark: strzelnica,
  },
  {
    icon: <PetsIcon />,
    title: "Yuumi",
    description:
      "Celnosc ataków to podstawa! Sprawdź jak sobie poradzisz w starciu z Yuumi i rzutami do ruchomych celów!",
    imageDark: yummi,
  },
  {
    icon: <PeopleIcon />,
    title: "Goście wioski",
    description:
      "W naszym programie czekają na ciebie spotkania i konkursy z gośćmi wioski. To świetna okazja aby poznać kulisy pracy stremeróww, youtuberów, a nawet casterów! Sprawdź rozpiskę godzinową i weź udzial w spotkaniach oraz quizach z nagrodami na żywo!",
    imageDark: goscie,
  },
  {
    icon: <ExtensionIcon />,
    title: "Strefa planszówkowa",
    description:
      "Chcesz spędzić chwilę ze znajomymi w ligowym klimacie, a może poznać nowych przywoływaczy? Zapraszamy na nasze autorskie planszowki, gdzie każdy znajdzie coś dla siebie!",
    imageDark: plansz,
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{py: {xs: 8, sm: 16}}}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography
              component="h2"
              variant="h4"
              color="text.primary"
              sx={{marginBottom: 2}}
            >
              Atrakcje na wiosce
            </Typography>
          </div>
          <Grid container item gap={1} sx={{display: {xs: "auto", sm: "none"}}}>
            {items.map(({title}, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "primary.light" : "";
                    }
                    return selectedItemIndex === index ? "primary.light" : "";
                  },
                  background: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "none" : "";
                    }
                    return selectedItemIndex === index ? "none" : "";
                  },
                  backgroundColor:
                    selectedItemIndex === index ? "primary.main" : "",
                  "& .MuiChip-label": {
                    color: selectedItemIndex === index ? "#fff" : "",
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: {xs: "auto", sm: "none"},
              mt: 4,
            }}
          >
            <img
              src={items[selectedItemIndex].imageDark}
              style={{
                width: "100%",
                height: "16rem",
              }}
            />
            <Box sx={{px: 2, pb: 2}}>
              <Typography
                color="text.primary"
                variant="body2"
                fontWeight="bold"
                sx={{pt: 2}}
              >
                {selectedFeature.title}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{my: 0.5}}>
                {selectedFeature.description}
              </Typography>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{width: "100%", display: {xs: "none", sm: "flex"}}}
          >
            {items.map(({icon, title, description}, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: "fit-content",
                  width: "100%",
                  background: "none",
                  backgroundColor:
                    selectedItemIndex === index ? "action.selected" : undefined,
                  borderColor: () => {
                    return selectedItemIndex === index
                      ? "#C1AF7F"
                      : "secondary.dark";
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: {xs: "column", md: "row"},
                    alignItems: {md: "center"},
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === "light") {
                          return selectedItemIndex === index
                            ? "primary.main"
                            : "grey.300";
                        }
                        return selectedItemIndex === index
                          ? "primary.main"
                          : "secondary.700";
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{textTransform: "none"}}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{my: 0.5}}
                    >
                      {description}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: {xs: "none", sm: "flex"},
            width: "100%",
            alignItems: "center",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: "fit-content",
              width: "100%",
              display: {xs: "none", sm: "flex"},
              pointerEvents: "none",
            }}
          >
            <img
              src={items[selectedItemIndex].imageDark}
              style={{
                width: "100%",
                height: "22rem",
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
