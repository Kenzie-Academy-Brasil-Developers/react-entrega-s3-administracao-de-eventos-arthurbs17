const { useContext } = require("react");
const { GraduationContext } = require("../../providers/ Graduation/graduation");
const {
  ConfraternizationContext,
} = require("../../providers/Confraternization/confraternization");
const { WeddingContext } = require("../../providers/Wedding/wedding");

const ButtonAdd = ({ type, item, children }) => {
  const { addToWeddingBag } = useContext(WeddingContext);
  const { addToGraduationBag } = useContext(GraduationContext);
  const { addToConfraBag } = useContext(ConfraternizationContext);

  const handleClick = () => {
    console.log(type);
    if (type === "formatura") {
      addToGraduationBag(item);
    }
    if (type === "confraternização") {
      addToConfraBag(item);
    }
    if (type === "casamento") {
      addToWeddingBag(item);
    }
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default ButtonAdd;
