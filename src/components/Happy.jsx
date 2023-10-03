import Typography from "@mui/material/Typography";
import happy1 from "../assets/1.png";
import happy2 from "../assets/2.png";
import happy3 from "../assets/3.png";
import happy4 from "../assets/4.png";

const HAPPY_ICONS = [happy1, happy2, happy3, happy4];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const Happy = () => {
  return (
    <div className="happy">
      <div className="header-text">
        <Typography
          variant="h1"
          color="secondary"
          sx={{fontSize: "24px", marginBottom: "10px"}}
        >
          Gratulacje!
        </Typography>
        <Typography variant="p" color="primary" className="list">
          Zadania wykonane!
        </Typography>

        <Typography>
          Zgłoś się do naszego centrum dowodzenia i weź udział w losowaniu
          nagrody głównej!
        </Typography>
      </div>

      <img
        src={HAPPY_ICONS[getRandomInt(4)]}
        alt="Happy icon"
        className="happy-icon"
      />
    </div>
  );
};
