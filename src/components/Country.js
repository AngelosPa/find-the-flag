import React from "react";

const Country = ({ results }) => {
  const lands = results.map((obj, i) => {
    console.log(obj);
    const { name, flag, capital, population, region, languages } = obj;
    return (
      <ul key={i} className="country-info">
        <li>Region: {region}</li>
        <li>
          {" "}
          language:&nbsp;
          {languages.map((lang) => `${lang.name} `)}&nbsp;
        </li>
        <li>Capital: {capital}</li>
        <li>Population: {population}</li>
        <li>
          <img src={flag} alt={name} className="flag" />
        </li>
      </ul>
    );
  });

  return <React.Fragment>{lands}</React.Fragment>;
};
export default Country;
