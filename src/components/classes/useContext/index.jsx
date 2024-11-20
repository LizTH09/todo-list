/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useState, useContext, createContext, memo } from "react";

const Context = createContext();

const Tatanieto = () => {
  const state = useContext(Context);

  return (
    <>
      <div>Soy el tatanieto - no tengo hijos T T aun :v</div>
      <div>{state.title}</div>
    </>
  );
};

const Nieto = () => {
  return (
    <div>
      Soy el nieto, se espaco hijo, cuidenlo
      <Tatanieto />
    </div>
  );
};

const Hijo = memo(() => {
  console.log("hijo");
  return (
    <div>
      Soy el hijo
      <Nieto />
    </div>
  );
});

const UseContext = () => {
  const [state, setState] = useState({
    search: "",
    title: "",
  });

  const _handleChange = ({ target: { value, name } }) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Context.Provider value={state}>
      <input value={state.search} onChange={_handleChange} name="search" />
      <input value={state.title} onChange={_handleChange} name="title" />
      Soy padre
      <Hijo />
    </Context.Provider>
  );
};

export default UseContext;
