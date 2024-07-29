import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type EmergencyContextType = {
  emergency: string;
  setEmergency: Dispatch<SetStateAction<string>>;
};

const EmergencyContext = createContext<EmergencyContextType | undefined>(
  undefined
);

function useEmergency(): EmergencyContextType {
  const context = useContext(EmergencyContext);
  if (!context) {
    throw new Error("useEmergency must be used within an EmergencyProvider");
  }
  return context;
}

const EmergencyProvider = (props: { children: ReactNode }): ReactElement => {
  const [emergency, setEmergency] = useState("");

  return (
    <EmergencyContext.Provider {...props} value={{ emergency, setEmergency }} />
  );
};

export { EmergencyProvider, useEmergency };
