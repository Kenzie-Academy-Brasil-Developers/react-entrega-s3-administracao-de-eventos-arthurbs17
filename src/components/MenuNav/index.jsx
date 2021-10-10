import { useHistory } from "react-router";
import { ButtonNav, Header } from "./styles";

const MenuNav = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <Header>
      <ButtonNav onClick={() => sendTo("/")}>Bebidas</ButtonNav>
      <ButtonNav onClick={() => sendTo("/graduation")}>Formatura</ButtonNav>
      <ButtonNav onClick={() => sendTo("/wedding")}>Casamento</ButtonNav>
      <ButtonNav onClick={() => sendTo("/confraternization")}>
        Confraternização
      </ButtonNav>
    </Header>
  );
};

export default MenuNav;
