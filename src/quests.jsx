import fizz from "./assets/Fizz.png";
import evelynn from "./assets/Evelynn.png";
import lulu from "./assets/Lulu.png";
import bard from "./assets/Bard.png";
import caitlyn from "./assets/Caitlyn.png";
import sylas from "./assets/Sylas.png";

const ImageQuestion = ({imgSrc}) => (
  <div className="image-question">
    <p>Co to za champion?</p>
    <img src={imgSrc} alt="Champion" className="champion" />
  </div>
);

export const QUESTS = {
  "06/10/2023": [
    {
      type: "quiz",
      question: (
        <p>
          Znajdź poro w czapce Teemo ukrytego gdzieś na naszej wiosce i zaznacz
          gdzie się znajduje
        </p>
      ),
      answers: [
        "na strzelnicy",
        "na strefie Spirit Blossom",
        "obok kapelusza Caitlyn",
        "gra w planszówki",
      ],
      goodAnswer: "na strefie Spirit Blossom",
      storageKey: "quest1 - 06/10/2023",
    },
    {
      type: "quiz",
      question: <p>Kto z tych cosplayerów NIE należy do Project: League</p>,
      answers: ["Kanto", "Tyna", "Kamui", "Laf"],
      goodAnswer: "Kamui",
      storageKey: "quest2 - 06/10/2023",
    },
    {
      type: "quiz",
      question: <ImageQuestion imgSrc={fizz} />,
      answers: ["Fizz", "Nami", "Nautilus", "Nilah"],
      goodAnswer: "Fizz",
      storageKey: "quest3 - 06/10/2023",
    },
    {
      type: "quiz",
      question: <ImageQuestion imgSrc={evelynn} />,
      answers: ["Vayne", "Evelynn", "Elise", "Bel'Veth"],
      goodAnswer: "Evelynn",
      storageKey: "quest4 - 06/10/2023",
    },
  ],
  "07/10/2023": [
    {
      type: "quiz",
      question: (
        <p>
          Znajdź poro w czapce Teemo ukrytego gdzieś na naszej wiosce i zaznacz
          gdzie się znajduje
        </p>
      ),
      answers: [
        "na strzelnicy",
        "na strefie Spirit Blossom",
        "obok kapelusza Caitlyn",
        "gra w planszówki",
      ],
      goodAnswer: "na strzelnicy",
      storageKey: "quest1 - 07/10/2023",
    },
    {
      type: "quiz",
      question: <p>Kto NIE pojawił się na cinematicu &quot;The Call&quot;?</p>,
      answers: ["Leona", "Camille", "Sejuani", "Kai'Sa"],
      goodAnswer: "Camille",
      storageKey: "quest2 - 07/10/2023",
    },
    {
      type: "quiz",
      question: <ImageQuestion imgSrc={lulu} />,
      answers: ["Syndra", "Soraka", "Lulu", "Zoe"],
      goodAnswer: "Lulu",
      storageKey: "quest3 - 07/10/2023",
    },
    {
      type: "quiz",
      question: <ImageQuestion imgSrc={bard} />,
      answers: ["Wukong", "Maokai", "Milo", "Bard"],
      goodAnswer: "Evelynn",
      storageKey: "quest4 - 07/10/2023",
    },
  ],
  "08/10/2023": [
    {
      type: "quiz",
      question: (
        <p>
          Znajdź poro w czapce Teemo ukrytego gdzieś na naszej wiosce i zaznacz
          gdzie się znajduje
        </p>
      ),
      answers: [
        "na strzelnicy",
        "na strefie Spirit Blossom",
        "obok kapelusza Caitlyn",
        "gra w planszówki",
      ],
      goodAnswer: "gra w planszówki",
      storageKey: "quest1 - 08/10/2023",
    },
    {
      type: "quiz",
      question: <p>Który region jest spowity wiecznym śniegiem?</p>,
      answers: ["Freljord", "Targon", "Ionia", "Ixtal"],
      goodAnswer: "Freljord",
      storageKey: "quest2 - 08/10/2023",
    },
    {
      type: "quiz",
      question: <ImageQuestion imgSrc={caitlyn} />,
      answers: ["Vi", "Lulu", "Morgan", "Caitlyn"],
      goodAnswer: "Caitlyn",
      storageKey: "quest3 - 08/10/2023",
    },
    {
      type: "quiz",
      question: <ImageQuestion imgSrc={sylas} />,
      answers: ["Tryndamere", "Sett", "Sylas", "Ziggs"],
      goodAnswer: "Sylas",
      storageKey: "quest4 - 08/10/2023",
    },
  ],
};
