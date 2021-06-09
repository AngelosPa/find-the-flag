import React from "react";
var countriesList = require("countries-list");

const Flaglist = ({ lista }) => {
  //for later to implement emojis from this library
  const emoj = countriesList.getEmojiFlag("UA");
  console.log(emoj);

  const flags = lista.map((obj, i) => {
    console.log(obj);
    const { name, flag, capital, population, region, languages } = obj;
    return (
      <div key={i}>
        language:&nbsp;
        {languages.map((lang) => lang.name)}&nbsp;
        {name}&nbsp; Region:&nbsp; {region} &nbsp; Capital:&nbsp; {capital}
        &nbsp; Population: &nbsp;{population}&nbsp;
        <img src={flag} alt={name} className="flag" />
      </div>
    );
  });

  return <React.Fragment>{flags}</React.Fragment>;
};
export default Flaglist;

// passo j9F!grr@KNrK7mx
