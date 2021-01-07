import React from 'react';

import Card from "../../components/Card"

const CardList = (props) => {
  const { beerInfo } = props;
  
  const getCard = (beer) => {
    return <Card beerInfo={beer} key={beer.id} />
  }

  return (
    <>
      {beerInfo.map(getCard)}
    </>
  );
};

export default CardList;
