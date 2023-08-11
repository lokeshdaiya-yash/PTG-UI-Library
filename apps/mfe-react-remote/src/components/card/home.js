import React from "react";
import img1 from "../images/thrones.jpg";
import img2 from "../images/fire.jpg";
import img3 from "../images/Crows.jpg";
import img4 from "../images/Dragons.jpg";
import img5 from "../images/kings.jpg";
import img6 from "../images/door.jpg";
import img7 from "../images/author.jpg";
import img8 from "../images/stephan.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card-page.css";
import CardPage from "./card-page";
export default function Home({ handleClick }) {
  const books = [
    {
      id: 1,
      title: "A Game of thrones",
      img: img1,
      price: 60,
      amount: 1,
    },

    {
      id: 2,
      title: "Fire and Blood",
      img: img2,
      price: 70,
      amount: 1,
    },

    {
      id: 3,
      title: "A Feast for crows",
      img: img3,
      price: 60,
      amount: 1,
    },

    {
      id: 4,
      title: "A Dance with dragons",
      img: img4,
      price: 70,
      amount: 1,
    },
    {
      id: 5,
      title: "A Clash of kings",
      img: img5,
      price: 60,
      amount: 1,
    },

    {
      id: 6,
      title: "Lock every door",
      img: img6,
      price: 70,
      amount: 1,
    },
    {
      id: 7,
      title: "The Author",
      img: img7,
      price: 70,
      amount: 1,
    },
    {
      id: 8,
      title: "Stephan Kings",
      img: img8,
      price: 70,
      amount: 1,
    },
  ];

  return (
    <>
      <div className="container">
        <section className="container-fluid">
          {books.map((item) => (
            <CardPage key={item.id} item={item} handleClick={handleClick} />
          ))}
        </section>
      </div>
    </>
  );
}
