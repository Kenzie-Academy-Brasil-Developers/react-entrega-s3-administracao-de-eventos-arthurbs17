import { useContext } from "react";
import { GraduationContext } from "../../providers/ Graduation/graduation";
import { CardBag, ContainerBag, ContentBag } from "../../styles/cardInBag";
import { ButtonRemove } from "../Button/buttons";

const GraduationList = () => {
  const { graduationBag, removeFromGraduationBag } =
    useContext(GraduationContext);
  return (
    <ContainerBag>
      <h2>Bebidas formatura</h2>
      <ContentBag>
        {graduationBag.map((product) => (
          <CardBag key={product.id}>
            <img src={product.image_url} alt={product.name} />
            <h3>{product.name}</h3>
            <ButtonRemove removeBag={removeFromGraduationBag} item={product}>
              Retirar
            </ButtonRemove>
          </CardBag>
        ))}
      </ContentBag>
    </ContainerBag>
  );
};

export default GraduationList;
