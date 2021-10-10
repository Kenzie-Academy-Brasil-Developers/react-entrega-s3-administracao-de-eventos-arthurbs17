import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { HomeBeersContext } from "../../providers/HomeBeers/homeBeers";
import { ButtonAdd } from "../Button/buttons";
import { Card } from "./styles";

const HomeBeers = () => {
  const { products } = useContext(HomeBeersContext);
  const [event, setEvent] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setEvent(e.target.value);
  };

  return (
    <div>
      <button onClick={() => history.push("/confraternization")}>confra</button>
      <button onClick={() => history.push("/graduation")}>formatura</button>
      <button onClick={() => history.push("/wedding")}>casamento</button>
      <ul>
        {products.map((product) => (
          <Card key={product.id}>
            <img src={product.image_url} alt={product.name} />
            <h3>{product.name}</h3>
            <span> Fabricação: {product.first_brewed}</span>
            <span>{product.description}</span>
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
      </ul>
    </div>
  );
};

export default HomeBeers;
