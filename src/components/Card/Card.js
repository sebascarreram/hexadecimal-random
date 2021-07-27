import React, { useState, useRef, useEffect } from "react";
import SnackBar from "./../SnackBar/SnackBar";

import { HiOutlineClipboardCopy } from "react-icons/hi";

const Card = ({ hexa }) => {
  const [copyText, setCopyText] = useState("");
  const [isSnack, setIsSnack] = useState(false);

  const TextCopy = ({ text }) => {
    const [data, setData] = useState(null);
    let myRef = useRef(null);

    useEffect(() => setData(text), [text]);

    useEffect(() => {
      if (myRef.current && data) {
        myRef.current.select();
        document.execCommand("copy");
        setData(null);
      }
    }, [data]);
    //  console.log(data);
    return (
      <div>
        {data && (
          <textarea ref={myRef} onChange={() => setData(text)} value={data}>
            {data}
          </textarea>
        )}
      </div>
    );
  };

  const functionAll = (e) => {
    setCopyText(e);
    setIsSnack(true);

    setTimeout(() => setIsSnack(false), 2700);
  };
  const upperCaseText = hexa.toUpperCase();
  return (
    <>
      <div className="card" style={{ background: hexa }}>
        <h1 className="card__title">{upperCaseText}</h1>
        <HiOutlineClipboardCopy
          className="card__icon"
          onClick={() => functionAll(hexa)}
        />
      </div>

      <TextCopy text={copyText} />
      {isSnack ? <SnackBar className="show" name={upperCaseText} /> : null}
    </>
  );
};
export default Card;
