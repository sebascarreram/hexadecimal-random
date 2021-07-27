import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import hexadecimal from "./utils/hexadecimal";
import Button from "./components/Button/Button";

const Main = () => {
  const [copyText, setCopyText] = useState([]);

  const hexaArray = (nbr = 15) => {
    let hexa = [];
    //  console.log(hexa);
    //  numbers 15 for card
    for (let i = 0; i < nbr; i++) {
      hexa.push(hexadecimal());
    }
    //  console.log(hexa);
    return setCopyText(hexa);
  };

  if (!copyText.length) {
    hexaArray();
  }
  //  console.log(copyText);

  return (
    <>
      <Button click={hexaArray}>Random colors</Button>
      <main className="main container">
        {copyText.map((el) => {
          return <Card key={el} hexa={el} />;
        })}
      </main>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export default App;
