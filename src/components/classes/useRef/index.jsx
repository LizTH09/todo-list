/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  forwardRef,
} from "react";

const CounterTitle = memo(({ count, user, total, onClick }) => {
  //   console.log("hola, soy el component Text");

  return (
    <div onClick={onClick} style={{ background: "red" }}>
      {JSON.stringify(user)}, tu contador esta en: {count}
      <div>total: {total}</div>
    </div>
  );
});

const Increment = forwardRef(({ onClick }, ref) => {
  return (
    <button onClick={onClick} ref={ref}>
      +
    </button>
  );
});

const UseRef = () => {
  const [count, setCount] = useState(0);
  //Define referencias
  const counter2 = useRef(0);
  const buttonRef = useRef();

  const _handleClickIncrement = () => setCount((prevCount) => prevCount + 1);

  const _handleClickDecrease = () => setCount((prevCount) => prevCount - 1);

  const total = "Luis";
  //   const user = {};
  const user = useMemo(() => {
    return {};
  }, []);

  const _handleClickCounterTitle = useCallback(() => {
    // buttonRef.current.click();
    counter2.current = counter2.current + 1;
  }, []);

  useEffect(() => {
    console.log("buttonRef.current", buttonRef.current);
  }, []);

  return (
    <div>
      {count}
      <CounterTitle
        user={user}
        total={total}
        onClick={_handleClickCounterTitle}
      />

      <button onClick={_handleClickDecrease}>-</button>
      <Increment onClick={_handleClickIncrement} ref={buttonRef} />

      {counter2.current}
    </div>
  );
};

export default UseRef;
