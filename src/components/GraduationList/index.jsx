import { useContext } from "react";
import { GraduationContext } from "../../providers/ Graduation/graduation";

const GraduationList = () => {
  const { graduationBag } = useContext(GraduationContext);
  return (
    <div>
      <ul>
        {graduationBag.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GraduationList;
