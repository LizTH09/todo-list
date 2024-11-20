import { useEffect, useState } from "react";

const Counter = () => {
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

  useEffect(() => {
    const id = Math.random();
    console.log("mount");
    const timer = setInterval(() => {
      increment();
      console.log("id: ", id);
    }, 1000);
    return () => {
      console.log("unmount");
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    console.log("updated");
  }, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={_handleIncrement}>Aumentar</button>
      <button onClick={_handleReduce}>Disminuir</button>
    </div>
  );
};
export default Counter;
