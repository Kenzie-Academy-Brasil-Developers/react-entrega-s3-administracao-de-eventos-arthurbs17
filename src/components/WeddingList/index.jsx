import { useContext } from "react";
import { WeddingContext } from "../../providers/Wedding/wedding";

const WeddingList = () => {
  const { weddingBag } = useContext(WeddingContext);
  return (
    <div>
      <ul>
        {weddingBag.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WeddingList;
