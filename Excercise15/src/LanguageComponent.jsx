import React, { useContext } from "react";
import UserContext from "./UserContext";

const LanguageComponent = () => {
  const { theme } = useContext(UserContext);

  const style = {
    textAlign: "center",

    color: theme === "english" ? "blue" : "green",
    text: theme === "english" ? "Hello!" : "Hola!",
  };

  return (
    <>
      <div 
        style={style}>
           <h2 > <strong> {style.text}  </strong> </h2>

      </div>

    </>
  );
};

export default LanguageComponent;
