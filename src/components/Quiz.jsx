import "../App.scss";
import {QuizCard} from "./QuizCard";
import {Header} from "./Header";
import {getToday} from "../helpers";
import {QUESTS} from "../quests";
import {InstaCard} from "./InstaCard";
import useLocalStorage from "use-local-storage";
import {Happy} from "./Happy";
import {HeaderText} from "./HeaderText";

function Quiz() {
  const today = getToday();
  const [key, setKey] = useLocalStorage(`quests all - ${today}`, 0);

  const increaseQuestsCounter = () => {
    setKey(key + 1);
  };

  if (key === 5) {
    return (
      <div className="App">
        <Header />
        <Happy />
      </div>
    );
  }

  return (
    <div className="App">
      <div className="questions">
        <InstaCard
          storageKey={`insta - ${today}`}
          increaseQuestsCounter={increaseQuestsCounter}
        />
        {QUESTS[today] &&
          QUESTS[today].map((quest, index) => {
            return (
              <QuizCard
                key={quest.goodAnswer}
                question={quest.question}
                answers={quest.answers}
                goodAnswer={quest.goodAnswer}
                storageKey={quest.storageKey}
                number={index + 2}
                increaseQuestsCounter={increaseQuestsCounter}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Quiz;
