import "../App.scss";
import useLocalStorageState from "use-local-storage-state";
import {NickInput} from "./NickInput";
import Quests from "./Quests";
import Stack from "@mui/material/Stack";
import {Happy} from "./Happy";
var todaysDate = new Date();
const isToday = (date) => {
  return (
    new Date(date).setHours(0, 0, 0, 0) === todaysDate.setHours(0, 0, 0, 0)
  );
};

const checkIfAllDone = (insta, teemo, quiz, emoji) => {
  if (
    insta?.date &&
    teemo?.date &&
    quiz.find((el) => isToday(el.date))?.done &&
    emoji.find((el) => isToday(el.date))?.done
  ) {
    return true;
  }

  return false;
};

function Quiz() {
  const [nick] = useLocalStorageState("nick", {defaultValue: null});
  const [insta] = useLocalStorageState("insta");
  const [teemo] = useLocalStorageState("teemo");
  const [quiz] = useLocalStorageState("quiz");
  const [emoji] = useLocalStorageState("emoji");

  const isAllDone = checkIfAllDone(insta, teemo, quiz, emoji);

  if (isAllDone) {
    return (
      <Stack sx={{p: 4, paddingTop: 12}}>
        <Happy />
      </Stack>
    );
  }

  return (
    <Stack sx={{p: 4, paddingTop: 12}}>
      {!nick ? <NickInput /> : <Quests />}
    </Stack>
  );
}

export default Quiz;
