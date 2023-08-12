import React from "react";
import { useParams } from "react-router-dom";

const Test = () => {
  const reqem = {
    key1: '1',
    key2: '2',
    key3: '3'
  };
  
  const ikiValue = '2';
  
  const objectValues = Object.values(reqem);
  
  if (objectValues.includes(ikiValue)) {
    console.log(`Ikinin deyeri: ${ikiValue}`);
  } else {
    console.log(`Basqa deyer: `);
  }

  return <div>tst</div>;
};

export default Test;
