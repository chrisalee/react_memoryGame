import React, { useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/cal.png", stat: "" },
      { id: 1, img: "/img/cal.png", stat: "" },
      { id: 2, img: "/img/chicagoFire.jpg", stat: "" },
      { id: 2, img: "/img/chicagoFire.jpg", stat: "" },
      { id: 3, img: "/img/dmb.jpg", stat: "" },
      { id: 3, img: "/img/dmb.jpg", stat: "" },
      { id: 4, img: "/img/landscape.jpg", stat: "" },
      { id: 4, img: "/img/landscape.jpg", stat: "" },
      { id: 5, img: "/img/naruto.jpg", stat: "" },
      { id: 5, img: "/img/naruto.jpg", stat: "" },
      { id: 6, img: "/img/oar.jpg", stat: "" },
      { id: 6, img: "/img/oar.jpg", stat: "" },
      { id: 7, img: "/img/rasengan.png", stat: "" },
      { id: 7, img: "/img/rasengan.png", stat: "" },
      { id: 8, img: "/img/self.png", stat: "" },
      { id: 8, img: "/img/self.png", stat: "" },
      { id: 9, img: "/img/elephant.jpg", stat: "" },
      { id: 9, img: "/img/elephant.jpg", stat: "" },
      { id: 10, img: "/img/nd.jpg", stat: "" },
      { id: 10, img: "/img/nd.jpg", stat: "" },
      { id: 11, img: "/img/ndcoach.jpg", stat: "" },
      { id: 11, img: "/img/ndcoach.jpg", stat: "" },
      { id: 12, img: "/img/team7.jpg", stat: "" },
      { id: 12, img: "/img/team7.jpg", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  const check = (current) => {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  };

  const handleClick = (id) => {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  };

  return (
    <div className="container">
      {items.map((item, idx) => (
        <Card key={idx} item={item} id={idx} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Cards;
