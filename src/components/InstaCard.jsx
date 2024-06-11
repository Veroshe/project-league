import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useLocalStorageState from "use-local-storage-state";
import {cardStyles, cardActionsStyles} from "./cardStyles";
import {useEffect} from "react";

const INSTA = "https://www.instagram.com/project_league";
const KEY = "insta";

export const InstaCard = () => {
  const [insta, setInsta, {removeItem}] = useLocalStorageState(KEY, {
    defaultValue: null,
  });
  var todaysDate = new Date();

  const handleClick = () => {
    setInsta({date: todaysDate});
  };

  const isDoneToday =
    insta &&
    new Date(insta.date).setHours(0, 0, 0, 0) ===
      todaysDate.setHours(0, 0, 0, 0);

  useEffect(() => {
    if (
      insta &&
      new Date(insta.date).setHours(0, 0, 0, 0) !==
        todaysDate.setHours(0, 0, 0, 0)
    ) {
      removeItem();
    }
  }, []);

  return (
    <Card sx={cardStyles} className={isDoneToday && "disabled"}>
      <CardContent>
        <Typography>Zaobserwuj nas na Instagramie!</Typography>
      </CardContent>
      <CardActions sx={cardActionsStyles}>
        <a
          href={INSTA}
          disabled={isDoneToday}
          size="small"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          Idź do Instagrama
        </a>
      </CardActions>
    </Card>
  );
};
