import { AddButton, RemoveButton } from "./styles";

import { useContext } from "react";
import { GraduationContext } from "../../providers/ Graduation/graduation";
import { ConfraternizationContext } from "../../providers/Confraternization/confraternization";
import { WeddingContext } from "../../providers/Wedding/wedding";

export const ButtonAdd = ({ type, item, children }) => {
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

  return <AddButton onClick={handleClick}>{children}</AddButton>;
};

export const ButtonRemove = ({ removeBag, item, children }) => {
  const handleClick = () => {
    removeBag(item);
  };

  return <RemoveButton onClick={handleClick}>{children}</RemoveButton>;
};
