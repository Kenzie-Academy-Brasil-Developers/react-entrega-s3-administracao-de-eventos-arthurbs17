import { useContext } from "react";
import { ConfraternizationContext } from "../../providers/Confraternization/confraternization";
import { ButtonRemove } from "../Button/buttons";

const ConfraternizationList = () => {
  const { confraBag, removeFromConfraBag } = useContext(
    ConfraternizationContext
  );
  return (
    <div>
      <ul>
        {confraBag.map((product) => (
          <li key={product.id}>
            {product.name}
            <ButtonRemove removeBag={removeFromConfraBag} item={product}>
              Retirar
            </ButtonRemove>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConfraternizationList;
