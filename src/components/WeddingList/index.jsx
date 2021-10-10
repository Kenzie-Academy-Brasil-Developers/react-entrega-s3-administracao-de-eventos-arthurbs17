import { useContext } from "react";
import { WeddingContext } from "../../providers/Wedding/wedding";
import { ButtonRemove } from "../Button/buttons";

const WeddingList = () => {
  const { weddingBag, removeFromWeddingBag } = useContext(WeddingContext);
  return (
    <div>
      <ul>
        {weddingBag.map((product) => (
          <li key={product.id}>
            {product.name}
            <ButtonRemove removeBag={removeFromWeddingBag} item={product}>
              Retirar
            </ButtonRemove>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeddingList;
