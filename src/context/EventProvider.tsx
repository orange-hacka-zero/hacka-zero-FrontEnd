import React, { ReactNode, createContext, useState, useEffect } from "react";

type EventsContextProps = {
  children: ReactNode;
};

type EventsContextType = {
  nome: string;
  showDetails: boolean;
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

const EventContext = createContext<EventsContextType>({} as EventsContextType);
const EventProvider: React.FC<EventsContextProps> = ({ children }) => {
  const [showDetails, setShowDetails] = useState(false);
  const nome = "mari";

  useEffect(() => {
    console.log("context render");
  }, []);
  return (
    <EventContext.Provider
      value={{
        showDetails,
        setShowDetails,
        nome,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export { EventProvider, EventContext };
