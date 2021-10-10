import { useContext, useState } from "react";

import { HomeBeersContext } from "../../providers/HomeBeers/homeBeers";
import { ButtonAdd } from "../Button/buttons";
import { Card, Container, Content } from "./styles";

const HomeBeers = () => {
  const { products } = useContext(HomeBeersContext);
  const [event, setEvent] = useState("");

  const handleChange = (e) => {
    setEvent(e.target.value);
  };

  return (
    <Container>
      <h2>Bebidas</h2>
      <Content>
        {products.map((product) => (
          <Card key={product.id}>
            <img src={product.image_url} alt={product.name} />
            <h3>{product.name}</h3>
            <span> Fabricação: {product.first_brewed}</span>
            <details>
              <summary>Descrição da bebida</summary>
              <span>{product.description}</span>
            </details>
            <label>
              Escolha o evento:
              <select value={event} onChange={handleChange}>
                <option value="">Selecione aqui</option>
                <option value="formatura">Formatura</option>
                <option value="casamento">Casamento</option>
                <option value="confraternização">Confraternização</option>
              </select>
            </label>
            <ButtonAdd type={event} item={product}>
              Adicionar
            </ButtonAdd>{" "}
          </Card>
        ))}
      </Content>
    </Container>
  );
};

export default HomeBeers;
