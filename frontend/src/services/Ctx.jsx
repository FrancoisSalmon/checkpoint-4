import axios from "axios";
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ctxProvider = createContext();
export default ctxProvider;

export function CtxProvider({ children }) {
  const [games, setGames] = useState([]);
  const [hardwares, setHardwares] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/game"}`)
      .then(({ data }) => {
        setGames(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/hardware"}`)
      .then(({ data }) => {
        setHardwares(data);
      });
  }, []);

  return (
    <ctxProvider.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        games,
        hardwares,
      }}
    >
      {children}
    </ctxProvider.Provider>
  );
}

CtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
