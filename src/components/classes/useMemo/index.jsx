/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { memo, useCallback, useMemo, useState } from "react";

// const Text = memo(() => {
//   console.log("Componente Text");
//   return <div>Hola</div>;
// });

const CounterTitle = memo(({ user, onClick }) => {
  console.log("El contador está en: ");
  return <div onClick={onClick} style={{ background: "red" }}>{user.nombre} tu contador está en</div>;
});

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const _handleReduce = () => {
    setCount((prev) => Math.max(prev - 1, 0));
  };
  const _handleIncrement = () => {
    increment();
  };

  //   const title = "Luis"
  const user = useMemo(() => {
    return { nombre: "Luis" };
  }, []);

  const _handleClickCounterTitle = useCallback(() => {
    console.log("Hola desde _handleClickCounterTitle");
    setCount(prev => prev + 1)
  }, []);

  return (
    <div>
      <div>{count}</div>
      <CounterTitle user={user} onClick={_handleClickCounterTitle} />
      <button onClick={_handleIncrement}>Aumentar</button>
      <button onClick={_handleReduce}>Disminuir</button>
    </div>
  );
};
export default UseMemo;
