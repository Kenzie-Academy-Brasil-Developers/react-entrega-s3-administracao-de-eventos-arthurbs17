import { useContext } from "react";
import { ConfraternizationContext } from "../../providers/Confraternization/confraternization";
import { CardBag, ContainerBag, ContentBag } from "../../styles/cardInBag";
import { ButtonRemove } from "../Button/buttons";

const ConfraternizationList = () => {
  const { confraBag, removeFromConfraBag } = useContext(
    ConfraternizationContext
  );
  return (
    <ContainerBag>
      <h2>Bebidas confraternização</h2>
      <ContentBag>
        {confraBag.map((product) => (
          <CardBag key={product.id}>
            <img src={product.image_url} alt={product.name} />
            <h3>{product.name}</h3>
            <ButtonRemove removeBag={removeFromConfraBag} item={product}>
              Retirar
            </ButtonRemove>
          </CardBag>
        ))}
      </ContentBag>
    </ContainerBag>
  );
};

export default ConfraternizationList;
