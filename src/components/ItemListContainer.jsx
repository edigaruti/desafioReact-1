import React from "react";

const Greeting = (props) => {
  return (
    <span style={{ fontSize: "20px" }}>
      Hola {props.name}! Bienvenide a nuestra tienda!
    </span>
  );
};

export default function ItemListContainer() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Greeting name="persona" />
      </div>
    </>
  );
}
