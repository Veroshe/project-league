import {
  TextField,
  InputLabel,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import {cardStyles, cardActionsStyles} from "./cardStyles";
import useLocalStorageState from "use-local-storage-state";
import {useState} from "react";
export const NickInput = () => {
  const [nick, setNick] = useLocalStorageState("nick");
  const [newNick, setNewNick] = useState(null);

  const handleSubmit = () => {
    setNick(newNick);
  };

  return (
    <Card sx={cardStyles}>
      <CardContent>
        <InputLabel>Twój nick</InputLabel>
        <TextField
          id="outlined-basic"
          size="small"
          variant="outlined"
          aria-label="Nick"
          placeholder="Heimerdinger"
          onChange={(e) => setNewNick(e.target.value)}
        />
      </CardContent>
      <CardActions sx={cardActionsStyles}>
        <Button onClick={handleSubmit} variant="outlined" size="small">
          Zatwierdź
        </Button>
      </CardActions>
    </Card>
  );
};
