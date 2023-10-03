import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useLocalStorage from "use-local-storage";
import {cardStyles, cardActionsStyles} from "./cardStyles";

const INSTA = "https://www.instagram.com/project_league";

export const InstaCard = ({storageKey, increaseQuestsCounter}) => {
  const [key, setKey] = useLocalStorage(storageKey);

  return (
    <Card sx={cardStyles} className={key && "disabled"}>
      <CardContent>
        <Typography variant="h3">Zadanie 1 {key && "- wykonane"}</Typography>
        <Typography>Zaobserwuj nas na Instagramie!</Typography>
      </CardContent>
      <CardActions sx={cardActionsStyles}>
        <a
          href={INSTA}
          disabled={key === "set"}
          size="small"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            setKey("set");
            increaseQuestsCounter();
          }}
        >
          Idź do Instagrama
        </a>
      </CardActions>
    </Card>
  );
};
