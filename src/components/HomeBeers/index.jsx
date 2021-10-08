import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { HomeBeersContext } from "../../providers/HomeBeers/homeBeers";
import ButtonAdd from "../Button";

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
          <li key={product.id}>
            {product.name}
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeBeers;
