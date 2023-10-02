import "./App.scss";
import Button from "@mui/material/Button";
import {InfoOutlined} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import {QRCard} from "./components/QRCard";
import {QuizCard} from "./components/QuizCard";
import {Header} from "./components/Header";
import {getToday} from "./helpers";
import {QUESTS} from "./quests";

const question1 = {
  question: "Który champion lola jest najlepszy?",
  answers: ["Teemo", "Jinx", "Gragas"],
  goodAnswer: "Teemo",
};

function App() {
  const today = getToday();
  console.log(typeof today);
  console.log(QUESTS[today]);

  return (
    <div className="App">
      <Header />

      <div className="questions">
        <QRCard storageKey={`kantor - ${today}`} />
        {QUESTS[today].map((quest) => {
          return (
            <QuizCard
              key={quest.question}
              question={quest.question}
              answers={quest.answers}
              goodAnswer={quest.goodAnswer}
              storageKey={quest.storageKey}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
