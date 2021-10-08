import { useContext } from "react";
import { ConfraternizationContext } from "../../providers/Confraternization/confraternization";

const ConfraternizationList = () => {
  const { confraBag } = useContext(ConfraternizationContext);
  return (
    <div>
      <ul>
        {confraBag.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConfraternizationList;
