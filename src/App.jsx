import "./App.scss";
import {QRCard} from "./components/QRCard";
import {QuizCard} from "./components/QuizCard";
import {Header} from "./components/Header";
import {getToday} from "./helpers";
import {QUESTS} from "./quests";
import {InstaCard} from "./components/InstaCard";
import useLocalStorage from "use-local-storage";
import {Happy} from "./components/Happy";
import {HeaderText} from "./components/HeaderText";

function App() {
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
      <Header />
      <HeaderText />

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

export default App;
