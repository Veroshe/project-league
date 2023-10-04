import fizz from "./assets/Fizz.png";
import evelynn from "./assets/Evelynn.png";

const ImageQuestion = ({imgSrc}) => (
  <div className="image-question">
    <p>Co to za champion?</p>
    <img src={imgSrc} alt="Champion" className="champion" />
  </div>
);

export const QUESTS = {
  "04/10/2023": [
    {
      type: "quiz",
      question: (
        <p>
          Znajdź Teemo ukrytego gdzieś na naszej wiosce i zaznacz gdzie się
          znajduje
        </p>
      ),
      answers: [
        "na strzelnicy",
        "w dupie Kanto",
        "zgonuje na zapleczu",
        "w cycach Bisz :3",
      ],
      goodAnswer: "w dupie Kanto",
      storageKey: "quest1 - 04/10/2023",
    },
    {
      type: "quiz",
      question: <p>Kto z tych cosplayerów NIE należy do Project: League</p>,
      answers: ["Kanto", "Tyna", "Kamui", "Laf"],
      goodAnswer: "Kamui",
      storageKey: "quest2 - 04/10/2023",
    },
    {
      type: "quiz",
      question: <ImageQuestion imgSrc={fizz} />,
      answers: ["Fizz", "Nami", "Nautilus", "Nilah"],
      goodAnswer: "Fizz",
      storageKey: "quest3 - 04/10/2023",
    },
    {
      type: "quiz",
      question: <ImageQuestion imgSrc={evelynn} />,
      answers: ["Vayne", "Evelynn", "Elise", "Bel'Veth"],
      goodAnswer: "Evelynn",
      storageKey: "quest4 - 04/10/2023",
    },
  ],
};
