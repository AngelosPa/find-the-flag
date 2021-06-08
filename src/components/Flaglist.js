import React from "react";

const Flaglist = ({ lista }) => {
  const flags = lista.map((obj, i) => {
    console.log(obj);
    const { name, flag, capital, population, region } = obj;
    return (
      <div key={i}>
        {name}&nbsp; Region:&nbsp; {region} &nbsp; Capital:&nbsp; {capital}
        &nbsp; Population: &nbsp;{population}&nbsp;
        <img src={flag} alt={name} className="flag" />
      </div>
    );
  });

  return <React.Fragment>{flags}</React.Fragment>;
};
export default Flaglist;
