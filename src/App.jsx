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

import LandingPage from "./components/landing-page/LandingPage";

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

  return <LandingPage />;
}

export default App;
