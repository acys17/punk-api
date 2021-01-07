import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
// import firebase from "./firebase";

import NavBar from "./components/NavBar";
import Main from "./containers/Main";
import NoneFound from "./components/NoneFound";

const App = () => {
  let [beerInfo, setBeer] = useState([]);
  const [filterABV, setfilterABV] = useState(false);
  const [filterRange, setfilterRange] = useState(false);
  const [filterAcidity, setfilterAcidity] = useState(false);
  
  const getBeers = (searchTerm) => {
      fetch(`https://api.punkapi.com/v2/beers?`)
      .then(request => request.json())
      .then(response => {
        if(searchTerm !== undefined) {
          response = response.filter(beer => beer.name.toLowerCase().includes(searchTerm.toLowerCase()))
        }
        const newBeer = response.map(beer => {
          return beer;
        })
        setBeer(newBeer);
      })
      .catch((error => {
        console.log(error);
      }))
  }

  if(filterABV === true) {
    beerInfo = beerInfo.filter((beer) => beer.abv > 6);
  };

  if(filterRange === true) {
    beerInfo = beerInfo.filter((beer) => beer.first_brewed.charAt(5) == 0 || beer.first_brewed.charAt(3) < 2);
  };

  if(filterAcidity === true) {
    beerInfo = beerInfo.filter((beer) => beer.ph < 4);
  };
  
  useEffect(() => {
    getBeers();
  }, []); 

  const contentShown = beerInfo.length ? (
    <Main beerInfo={beerInfo} />
  ) : (
    <NoneFound />
  );

  return (
    <div className={styles.App}>
      <NavBar updateSearchText={getBeers} filterABV={filterABV} setfilterABV={setfilterABV} filterRange={filterRange} setfilterRange={setfilterRange} filterAcidity={filterAcidity} setfilterAcidity={setfilterAcidity} />
      <section className={styles.gridContainer}>
        {contentShown}
      </section>
    </div>
  );
}

export default App;
