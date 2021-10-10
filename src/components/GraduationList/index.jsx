import { useContext } from "react";
import { GraduationContext } from "../../providers/ Graduation/graduation";
import { ButtonRemove } from "../Button/buttons";

const GraduationList = () => {
  const { graduationBag, removeFromGraduationBag } =
    useContext(GraduationContext);
  return (
    <div>
      <ul>
        {graduationBag.map((product) => (
          <li key={product.id}>
            {product.name}
            <ButtonRemove removeBag={removeFromGraduationBag} item={product}>
              Retirar
            </ButtonRemove>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GraduationList;
