import "../App.scss";
import {QuizCard} from "./QuizCard";
import {InstaCard} from "./InstaCard";
import {EmojiCard} from "./EmojiCard";
import {QRCard} from "./QRCard";
import Typography from "@mui/material/Typography";

function Quests() {
  return (
    <>
      <Typography variant="h3" sx={{mb: 2}}>
        Wykonaj zadania i wygraj nagrody!
      </Typography>
      <InstaCard />
      <QuizCard />
      <EmojiCard />
      <QRCard />
    </>
  );
}

export default Quests;
