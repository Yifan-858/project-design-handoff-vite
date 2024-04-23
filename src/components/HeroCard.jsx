import "./HeroImages.json";
import buttonData from "./Buttons.json";
import { Buttons } from "./Buttons";


export const HeroCard = ({ cardName, imageURL }) => {
  const topThreeButtons = buttonData.slice(0, 3);

  return (
    <div>
      <img src={imageURL} alt={cardName} />
      <Buttons buttonList={topThreeButtons} />
    </div>
  );
};
