import {useState} from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import useLocalStorage from "use-local-storage";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import {cardStyles, cardActionsStyles} from "./cardStyles";
import Typography from "@mui/material/Typography";

export const QuizCard = ({
  storageKey,
  question,
  answers,
  goodAnswer,
  number,
  increaseQuestsCounter,
}) => {
  const [value, setValue] = useState(null);
  const [key, setKey] = useLocalStorage(storageKey, "");
  const [error, setError] = useState(false);

  console.log(storageKey);
  console.log(key);
  console.log(error);

  const handleSubmit = async () => {
    if (value === goodAnswer) {
      await setKey("set");
      increaseQuestsCounter();
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <Card sx={cardStyles} className={[key && "disabled", error && "error"]}>
      <CardContent>
        <Typography variant="h3">
          Zadanie {number} {key && "- wykonane"}
        </Typography>
        <FormControl>
          <FormLabel id={question} color="primary" sx={{color: "#fff"}}>
            {question}
          </FormLabel>
          <RadioGroup
            name={question}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
          >
            {answers.map((answer) => (
              <FormControlLabel
                value={answer}
                control={<Radio />}
                label={answer}
                key={answer}
                disabled={key === "set"}
                sx={{marginTop: "10px", marginBottom: "10px"}}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </CardContent>
      <CardActions sx={cardActionsStyles}>
        <Button
          onClick={handleSubmit}
          disabled={key === "set"}
          variant="outlined"
          size="small"
        >
          Zatwierdź
        </Button>
      </CardActions>
    </Card>
  );
};
