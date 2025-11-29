"use client";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          padding: "16px 20px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1000,
          background: "black",
        }}
      >
        {/* LOGO */}
        <a
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: 700,
            letterSpacing: "0.08em",
            fontSize: "1rem",
          }}
        >
          HELGA WRETMAN
        </a>

        {/* DESKTOP MENU */}
        <nav
          className="desktop-menu"
          style={{
            display: "none",
            gap: "24px",
            fontSize: "1rem",
          }}
        >
          <a href="/works" style={{ color: "white", textDecoration: "none" }}>
            Works
          </a>
          <a href="/about" style={{ color: "white", textDecoration: "none" }}>
            About
          </a>
          <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>
        </nav>

        {/* BURGER BUTTON (nur mobil) */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="burger"
          style={{
            width: "28px",
            height: "22px",
            position: "relative",
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "6px",
            padding: 0,
          }}
        >
          <span
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "white",
              transition: "0.3s",
              transform: open ? "rotate(45deg) translate(5px, 6px)" : "none",
            }}
          />
          <span
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "white",
              opacity: open ? 0 : 1,
              transition: "0.3s",
            }}
          />
          <span
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "white",
              transition: "0.3s",
              transform: open ? "rotate(-45deg) translate(5px, -6px)" : "none",
            }}
          />
        </button>
      </header>

      {/* OVERLAY FULLSCREEN MENU */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "black",
          display: open ? "flex" : "none",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "32px",
          zIndex: 900,
        }}
      >
        <a
          href="/works"
          onClick={() => setOpen(false)}
          style={{
            color: "white",
            fontSize: "2rem",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          Works
        </a>
        <a
          href="/about"
          onClick={() => setOpen(false)}
          style={{
            color: "white",
            fontSize: "2rem",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          About
        </a>
        <a
          href="/contact"
          onClick={() => setOpen(false)}
          style={{
            color: "white",
            fontSize: "2rem",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          Contact
        </a>
      </div>

      {/* RESPONSIVE CSS */}
      <style>{`
        @media (min-width: 768px) {
          .burger {
            display: none !important;
          }
          .desktop-menu {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
