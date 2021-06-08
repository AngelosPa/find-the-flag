import "./scss/Main.scss";
//WE IMPORT AXIOS lIKE ThAT
import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Country from "./components/Country";
import Flaglist from "./components/Flaglist";
const App = () => {
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState([]);
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  function openFlagList() {
    let flagi = `https://restcountries.eu/rest/v2/all`;
    axios(flagi)
      .then(({ data }) => setLista(data))
      .catch((err) => console.log(`Your had an ${err}`));
    console.log(flagi);
  }
  function changeHandle(e) {
    setUserInput(e.target.value);
  }
  function submitHandle(e) {
    e.preventDefault();
    // to to replace the empty spaces that user writes zb great britain in order to understand it as url
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
    let textToUrl = encodeURIComponent(userInput);
    //console.log(textToUrl);
    let endPoint = `https://restcountries.eu/rest/v2/name/${textToUrl}`;

    // fetch(endPoint)
    // .then((res)=> res.json())
    // .then((data)=>setResults(data))
    //we make our promise we set our data to our results(setResults) and ready to send it to the components
    axios(endPoint)
      .then(({ data }) => setResults(data))
      .catch((err) => console.log(`Your had an ${err}`));
  }

  //if condition til the settimeout is 0 so the loading gets false and return us the app instead of Loading part
  if (loading) return <Loading />;

  return (
    <div className="body-container">
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={userInput}
          onChange={changeHandle}
          placeholder="Write a country name"
        />
        <button type="submit">Search</button>
      </form>
      <button onClick={openFlagList}>SEARCH YOUR FLAG</button>
      <Country results={results} />
      <div className="flag-list">
        <Flaglist lista={lista} />
      </div>

      <div className="map"></div>
    </div>
  );
};

export default App;
