import React from "react";
import { useParams, useLocation } from "react-router-dom";
import "../../../styles/styles.css";

const Details = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const {
    name,
    image,
    typeOne,
    typeTwo,
    abilities: stringOfAbilities,
    weight,
  } = Object.fromEntries(params.entries());

  const abilities = JSON.parse(stringOfAbilities);
  const printAbilities = () =>
    abilities.map((ability) => {
      return ability.charAt(0).toUpperCase() + ability.slice(1);
    }).join(", ");

  return (
    <section className="details-container">
      <article>
        <img src={image} alt="Main img" />
        <h2>#{id}: {name}</h2>
      </article>
      <article>
        <p>
          <strong>TYPE 1:</strong> {typeOne}
        </p>
        {typeTwo && (
          <p>
            <strong>TYPE 2:</strong> {typeTwo}
          </p>
        )}
        <p>
          <strong>WEIGHT:</strong> {weight}
        </p>
        <p>
          <strong>Abilities:</strong> {printAbilities()}
        </p>
      </article>
    </section>
  );
};

export default Details;
