import { useState } from "react";
import Counter from "../../Counter";

const UseState = () => {
  const [isVisibleCount, setIsVisibleCounter] = useState(true);

  const _handleToggleIsVisibleCount = () => {
    setIsVisibleCounter((prev) => !prev);
  };
  return (
    <div>
      <button onClick={_handleToggleIsVisibleCount}>
        {isVisibleCount ? "Ocultar" : "Mostrar"}
      </button>
      {isVisibleCount && <Counter />}
    </div>
  );
};

export default UseState;
