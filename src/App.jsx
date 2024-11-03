import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
 const [calVal,setCalVal] = useState('');
  const handleButtonClick = (value)=>{
    if (value === "C") {
      setCalVal("");
    } else if (value === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + value;
      setCalVal(newDisplayValue);
    }
  }
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={handleButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
