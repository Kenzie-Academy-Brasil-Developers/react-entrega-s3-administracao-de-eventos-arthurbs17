import { useContext } from "react";
import { WeddingContext } from "../../providers/Wedding/wedding";
import { CardBag, ContainerBag, ContentBag } from "../../styles/cardInBag";
import { ButtonRemove } from "../Button/buttons";

const WeddingList = () => {
  const { weddingBag, removeFromWeddingBag } = useContext(WeddingContext);
  return (
    <ContainerBag>
      <h2>Bebidas casamento</h2>
      <ContentBag>
        {weddingBag.map((product) => (
          <CardBag key={product.id}>
            <img src={product.image_url} alt={product.name} />
            <h3>{product.name}</h3>
            <ButtonRemove removeBag={removeFromWeddingBag} item={product}>
              Retirar
            </ButtonRemove>
          </CardBag>
        ))}
      </ContentBag>
    </ContainerBag>
  );
};

export default WeddingList;
