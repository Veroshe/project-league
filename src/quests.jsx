import fizz from "./assets/fizz.png";
import evelynn from "./assets/evelynn.png";

const ImageQuestion = ({imgSrc}) => (
  <div className="image-question">
    <p>Co to za champion?</p>
    <img src={imgSrc} alt="Champion" className="champion" />
  </div>
);

export const QUESTS = {
  "03/10/2023": [
    {
      type: "quiz",
      question: "Kto z tych cosplayerów NIE należy do Project: League",
      answers: ["Kanto", "Tyna", "Kamui", "Laf"],
      goodAnswer: "Kamui",
      storageKey: "quest1 - 03/10/2023",
    },
    {
      type: "quiz",
      question: <ImageQuestion imgSrc={fizz} />,
      answers: ["Fizz", "Nami", "Nautilus", "Nilah"],
      goodAnswer: "Fizz",
      storageKey: "quest2 - 03/10/2023",
    },
    {
      type: "quiz",
      question: <ImageQuestion imgSrc={evelynn} />,
      answers: ["Vayne", "Evelynn", "Elise", "Bel'Veth"],
      goodAnswer: "Evelynn",
      storageKey: "quest3 - 03/10/2023",
    },
  ],
};
