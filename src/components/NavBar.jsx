import React from "react";

export default function NavBar() {
  return (
    <>
      <div>
        <nav>
          <ul
            style={{
              listStyle: "none",
              backgroundColor: "#509B4B",
              width: "100%",
              display: "inline-flex",
              justifyContent: "center",
              padding: "30px",
            }}
          >
            <li style={{ paddingRight: "100px" }}>
              <a
                style={{
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "none",
                }}
                href="#"
              >
                Inicio
              </a>
            </li>
            <li style={{ paddingRight: "100px" }}>
              <a
                style={{
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "none",
                }}
                href="#"
              >
                Tienda
              </a>
            </li>
            <li style={{}}>
              <a
                style={{
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "none",
                }}
                href="#"
              >
                Nosotros
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
