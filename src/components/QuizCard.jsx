import {useState, useEffect} from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import {cardStyles, cardActionsStyles} from "./cardStyles";
import useLocalStorageState from "use-local-storage-state";
import {QUIZ_QUESTS} from "../quests";
import Typography from "@mui/material/Typography";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const todaysDate = new Date();

const isToday = (date) => {
  return (
    new Date(date).setHours(0, 0, 0, 0) === todaysDate.setHours(0, 0, 0, 0)
  );
};

export const QuizCard = () => {
  const [quiz, setQuiz] = useLocalStorageState("quiz", {
    defaultValue: [
      {
        id: getRandomInt(QUIZ_QUESTS.length),
        date: todaysDate,
        done: false,
      },
    ],
  });

  const [value, setValue] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!quiz.find((el) => isToday(el.date))) {
      setQuiz([
        ...quiz,
        {
          id: getRandomInt(QUIZ_QUESTS.length),
          date: todaysDate,
          done: false,
        },
      ]);
    }
  }, []);

  const todaysQuestion = quiz.find((el) => isToday(el.date));

  const quizQuestion = todaysQuestion && QUIZ_QUESTS[todaysQuestion.id];

  const handleSubmit = () => {
    if (value === quizQuestion.goodAnswer) {
      const el = quiz.find((el) => el.id === todaysQuestion?.id);
      const xd = {
        ...el,
        done: true,
      };
      const newKey = quiz;
      newKey[quiz.indexOf(el)] = xd;

      setQuiz(newKey);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (quizQuestion) {
    return (
      <Card sx={cardStyles} className={todaysQuestion.done && "disabled"}>
        <CardContent>
          <FormControl error={error}>
            <Typography variant="h3">Zadanie 2</Typography>
            <FormLabel
              id={quizQuestion.question}
              color="primary"
              sx={{color: "#fff"}}
            >
              {quizQuestion.question}
            </FormLabel>
            <RadioGroup
              name={quizQuestion.question}
              onChange={(e) => {
                setValue(e.target.value);
                setError(false);
              }}
            >
              {quizQuestion.answers.map((answer) => (
                <FormControlLabel
                  value={answer}
                  control={<Radio />}
                  label={answer}
                  key={answer}
                  disabled={todaysQuestion.done}
                  sx={{marginTop: "10px", marginBottom: "10px"}}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </CardContent>
        <CardActions sx={cardActionsStyles}>
          <Button
            onClick={handleSubmit}
            disabled={todaysQuestion.done}
            variant="outlined"
            size="small"
          >
            Zatwierdź
          </Button>
        </CardActions>
      </Card>
    );
  }
};
