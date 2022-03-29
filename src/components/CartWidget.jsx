import React from "react";

export default function CartWidget() {
  return (
    <>
      <div
        style={{
          width: "45px",
          height: "45px",
          backgroundColor: "#B4B4B4",
          borderRadius: "25%",
        }}
      >
        <button
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
            border: "1px solid transparent",
            borderRadius: "25%",
            cursor: "pointer",
            justifyContent: "start",
            alignContent: "center",
          }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src="/public/shoppingcart.png"
            alt="Shop Cart"
          />
        </button>
      </div>
    </>
  );
}
