import React, { useState } from "react";
import styles from "./Card.module.scss";

import MoreDetail from "../MoreDetail";

const Card = (props) => {
  const { 
    name, 
    tagline, 
    image_url, 
    description, 
    abv, 
    first_brewed,
    food_pairing,
    ibu,
    ingredients
  } = props.beerInfo;

  const listHops = ingredients.hops.map(ingredient => {
    return (ingredient.name);
  })

  const listMalt = ingredients.malt.map(ingredient => {
    return (ingredient.name);
  })

  const [cardVisible, setCardVisible] = useState(false);

  const shortenDescription = (description) => {
    if(cardVisible === false && description.length > 80) {
      return description.substring(0, 80) + "...";
    } else {
      return description
    }
  };

  const shortenTagline = (tagline) =>
    tagline.length < 50
    ? tagline
    : tagline.substring(0, 50) + "...";

  const isCardVisible = (e) => {
    setCardVisible(!cardVisible)
  }
 
  const cardIsVisible = cardVisible ? styles.primaryCard : styles.card
    

  return (
    <section className={cardIsVisible} >
      <img src={image_url} alt={name}/>
      <h2 onClick={isCardVisible} >{name}</h2>
      <h3>{shortenTagline(tagline)}</h3>
      <p className={styles.description}><strong>Description:</strong> {shortenDescription(description)}</p>
      <p className={styles.abv}><strong>ALC VOL:</strong> {abv}%</p>
      <p className={styles.firstBrewed}><strong>First brewed:</strong> {first_brewed}</p>
      <p className={styles.foodPairing}><strong>Food pairing:</strong> {food_pairing.join(". ")}</p>
      <p className={styles.ibu}><strong>IBU:</strong> {ibu}</p>
      <div className={styles.ingredients, styles.hidden}><strong>Ingredients:</strong>
        <p>Hops: {listHops.join(", ")}</p>
        <p>Malt: {listMalt.join(", ")}</p>
      </div> 
    </section>
  );
};

export default Card;
