import React, { useState } from "react";

const WidgetContext = React.createContext();

function Context({ children }) {
  const [serverError, setServerError] = useState(false);

  return (
    <WidgetContext.Provider value={{ serverError, setServerError }}>
      {children}
    </WidgetContext.Provider>
  );
}

export const useWidget = () => React.useContext(WidgetContext);

export default Context;
