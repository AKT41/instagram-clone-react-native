import React, { useState, createContext } from "react";
import { Button } from "react-native";

export const DarkModeContext = createContext({
  isDarkModeEnabled: true,
  setDarkModeEnabled: () => {},
});

const DarkModeToggle = () => {
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkModeEnabled(!isDarkModeEnabled);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkModeEnabled, setDarkModeEnabled }}>
      <Button
        onPress={handleDarkModeToggle}
        title={isDarkModeEnabled ? "Turn off Dark Mode" : "Turn on Dark Mode"}
      />
    </DarkModeContext.Provider>
  );
};

const ModeToggle = () => {
  return <DarkModeToggle />;
};

export default ModeToggle;
