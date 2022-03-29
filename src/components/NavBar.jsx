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
              alignContent: "center",
              padding: "30px",
            }}
          >
            <li
              style={{
                color: "white",
                fontSize: "30px",
                paddingRight: "150px",
              }}
            >
              Natura Latina
            </li>
            <li style={{ padding: "10px", paddingRight: "100px" }}>
              <a
                style={{
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "none",
                }}
                href="none"
              >
                Inicio
              </a>
            </li>
            <li style={{ padding: "10px", paddingRight: "100px" }}>
              <a
                style={{
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "none",
                }}
                href="none"
              >
                Tienda
              </a>
            </li>
            <li style={{ padding: "10px", paddingRight: "100px" }}>
              <a
                style={{
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "none",
                }}
                href="none"
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
