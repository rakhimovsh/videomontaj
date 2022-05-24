import React from "react";

const Context = React.createContext();

function Provider({ children }) {
  const [language, setLanguage] = React.useState("uz");
  return (
    <Context.Provider value={{ language, setLanguage }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
