import "../App.scss";
import {QuizCard} from "./QuizCard";
import {InstaCard} from "./InstaCard";
import {EmojiCard} from "./EmojiCard";
import {QRCard} from "./QRCard";

function Quests() {
  return (
    <>
      <InstaCard />
      <QuizCard />
      <EmojiCard />
      <QRCard />
    </>
  );
}

export default Quests;
